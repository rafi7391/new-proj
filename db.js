const mongoose = require("mongoose")
//mongodb+srv://rafi37230_db_user:<db_password>@cluster0.5pgknj8.mongodb.net/?appName=Cluster0

mongoose.connect("mongodb+srv://rafi37230_db_user:kvR7x3dAy8nb162A@cluster0.5pgknj8.mongodb.net/?appName=Cluster0")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports ={
    todo
}