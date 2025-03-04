const db = require("../db/queries");

async function getUsernames(req, res){
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);

    // if(req.query)
  


    if(Object.keys(req.query).length > 0)
    {
        const filterResult = await db.getSearchResult(req.query.search);
        res.send("Your search results: " + filterResult.map(user => user.username).join(", "));
        return;
    }

    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
};

async function createUsernameGet(req,res){
    res.render("new");
}


async function createUsernamePost(req, res){
    const { username } = req.body;

    await db.insertUsername(username);
    res.redirect("/");
}

async function deleteUsernames(req, res){
    await db.deleteUsernames();
    res.redirect("/");
}



module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteUsernames
};