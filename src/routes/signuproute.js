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
    var newuser = {
      email: req.body.email,
      mobile: req.body.mobile,
      username: req.body.username,
      password: req.body.password,
    };
    var user = Userdata(newuser);
    user
      .save()
      .then(function () {
        res.redirect("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return signupRouter;
}

module.exports = router;
