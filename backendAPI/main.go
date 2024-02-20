package main

import (
	"backendAPI/configs"
	"backendAPI/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	//run database
	configs.ConnectDB()

	//routes
	routes.UserRoute(app)
	routes.CertificateRoute(app)
	routes.ExperienceRoute(app)

	app.Listen(":6000")
}
