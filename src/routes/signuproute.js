const express = require("express");
const signupRouter = express.Router();
const Userdata = require("./model/Userdata");

function router(nav) {
  var nav = [
    { link: "/login", name: "Login" },
    { link: "/signup", name: "Sign-up" },
  ];
  signupRouter.get("/", function (req, res) {
    res.render("signup", { nav, title: "Signup" });
  });
  signupRouter.post("/confirm", function (req, res, next) {
    try {
      var newuser = {
        email: req.body.email,
        mobile: req.body.mobile,
        username: req.body.username,
        password: req.body.password,
      };
      var user = Userdata(newuser);
      user.save();
      res.redirect("/home");
    } catch (err) {
      next(err);
    }
    //use schema.create to insert data into the db
    // Userdata.create(newuser, function (next, user) {
    //   if (err) {
    //     return next(err);
    //   } else {
    //     return res.redirect("/home");
    //   }
    // });
  });
  return signupRouter;
}

module.exports = router;
