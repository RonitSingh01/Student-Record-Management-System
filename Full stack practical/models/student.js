const mongoose = require("mongoose");


const schema = mongoose.schema({
    name : {type: String, required : true},
    rollNumber: {type: Number, required : true},
    branch : {type: String},
    marks : {type: Number},
},{timeStamp: true});

module.exports = mongoose.model("student",schema);