const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./database");
const validPassword  = require("../lib/passwordUtils").validPassword;

const customFields = {
  usernameField: "uname",
  passwordField: "pw",
};

const verifyCallback = async (username, password, done) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (result.rows.length === 0) {
      return done(null, false, { message: "Incorrect username." });
    }

    const user = result.rows[0];

    const isValid = validPassword(password, user.hash, user.salt);

    if (isValid) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    console.log(err);
    done(err);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);


passport.serializeUser((user,done) => {
    done(null, user.id);
});


passport.deserializeUser( async (userId, done) => {
    

    try{
        const result = await db.query("SELECT * FROM users WHERE users.id = $1", [
            userId,
          ]);

          if(result.rows[0].length === 0)
          {
            return done(null,false, { message: "username with this id couldnt be found."})
          }

          const user = result.rows[0];

          return done(null,user);
    }catch(err)
    {
        done(err);
    }
})