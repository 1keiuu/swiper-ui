package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type User struct {
	Id     int    `json:"id"`
	Name   string `json:"name"`
	ImgURL string `json:"imageURL"`
	Age    int    `json:"age"`
}

func handler(res http.ResponseWriter, req *http.Request) {
	users := []struct {
		Id     int    `json:"id"`
		Name   string `json:"name"`
		ImgURL string `json:"imageURL"`
		Age    int    `json:"age"`
	}{
		{Id: 1, Name: "test1", ImgURL: "https://placekitten.com/g/200/300", Age: 20},
		{Id: 2, Name: "test2", ImgURL: "https://placekitten.com/g/200/300", Age: 22},
		{Id: 3, Name: "test3", ImgURL: "https://placekitten.com/g/200/300", Age: 27},
		{Id: 4, Name: "test4", ImgURL: "https://placekitten.com/g/200/300", Age: 35},
	}
	res.Header().Set("Access-Control-Allow-Headers", "*")
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	output, _ := json.MarshalIndent(&users, "", "\t\t")
	res.Write(output)
}

func main() {
	var server http.Server
	http.HandleFunc("/", handler)
	server.Addr = ":8888"
	log.Println("Listening on 8888")
	log.Println(server.ListenAndServe())
}
