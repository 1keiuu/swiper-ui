package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"
	"time"
)

type User struct {
	Id      int    `json:"id"`
	Name    string `json:"name"`
	ImgURL  string `json:"imgURL"`
	Age     int    `json:"age"`
	Profile string `json:"profile"`
}

func GetUsers(res http.ResponseWriter, req *http.Request) {
	users := []User{}
	raw, err := ioutil.ReadFile("./fixtures/users.json")

	if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}
	json.Unmarshal(raw, &users)

	paramsIndex := req.URL.Query().Get("index")
	paramsPer := req.URL.Query().Get("per")
	index, err := strconv.Atoi(paramsIndex)
	per, err := strconv.Atoi(paramsPer)
	// NOTE: レスポンスで返すuserの範囲
	start := index * per
	end := (index+1)*per - 1
	// NOTE: 最初のindexがuserの総数を越えた場合はnilを返す
	if start >= len(users) {
		users = nil
	} else {
		// NOTE: 指定された範囲の末尾がuserの総数が越えた場合、endをuserの総数にする
		if end >= len(users) {
			end = len(users)
		}
		users = users[start:end]
	}
	res.Header().Set("Access-Control-Allow-Headers", "*")
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	output, _ := json.MarshalIndent(&users, "", "\t\t")
	time.Sleep(time.Second * 2)
	res.Write(output)
}
