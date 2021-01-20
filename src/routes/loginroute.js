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

    Userdata.findOne(
      {
        $and: [{ username: username }, { password: password }],
      },
      function (err, user) {
        if (user) {
          res.redirect("/home");
        } else {
          res.send("User does not exist");
        }
      }
    );
  });
  return loginRouter;
}

module.exports = router;
