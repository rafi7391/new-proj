const express = require("express");
const {createTodo} = require("./types");
const {todo} = require("./db")
const app = express();

app.use(express.json());

app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongoDB

    await todo.create({
        title : createPayload.title,
        description :  createPayload.description,
        completed : false
    })

    res.json({
        msg : "Todo created"
    })
})

app.get("/todos",function(req,res){
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed",function(req,res){
    const updatedPayload = req.body;
    const parsePayload = updatedPayload.safeParse(updatedPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg : "Todo marked as completed"
    })
})

app.listen(3000);