const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 5000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "./public")))
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));

app.get("/", (reqq, res) => {
  res.render("home");
});

app.get("/news", (reqq, res) => {
  res.render("news");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
