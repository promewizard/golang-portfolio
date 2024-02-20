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
	routes.CertificateRoute(app)
	routes.ExperienceRoute(app)
	routes.ProjectRoute(app)

	app.Listen(":6000")
}
