const express = require("express");
const app = express(); // thats our server



app.get("/",(req,res) => res.send("Hello World!"));

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`my probably third express app - listening on port: ${PORT} `)
})