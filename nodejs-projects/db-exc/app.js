require("dotenv").config(); // add .env configurations
const express = require("express");
const app = express();
const dbRouter = require("./routes/dbRouter");




app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));


app.use("/", dbRouter);


const PORT = 3000;

app.listen(PORT,() => {
    console.log("your app is running at http://localhost:3000/")
})