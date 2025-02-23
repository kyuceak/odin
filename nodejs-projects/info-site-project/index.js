
const fs = require('fs');
const http = require('http');



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