package main

import (
	"log"
	"net/http"
	"os"
)
import controller "swiper-ui/api/controller"

func main() {
	var server http.Server
	http.HandleFunc("/users", controller.GetUsers)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8888"
	}
	server.Addr = ":" + port
	log.Println("Listening on :" + port)

	log.Println(server.ListenAndServe())
}
