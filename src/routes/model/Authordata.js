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
const authorSchema = new Schema({
  name: String,
  place: String,
  genre: String,
  image: String, //filename
  about: String,
});
//model creation
var Authordata = mongoose.model("authordata", authorSchema);
//exporting the model
module.exports = Authordata;
