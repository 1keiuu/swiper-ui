package main

import (
	"log"
	"net/http"
)

func handler(res http.ResponseWriter, req *http.Request) {

}

func main() {
	var server http.Server
	http.HandleFunc("/", handler)
	server.Addr = ":8000"
	log.Println("Listening on 8888")
	log.Println(server.ListenAndServe())
}
