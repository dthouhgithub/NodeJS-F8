const Course = require("../models/Course.js");
const { multipleMongooseToObject } = require("./../../util/mongoose");

class SiteController {
  //[GET] /
  index(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((error) => next(error));
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
