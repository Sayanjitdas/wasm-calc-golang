package main

import (
	"net/http"
	"strings"
)

func main() {
	fs := http.FileServer(http.Dir("../frontend"))
	http.ListenAndServe("0.0.0.0:8000", http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
		if strings.HasSuffix(req.URL.Path, ".wasm") {
			resp.Header().Set("Content-type", "application/wasm")
		}
		fs.ServeHTTP(resp, req)
	}))
}
