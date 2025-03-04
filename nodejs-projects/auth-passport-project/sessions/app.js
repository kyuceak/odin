


const express = require("express");
const session = require("express-session");
const pg = require("pg");



const pgPool = new pg.Pool({
    host: "localhost",
    user: "kutay_yuceak",
    database: "auth_passport",
    password: "1232",
    port: "5432"
});


const app = express();


/* when we send a http request to below "/" endpoint, our middleware
is going to create session, and then it gonna take that session id and set equal to
our cookie as key value pair. */
app.use(session({
    store: new (require("connect-pg-simple")(session))({
        // Insert connect-pg-simple options here
        pool : pgPool,
        tableName: "session"
    }), // store: (what persistent memory storage are we going to use?) for me its postgresql
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 *24}

}));

app.get("/", (req, res, next) => {
    console.log(req.session); // we can reach session like this

    // thats how you reach session and add objects, modify it.
    if(req.session.viewCount) {
        req.session.viewCount++;
    }else {
        req.session.viewCount = 1;
    }
    res.send("<h1>Hello world </h1>");
});


app.listen(3000, () => console.log("successful at http://localhost:3000/"))