package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Experience struct {
	Id       primitive.ObjectID `json:"id,omitempty"`
	Company  string             `json:"company,omitempty" validate:"required"`
	Role     string             `json:"role,omitempty" validate:"required"`
	Duration string             `json:"duration,omitempty" validate:"required"`
}
