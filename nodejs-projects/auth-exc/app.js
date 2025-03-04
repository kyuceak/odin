/////// app.js

const path = require("node:path");
const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcryptjs");

const pool = new Pool({
  host: "localhost",
  user: "kutay_yuceak",
  database: "auth_exc",
  password: "1232",
  port: "5432"
});

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));



// app.use((req, res, next) => {
//     res.locals.currentUser = req.user;
//     next();
//   });
//   If you insert this code somewhere between 
//   where you instantiate the passport middleware and before you render your views, 
//   you will have access to the currentUser variable in all of your views,
//   and you won’t have to manually pass it into all of the controllers in which you need it.


app.get("/sign-up", (req,res) => {
    res.render("sign-up-form");
    
});


app.post("/sign-up", async (req, res, next) => {
    try {
     const hashedPassword = await bcrypt.hash(req.body.password, 10);
     await pool.query("insert into users (username, password) values ($1, $2)", [req.body.username, hashedPassword]);
     res.redirect("/");
    } catch (error) {
       console.error(error);
       next(error);
      }
   });
   




/* As you can see, all we have to do is call passport.authenticate(). 
This middleware performs numerous functions behind the scenes. 
Among other things, it looks at the request body for parameters named username and password then runs the LocalStrategy function 
that we defined earlier to see if the username and password are in the database.  */
app.post(
    "/log-in",
    passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
    })
  );
// It then creates a session cookie that gets stored in the user’s browser and used in all future requests to see whether or not that user is logged in.



app.get("/log-out", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
   

app.get("/", (req, res) => res.render("index", { user: req.user }));



passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        const user = rows[0];
  
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }

        const match = await bcrypt.compare(password, user.password);


        if (!match) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      } catch(err) {
        return done(err);
      }
    })
  );


  /* When a session is created, passport.serializeUser will receive the user object found from a successful login and store its id property in the session data. 
  Upon some other request, if it finds a matching session for that request, passport.deserializeUser will retrieve the id we stored in the session data. 
  We then use that id to query our database for the specified user, then done(null, user) attaches that user object to req.user. 
  Now in the rest of the request, we have access to that user object via req.user. */
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
      const user = rows[0];
  
      done(null, user);
    } catch(err) {
      done(err);
    }
  });
  
  

app.listen(3000, () => console.log("app listening on port 3000!"));
