const express = require("express");
const homeRouter = express.Router();

function router(nav) {
  homeRouter.get("/", function (req, res) {
    var nav = [
      { link: "/login", name: "Login" },
      { link: "/signup", name: "Sign-up" },
    ];
    res.render("welcome", {
      nav,
      title: "Library",
    });
  });
  homeRouter.get("/home", function (req, res) {
    res.render("index", {
      nav,
      title: "Library",
    });
  });
  homeRouter.post("/home", (req, res) => {
    //signup and login
    var nav = [
      { link: "/books", name: "Books" },
      { link: "/authors", name: "Authors" },
      { link: "/login", name: "Logout" },
      { link: "/addbook", name: "Add a book" },
    ];
    res.render("index", { nav, title: "Library" });
    res.end();
  });

  return homeRouter;
}

module.exports = router;
