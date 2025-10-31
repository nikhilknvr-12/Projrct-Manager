import Task from "../models/task.model.js"
import { errorHandler } from "../utils/error.js"

export const createTask = async(req,res,next)=>{
    try{
        const {title,description,priority,dueDate,assignedTo,attachment,todoChecklist}= req.body
        if(!Array.isArray(assignedTo)){
            return next(errorHandler(400, "assined to must be an array of user IDs"))
        }
    const task = await Task.create({
        title,description,priority,dueDate,assignedTo,attachment,todoChecklist,createdBy: req.user.id,
    })
    res.status(200).json({message: "Task created succesfully" , task })
    }catch (error){
        next(error)
    }
      
}