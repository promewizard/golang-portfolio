package routes

import (
	"backendAPI/controllers"

	"github.com/gofiber/fiber/v2"
)

func ProjectRoute(app *fiber.App) {
	app.Post("/project", controllers.CreateProject)
	app.Delete("/project/:ProjectId", controllers.DeleteAProject)
	app.Get("/projects", controllers.GetAllProjects)
}
