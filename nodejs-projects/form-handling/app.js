


const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");


app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("your app is listening at http://localhost:3000/")
})
