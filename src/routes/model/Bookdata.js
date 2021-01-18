//accessing mongoose package
const mongoose = require("mongoose");
//database connection
mongoose.connect(
  "mongodb+srv://userone:userone@fsdfiles.ljhxf.mongodb.net/Libraryapp?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//schema definition
const Schema = mongoose.Schema;
//constructor
const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  image: String, //filename
  about: String,
});
//model creation
var Bookdata = mongoose.model("bookdata", bookSchema);
//exporting the model
module.exports = Bookdata;
