const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/create", courseController.store);
router.get("/:slug", courseController.show);

module.exports = router;
