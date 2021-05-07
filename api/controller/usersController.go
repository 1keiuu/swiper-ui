package controller

import (
	"encoding/json"
	"net/http"
	"time"
)

type User struct {
	Id      int    `json:"id"`
	Name    string `json:"name"`
	ImgURL  string `json:"imageURL"`
	Age     int    `json:"age"`
	Profile string `json:"profile"`
}

func GetUsers(res http.ResponseWriter, req *http.Request) {
	users := []User{
		{Id: 1, Name: "test1", ImgURL: "https://placekitten.com/g/200/300", Age: 20, Profile: "test1's profile."},
		{Id: 2, Name: "test2", ImgURL: "https://placekitten.com/g/300/400", Age: 22, Profile: "test2's profile."},
		{Id: 3, Name: "test3", ImgURL: "https://placekitten.com/g/400/300", Age: 27, Profile: "test3's profile."},
		{Id: 4, Name: "test4", ImgURL: "https://placekitten.com/g/150/150", Age: 35, Profile: "test4's profile."},
	}
	res.Header().Set("Access-Control-Allow-Headers", "*")
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	output, _ := json.MarshalIndent(&users, "", "\t\t")
	time.Sleep(time.Second * 2)
	res.Write(output)
}
