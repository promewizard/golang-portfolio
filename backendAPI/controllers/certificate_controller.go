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
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//use the validator library to validate required fields
	if validationErr := validate.Struct(&cert); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	newCert := models.Certificate{
		Id:     primitive.NewObjectID(),
		Title:  cert.Title,
		Issuer: cert.Issuer,
		Link:   cert.Link,
	}

	result, err := certCollection.InsertOne(ctx, newCert)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	return c.Status(http.StatusCreated).JSON(responses.UserResponse{Status: http.StatusCreated, Message: "success", Data: &fiber.Map{"data": result}})
}

// func GetAUser(c *fiber.Ctx) error {
// 	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
// 	userId := c.Params("userId")
// 	var user models.User
// 	defer cancel()

// 	objId, _ := primitive.ObjectIDFromHex(userId)

// 	err := certCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&user)
// 	if err != nil {
// 		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
// 	}

// 	return c.Status(http.StatusOK).JSON(responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": user}})
// }

// func EditAUser(c *fiber.Ctx) error {
// 	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
// 	userId := c.Params("userId")
// 	var user models.User
// 	defer cancel()

// 	objId, _ := primitive.ObjectIDFromHex(userId)

// 	//validate the request body
// 	if err := c.BodyParser(&user); err != nil {
// 		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
// 	}

// 	//use the validator library to validate required fields
// 	if validationErr := validate.Struct(&user); validationErr != nil {
// 		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": validationErr.Error()}})
// 	}

// 	update := bson.M{"name": user.Name, "location": user.Location, "title": user.Title}

// 	result, err := certCollection.UpdateOne(ctx, bson.M{"id": objId}, bson.M{"$set": update})
// 	if err != nil {
// 		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
// 	}

// 	//get updated user details
// 	var updatedUser models.User
// 	if result.MatchedCount == 1 {
// 		err := certCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&updatedUser)
// 		if err != nil {
// 			return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
// 		}
// 	}

// 	return c.Status(http.StatusOK).JSON(responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": updatedUser}})
// }

func DeleteACert(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	certId := c.Params("certId")
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(certId)

	result, err := certCollection.DeleteOne(ctx, bson.M{"id": objId})
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if result.DeletedCount < 1 {
		return c.Status(http.StatusNotFound).JSON(
			responses.UserResponse{Status: http.StatusNotFound, Message: "error", Data: &fiber.Map{"data": "User with specified ID not found!"}},
		)
	}

	return c.Status(http.StatusOK).JSON(
		responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": "User successfully deleted!"}},
	)
}

func GetAllCerts(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var certs []models.Certificate
	defer cancel()

	results, err := certCollection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	//reading from the db in an optimal way
	defer results.Close(ctx)
	for results.Next(ctx) {
		var singleCert models.Certificate
		if err = results.Decode(&singleCert); err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{Status: http.StatusInternalServerError, Message: "error", Data: &fiber.Map{"data": err.Error()}})
		}

		certs = append(certs, singleCert)
	}

	return c.Status(http.StatusOK).JSON(
		responses.UserResponse{Status: http.StatusOK, Message: "success", Data: &fiber.Map{"data": certs}},
	)
}
