package main

import (
	"log"
	"net/http"
	"os"
)
import "github.com/swiper-ui/controller"

func main() {
	var server http.Server
	http.HandleFunc("/users", controller.getUsers)
	port := os.Getenv("PORT")
	if port == "" {
		server.Addr = ":8888"
		log.Println("Listening on :8888")
	} else {
		server.Addr = ":" + port
		log.Println("Listening on :" + port)
	}

	log.Println(server.ListenAndServe())
}
