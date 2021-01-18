//accessing mongoose package
const mongoose = require("mongoose");
//database connection
mongoose.connect(
  "mongodb+srv://userone:userone@fsdfiles.ljhxf.mongodb.net/Libraryapp?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
//schema definition
const Schema = mongoose.Schema;
//constructor
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    //sync validation
    validate: {
      validator: function (v) {
        //return true to pass the validation
        //return false to fail the validation
        return /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
      },
      //message to return if validation fails
      message: (props) => `${props.value} is not a valid email format!`,
    },
  },
  mobile: {
    type: Number,
    minlength: [10, "Minimum length is 10 digits"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username required"],
    trim: true,
  },
  // username: String,
  password: {
    type: String,
    required: [true, "Password required"],
    validate: {
      validator: function (v) {
        //return true to pass the validation
        //return false to fail the validation
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      },
      //message to return if validation fails
      message: (props) => `${props.value} is not a strong password!`,
    },
  },
});
//model creation
var Userdata = mongoose.model("userdata", userSchema);
//exporting the model
module.exports = Userdata;
