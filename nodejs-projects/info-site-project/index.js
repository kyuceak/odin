
const fs = require('fs');
const http = require('http');



// REST API build with htyp module
/*
const server = http.createServer((req,res) => {

    path = "./views/";
    console.log(req.url);
    switch(req.url){
        case "/":
            path += "index.html";
            break;
        case "/about":
            path += "about.html";
            break;
        case "/contact-me":
            path += "contact-me.html";
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;

    }



    fs.readFile(path, (err,data) => {
        if(err)
        {
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
});


server.listen(3000, "localhost", () => {
    console.log(`listening your requests at http://localhost:3000`)
})
    */


// REST API built with express

const express = require("express");
const app = express();


app.get("/", (req,res) => {

    res.sendFile('./views/index.html', { root: __dirname })

});

app.get("/about", (req,res) => {

    res.sendFile('./views/about.html', { root: __dirname })

});

app.get("/contact-me", (req,res) => {

    res.sendFile('./views/contact-me.html', { root: __dirname })

});

app.use((req,res) => {
    res.sendFile('./views/404.html', { root: __dirname })
})



app.listen(3000, () => {
    console.log("your web server is listening at http://localhost:3000/")
})