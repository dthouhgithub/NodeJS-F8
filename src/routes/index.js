const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);
}

module.exports = route;
