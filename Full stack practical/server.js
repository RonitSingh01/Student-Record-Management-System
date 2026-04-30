const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(methodOverride("_method"));
app.use("/api/students", userRoutes);
mongoose.connect("mongodb://localhost:27017/test")
.then(()=> console.log("Mongo Connected"))
.catch(err => console.log(err));
const PORT = 3000;
app.listen(PORT ,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});