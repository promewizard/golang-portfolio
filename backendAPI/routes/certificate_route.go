package routes

import (
	"backendAPI/controllers"

	"github.com/gofiber/fiber/v2"
)

func CertificateRoute(app *fiber.App) {
	app.Post("/cert", controllers.CreateCert)
	// app.Get("/cert/:CertId", controllers.GetACert)
	// app.Put("/cert/:CertId", controllers.EditACert)
	app.Delete("/cert/:CertId", controllers.DeleteACert)
	app.Get("/certs", controllers.GetAllCerts)
}
