const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  // GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //GET /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //POST /courses/create
  store(req, res, next) {
    const course = req.body;
    Course.insertMany([
      {
        name: course.name,
        description: course.description,
        slug: course.slug,
        image: course.image,
        videoId: course.videoId,
      },
    ])
      .then((course) => {
        res.redirect("/");
      })
      .catch(next);
  }
}

module.exports = new CourseController();
