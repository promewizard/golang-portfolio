package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Project struct {
	Id          primitive.ObjectID `json:"id,omitempty"`
	Name        string             `json:"name,omitempty" validate:"required"`
	Description string             `json:"description,omitempty" validate:"required"`
	GitHub      string             `json:"github,omitempty" validate:"required"`
	Category    string             `json:"category,omitempty" validate:"required"`
}
