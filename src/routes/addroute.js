const express = require("express");
const addRouter = express.Router();
const Bookdata = require("./model/Bookdata");
const Authordata = require("./model/Authordata");

function router(nav) {
  addRouter.get("/", function (req, res) {
    res.render("addbook", { nav, title: "Add" });
  });
  addRouter.post("/add", function (req, res) {
    var bookitem = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      image: req.body.image,
      about: req.body.bookabout,
    };
    var authoritem = {
      name: req.body.author,
      genre: req.body.genre,
      place: req.body.place,
      image: req.body.authorimage,
      about: req.body.authorabout,
    };
    var book = Bookdata(bookitem);
    book.save();
    var author = Authordata(authoritem);
    author.save();
    res.redirect("/books");
  });

  return addRouter;
}

module.exports = router;
