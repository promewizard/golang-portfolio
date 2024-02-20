package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Education struct {
	Id            primitive.ObjectID `json:"id,omitempty"`
	University    string             `json:"university,omitempty" validate:"required"`
	Qualification string             `json:"qualification,omitempty" validate:"required"`
	Years         string             `json:"years,omitempty" validate:"required"`
}
