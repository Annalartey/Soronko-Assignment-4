const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 5000
const authorsRouter= require("./controllers/authors");
const booksRouter = require("./controllers/books");
const adminRouter = require ("./controllers/admin")
const { response } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/admin",adminRouter);



app.get("/", (request, response) => {
    console.log('this is the request body', request.body)
    response.send("This is the main mest backend");
})

// app. get('/books', (request, response) => {
//     console.log(request);
//     response.json(testData)
// });

// app.post("/books", (request, response) => {
//     const requestBody = request.body
//     console.log(requestBody)
//     response.send({action: "login", message: "successful", body: requestBody})
// })

// app.delete('/books', (request, response) =>{
//     const books = require ('./books.json');
//     const deleteBooks = books.pop()
//     response.send(deleteBooks)
// })

app.listen(port, () =>{
    console.log("My app is running on this server", port)
})