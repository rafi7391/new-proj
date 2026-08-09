const express = require("express");
const {createTodo} = require("./types");
const app = express();

app.use(express.json());

app.post("/todo",function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongoDB
})

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
    const updatedPayload = req.body;
    const parsePayload = updatedPayload.safeParse(updatedPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
    }
})