

const { Router } = require("express");
const dbController = require("../controllers/dbController.js");
const dbRouter = Router();


dbRouter.get("/", dbController.getUsernames)

dbRouter.get("/new", dbController.createUsernameGet );

dbRouter.get("/delete", dbController.deleteUsernames);

dbRouter.post("/new", dbController.createUsernamePost);



module.exports = dbRouter;