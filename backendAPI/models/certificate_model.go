package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Certificate struct {
	Id     primitive.ObjectID `json:"id,omitempty"`
	Title  string             `json:"title,omitempty" validate:"required"`
	Issuer string             `json:"issuer,omitempty" validate:"required"`
	Link   string             `json:"link,omitempty" validate:"required"`
}
