const Task = require('../models/task')
const asyncWrapper = require(`../middlewares/async`)
const {createCustomError} = require(`../errors/custom-error`)
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ success:true,data:tasks })
})
const createNewTask = asyncWrapper (async (req, res) => { 
    const task = await Task.create(req.body)
    res.status(201).json({ success:true,data:task })
})
const getTask = asyncWrapper (async (req, res) => {
    const { id:taskID } = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        // return res.status(404).json({success:false,msg:`couldnt find task with id ${taskID}`})
        return next(createCustomError(`couldnt find task with id ${taskID}`,404))
    }
    res.status(201).json({success:true,data:task})
})
const updateTask =asyncWrapper  (async (req, res) => {
        const {id:TaskID} = req.params
        const task = await Task.findOneAndUpdate({_id:TaskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            // return res.status(404).json({success:false,msg:`task with id ${TaskID} not found`})
            return next(createCustomError(`couldnt find task with id ${taskID}`,404))
        }
        res.status(200).json({success:true,data:task})
})
const deleteTask = asyncWrapper (async (req, res) => {
        const {id:TaskID} = req.params
        const task = await Task.findOneAndDelete({_id:TaskID})
        if(!task){
            // return res.status(404).json({success:false,msg:`task with id ${TaskID} not found`})
            return next(createCustomError(`couldnt find task with id ${taskID}`,404))
        }
        res.status(200).json({success:true,data:task})
})
module.exports = {
    getAllTasks,
    createNewTask,
    getTask,
    updateTask,
    deleteTask
}