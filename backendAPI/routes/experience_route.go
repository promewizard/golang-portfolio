package routes

import (
	"backendAPI/controllers"

	"github.com/gofiber/fiber/v2"
)

func ExperienceRoute(app *fiber.App) {
	app.Post("/experience", controllers.CreateExperience)
	app.Delete("/experience/:ExperienceId", controllers.DeleteAExperience)
	app.Get("/experiences", controllers.GetAllExperience)
}
