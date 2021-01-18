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
    // var details = {
    //   username: req.body.username,
    //   password: req.body.password,
    // };

    username: req.body.username;
    password: req.body.password;
    Userdata.authenticate(username, password, function (error, user) {
      if (error) {
        var err = new Error("Wrong email or password.");
        err.status = 401;
        return next(err);
      } else {
        return res.redirect("/home");
      }
    });
    // Userdata.findOne(details).then(res.redirect("/home")); //notworking;any value is getting in
    //do backend validation
  });

  return loginRouter;
}

module.exports = router;
