const courseModel=require("../Models/courseModel.js");

let createCourse= async(req,res)=>{
    try {
        let data = req.body
        let registerCourse = await courseModel.create(data)
        return res.status(201).send({status:true, 
                                  msg:"Course data registered succesfully",
                                  data:registerCourse});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};

module.exports = {createCourse};