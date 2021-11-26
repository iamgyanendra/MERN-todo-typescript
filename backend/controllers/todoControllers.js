const Todo = require("../models/todo");
const ApiFeatures = require("../utils/apifeatures");


//Create todo
exports.addTodos = async(req, res)=>{

    try {
        const todo = await Todo.create(req.body);
        res.status(200).json({
            success:true,
            todo
        });
        
    } catch (error) {
        console.log(error)
    }

    
}

//Read todo
exports.getTodos = async(req, res)=>{
    try{
        const apiFeature = new ApiFeatures(Todo.find(), req.query).search()
        
        const todo = await apiFeature.query;
        res.status(200).json({
            success:true,
            todo
        })
    }catch(error){
        console.log(error);
    }
}

//Update todo

exports.updateTodos = async(req, res)=>{
    try {

        let todo = await Todo.findById(req.params.id);

        if(!todo){
            return res.status(500).json({
                success:false,
                message:"not found"
            })
        }
        todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true,
            useFindAndModify:false
        })

        res.status(200).json({
            success:true,
            todo
        })

    } catch (error) {
        console.log(error)
    }
}

//Delete todo

exports.deleteTodos = async(req, res)=>{
    try {
        let todo = await Todo.findById(req.params.id);

        if(!todo){
            return res.status(500).json({
                success:false,
                message:"not found"
            })
        }
        await todo.remove();

        res.status(200).json({
            success:true,
            message:"todo list deleted"
        })
        
    } catch (error) {
        console.log(error)
    }
}
