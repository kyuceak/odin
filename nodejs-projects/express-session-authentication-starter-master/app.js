const express = require('express');

const session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');
var routes = require('./routes');

const { table } = require('console');

// Package documentation - https://www.npmjs.com/package/connect-mongo
const pgSession = require('connect-pg-simple')(session);

// Need to require the entire Passport config module so app.js knows about it
require('./config/passport');




/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Create the Express application
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const pgPool = require("./config/database");

/**
 * -------------- SESSION SETUP ----------------
 */

// TODO
console.log(process.env.DB_STRING);
app.use(session({
    store: new pgSession({
        pool: pgPool,
        tableName: "session",
        createTableIfMissing: true, // This te
    }),
    secret: "some secret",
    resave: "false",
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

app.use(passport.initialize()); // initialize passport middleware
app.use(passport.session());


/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(routes);


/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:3000
app.listen(3000);