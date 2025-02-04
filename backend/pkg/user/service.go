package user

import (
	"context"
	"log"
	"pockethealth/internchallenge/pkg/datastore"
)

// ApiServices are an instance of an ApiServicer that implement the api actions for an ApiServicer
type UserApiService struct{}

// NewUserApiService creates a new Api Service
func NewUserApiService() UserApiService {
	return UserApiService{}
}

// PostRegister - Register a User
func (s UserApiService) PostRegister(ctx context.Context, name string, email string, FavouriteColour string,) (string, error) {
	// save user to datastore
	userId, err := datastore.CreateUser(ctx, name, email, FavouriteColour)
	if err != nil {
		log.Printf("error creating user: %q", err.Error())
		return "", err
	}
	// 1. CreateUser always returns nil and there's no restrictions on who can create a user, so everyone can register. 
	log.Printf("created user with id: %s\n", userId)

	// 3. Return the user id rather than the empty string
	return userId, err 
	// Test: curl -X POST http://localhost:8080/register -d '{"name": "test", "email": "test@gmail.com"}' -H "Content-Type: application/json"
	// curl -X POST: Send a POST request to URL
	// -d '{"name": "test", "email": "test@gmail.com"}': Send data in JSON
	// -H "Content-Type: application/json": Let server know it's JSON.
}
