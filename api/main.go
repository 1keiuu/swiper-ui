package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Data struct {
	Name   string
	imgURL string
	age    int
}

func handler(res http.ResponseWriter, req *http.Request) {
	data := Data{Name: "", imgURL: "https://placekitten.com/g/200/300", age: 20}
	res.Header().Set("Access-Control-Allow-Headers", "*")
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	output, _ := json.MarshalIndent(&data, "", "\t\t")
	res.Write(output)
}

func main() {
	var server http.Server
	http.HandleFunc("/", handler)
	server.Addr = ":8888"
	log.Println("Listening on 8888")
	log.Println(server.ListenAndServe())
}
