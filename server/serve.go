package main

import "net/http"

func main() {
	http.ListenAndServe("0.0.0.0:8000", http.FileServer(http.Dir("../frontend")))
}