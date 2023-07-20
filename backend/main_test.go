package main

import (
	"net/http"
	"testing"
)

func TestFetchPokemonID(t *testing.T) {
	res, err := FetchPokemonID("")
	if err != nil {
		t.Errorf("Error fetching pokemon: %v", err)
	}
	if res.StatusCode != http.StatusOK {
		t.Errorf("Expected status code 200, got %v", res.StatusCode)
	}
}
