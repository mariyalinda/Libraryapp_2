const express = require("express");
const deleteRouter = express.Router();
const Bookdata = require("./model/Bookdata");
const Authordata = require("./model/Authordata");

function router(nav) {
  deleteRouter.get("/book/:id", function (req, res) {
    const id = req.params.id;
    Bookdata.findOne({ _id: id }).then(function (book) {
      res.render("bookdeleteform", {
        nav,
        title: "Delete",
        book,
      });
    });
  });
  deleteRouter.get("/author/:id", function (req, res) {
    const id = req.params.id;
    Authordata.findOne({ _id: id }).then(function (author) {
      res.render("authordeleteform", {
        nav,
        title: "Delete",
        author,
      });
    });
  });
  deleteRouter.get("/book/:id/confirm", function (req, res) {
    const id = req.params.id;
    Bookdata.deleteOne({ _id: id }).then(function () {
      res.redirect("/books");
    });
  });
  deleteRouter.get("/author/:id/confirm", function (req, res) {
    const id = req.params.id;
    Authordata.deleteOne({ _id: id }).then(function () {
      res.redirect("/authors");
    });
  });
  return deleteRouter;
}

module.exports = router;
