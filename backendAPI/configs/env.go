package configs

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func EnvMongoURI() string {
	// Attempt to load .env file if it exists, but don't fail if it doesn't
	_ = godotenv.Load() // Note: Ignoring error on purpose

	mongoURI := os.Getenv("MONGOURI")
	if mongoURI == "" {
		log.Fatal("MONGOURI environment variable not set")
	}

	return mongoURI
}

func EnvPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	return port
}

