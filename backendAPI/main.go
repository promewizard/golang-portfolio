package main

import (
	"backendAPI/configs"
	"backendAPI/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*", // allow all origins
	}))

	//run database
	configs.ConnectDB()

	//routes
	routes.CertificateRoute(app)
	routes.ExperienceRoute(app)
	routes.ProjectRoute(app)

	app.Listen(":8000")
}
