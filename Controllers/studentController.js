const studentModel=require("../Models/studentModel.js");

let createStudent= async(req,res)=>{
    try {
        let data = req.body
        let registerStudent = await studentModel.create(data)
        return res.status(201).send({status:true, 
                                  msg:"Student data registered succesfully",
                                  data:registerStudent});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};

module.exports = {createStudent};