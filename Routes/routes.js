const express=require("express");
const router=express.Router();

const studenController= require("../Controllers/studentController.js");
const courseController=require("../Controllers/courseController.js");

router.post("/register",studenController.createStudent);
router.post("/course",courseController.createCourse);

module.exports = router;