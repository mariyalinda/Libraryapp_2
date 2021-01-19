const express = require("express");
const loginRouter = express.Router();
const Userdata = require("./model/Userdata");

function router(nav) {
  var nav = [
    { link: "/login", name: "Login" },
    { link: "/signup", name: "Sign-up" },
  ];
  loginRouter.get("/", function (req, res) {
    res.render("login", { nav, title: "Login" });
  });
  loginRouter.post("/confirm", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    Userdata.findOne({ username: username, password: password })
      .then(function () {
        res.redirect("/home");
      })
      .catch(function (error) {
        res.send("User does not exist. Error is" + error);
      });
  });
  return loginRouter;
}

module.exports = router;
