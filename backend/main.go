package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Pokemon struct {
	ID      int    `json:"id"`
	Name    string `json:"name"`
	Sprites struct {
		Other struct {
			OfficialArtwork struct {
				FrontDefault string `json:"front_default"`
			} `json:"official-artwork"`
		} `json:"other"`
	} `json:"sprites"`
	Types []struct {
		Slot int `json:"slot"`
		Type struct {
			Name string `json:"name"`
			URL  string `json:"url"`
		} `json:"type"`
	} `json:"types"`
}

func FetchPokemonID(pokemonID string) (*http.Response, error) {
	var url string = "https://pokeapi.co/api/v2/pokemon/" + pokemonID
	res, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func FetchPokemon(res *http.Response) (*Pokemon, error) {
	var pokemon Pokemon
	err := json.NewDecoder(res.Body).Decode(&pokemon)
	if err != nil {
		return nil, err
	}
	return &pokemon, nil
}

func enableCors(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		enableCors(w)

		pokemonID := r.URL.Path[1:]
		res, err := FetchPokemonID(pokemonID)
		if err != nil {
			log.Println(err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		pokemon, err := FetchPokemon(res)
		if err != nil {
			log.Println(err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(pokemon)
	})

	log.Println("Server listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))

}
