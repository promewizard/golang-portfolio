package controllers

import (
	"backendAPI/configs"
	"backendAPI/models"
	"backendAPI/responses"
	"context"
	"net/http"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var certCollection *mongo.Collection = configs.GetCollection(configs.DB, "certificates")
var validate = validator.New()

func CreateCert(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var cert models.Certificate
	defer cancel()

	//validate the request body
	if err := c.BodyParser(&cert); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.Response{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//use the validator library to validate required fields
	if validationErr := validate.Struct(&cert); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.Response{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	newCert := models.Certificate{
		Id:     primitive.NewObjectID(),
		Title:  cert.Title,
		Issuer: cert.Issuer,
		Link:   cert.Link,
		Image:  cert.Image,
	}

	result, err := certCollection.InsertOne(ctx, newCert)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	return c.Status(http.StatusCreated).JSON(responses.Response{Status: http.StatusCreated, Message: "success", Data: &fiber.Map{"data": result}})
}

func DeleteACert(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	certId := c.Params("certId")
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(certId)

	result, err := certCollection.DeleteOne(ctx, bson.M{"id": objId})
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if result.DeletedCount < 1 {
		return c.Status(http.StatusNotFound).JSON(
			responses.Response{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": "Certificate with specified ID not found!"}},
		)
	}

	return c.Status(http.StatusOK).JSON(
		responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": "Certificate successfully deleted!"}},
	)
}

func GetAllCerts(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var certs []models.Certificate
	defer cancel()

	results, err := certCollection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//reading from the db in an optimal way
	defer results.Close(ctx)
	for results.Next(ctx) {
		var singleCert models.Certificate
		if err = results.Decode(&singleCert); err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.Response{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}

		certs = append(certs, singleCert)
	}

	return c.Status(http.StatusOK).JSON(
		responses.Response{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": certs}},
	)
}
