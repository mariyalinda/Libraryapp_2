const express = require("express");
const app = new express();
const port = process.env.PORT || 5000;
var nav = [
  { link: "/books", name: "Books" },
  { link: "/authors", name: "Authors" },
  { link: "/", name: "Logout" },
  { link: "/addbook", name: "Add a book" },
];
const homeRouter = require("./src/routes/homeRouter")(nav);
const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorRouter = require("./src/routes/authorRoutes")(nav);
const loginRouter = require("./src/routes/loginroute")(nav);
const signupRouter = require("./src/routes/signuproute")(nav);
const addRouter = require("./src/routes/addroute")(nav);
const updateRouter = require("./src/routes/updateroute")(nav);
const deleteRouter = require("./src/routes/deleteroute")(nav);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/", homeRouter);
app.use("/books", booksRouter);
app.use("/authors", authorRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/addbook", addRouter);
app.use("/update", updateRouter);
app.use("/delete", deleteRouter);

app.listen(port, () => {
  console.log("Server ready at " + port);
});
