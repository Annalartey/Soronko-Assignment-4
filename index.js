const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 5000

app.use(bodyParser());

app.get("/", (request, response) => {
    console.log('this is the request body', request.body)
    response.send("This is the main mest backend");
})

app. get('/books', (request, response) => {
    console.log(request);
    const testData = require("./books.json");
    response.json(testData)
});

app.post("/books", (request, response) => {
    const requestBody = request.body
    console.log(requestBody)
    response.send({action: "login", message: "successful", body: requestBody})
})

app.delete('/books', (request, response) =>{
    const books = require ('./books.json');
    const deleteBooks = books.pop()
    response.send(deleteBooks)
})

app.listen(port, () =>{
    console.log("My app is running on this server")
})