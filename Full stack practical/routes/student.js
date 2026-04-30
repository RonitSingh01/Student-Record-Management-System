const express = require("express");
const router = express.Router();
const student = require("../models/student");

router.get("/", async (req, res) => {
    const students = await student.find();
    res.render("index", { students });
});

router.get("/", async (req,res) =>{
    const students = await student.find();
    res.json(students);
});

router.post("/", async (req,res)=>{
    try{
        const ns = new student(req.body);
        await ns.save();
        res.redirect("/students/view");   
    }catch(err){
        console.log(err.message);
    }
});

router.post("/:id/update", async (req,res) =>{
    try{
        await student.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/students/view");   
        console.log(err.message);
    }catch (err){
        console.log(err.message);
    }
});

router.post("/:id/delete", async (req,res)=>{
    try{
        await student.findByIdAndDelete(req.params.id);
        res.redirect("/students/view");  
    }catch(err){
        console.log(err.message);
    }
});

module.exports = router;