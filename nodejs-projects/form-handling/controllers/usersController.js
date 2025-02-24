

const { all } = require("../routes/usersRouter");
const usersStorage = require("../storages/usersStorage");


exports.usersListGet = (req, res) => {
    res.render("index", {
        title: "User list",
        users: usersStorage.getUsers(),
    });
};

exports.usersCreateGet = (req, res) => {
    res.render("createUser", {
        title: "Create user",
    });
};


const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const formatErr = "must be formatted properly.";
const rangeErr = "must be a number between 18 and 120";


const validateUser = [
    body("firstName").trim()
      .isAlpha().withMessage(`First name ${alphaErr}`)
      .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
    body("lastName").trim()
      .isAlpha().withMessage(`Last name ${alphaErr}`)
      .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
    body("email").trim().isEmail().withMessage(`Email ${formatErr}`),
    body("age").optional({ values: "falsy"}).trim().isInt({ min:18, max:120}).withMessage(`Age ${rangeErr}`),
    body("bio").optional({ values: "falsy"}).trim().isLength({max:200})
  ];



exports.usersCreatePost = [
    validateUser,
    (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).render("createUser",{
                title: "Create user",
                errors: errors.array(),
            });
        }
        const { firstName, lastName, email, age, bio } = req.body;
        usersStorage.addUser({firstName, lastName, email, age, bio});
        res.redirect("/");
    }
];


exports.usersUpdateGet = (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    res.render("updateUser", {
      title: "Update user",
      user: user,
    });
  };
  
  exports.usersUpdatePost = [
    validateUser,
    (req, res) => {
      const user = usersStorage.getUser(req.params.id);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("updateUser", {
          title: "Update user",
          user: user,
          errors: errors.array(),
        });
      }
      const { firstName, lastName } = req.body;
      usersStorage.updateUser(req.params.id, { firstName, lastName });
      res.redirect("/");
    }
  ];
  
  // Tell the server to delete a matching user, if any. Otherwise, respond with an error.
exports.usersDeletePost = (req, res) => {
    usersStorage.deleteUser(req.params.id);
    res.redirect("/");
  };
  

exports.usersSearchGet = (req, res) => {
    console.log(req.query);
    if(req.query &&Object.keys(req.query).length)
    {
      
        const all_users = usersStorage.getUsers();

        const { name, email } = req.query;
    
        filtered_users = all_users.filter((user) => {

            let isMatch = false;

            if(user.firstName && name){
                
                isMatch = user.firstName.toLowerCase().includes(name.toLowerCase());
                console.log("first isMatch: ", isMatch);
            }


            if(user.email && email){
                isMatch = user.email.toLowerCase().includes(email.toLowerCase());
                console.log("second isMatch: ", isMatch);
            }
          
            return isMatch;
        })

        console.log(filtered_users);
    
        res.render("searchUser", { filtered_users })
    }else{
        res.end()
    }
    
};


// exports.usersCreatePost = (req, res) => {
//     const { firstName, lastName} = req.body;

//     usersStorage.addUser({firstName, lastName});
//     res.redirect("/")
// };