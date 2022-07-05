const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 2000;

const route = require("./routes");

// app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "./public")));

//Validate form data
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Validate data from XMLHttpRequest, fetch, axios, ajax
app.use(express.json());

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));

//Route init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
