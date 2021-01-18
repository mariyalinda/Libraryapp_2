const express = require("express");
const updateRouter = express.Router();
const Bookdata = require("./model/Bookdata");
const Authordata = require("./model/Authordata");

function router(nav) {
  updateRouter.get("/book/:id", function (req, res) {
    const id = req.params.id;
    Bookdata.findOne({ _id: id }).then(function (book) {
      res.render("bookupdateform", {
        nav,
        title: "Update",
        book,
      });
    });
  });
  updateRouter.get("/author/:id", function (req, res) {
    const id = req.params.id;
    Authordata.findOne({ _id: id }).then(function (author) {
      res.render("authorupdateform", {
        nav,
        title: "Update",
        author,
      });
    });
  });
  updateRouter.post("/book/:id/updated", function (req, res) {
    const id = req.params.id;
    var newbook = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      image: req.body.image,
      about: req.body.about,
    };
    Bookdata.updateOne({ _id: id }, { $set: newbook }, function () {
      res.redirect("/books");
    });
  });
  updateRouter.post("/author/:id/updated", function (req, res) {
    const id = req.params.id;
    var newauthor = {
      name: req.body.name,
      place: req.body.place,
      genre: req.body.genre,
      image: req.body.authorimage,
      about: req.body.authorabout,
    };
    Authordata.updateOne({ _id: id }, { $set: newauthor }, function () {
      res.redirect("/authors");
    });
  });
  return updateRouter;
}

module.exports = router;
