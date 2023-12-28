const getAllTasks = (req, res) => {
    res.send('All items in the database')
}
const createNewTask = (req, res) => {
    res.send('Create new item')
}
const getTask = (req, res) => {
    res.send(`here's item ${req.params.id}`)
}
const updateTask = (req, res) => {
    res.send(`updated item ${req.params.id}`)
}
const deleteTask = (req, res) => {
    res.send(`Delete item ${req.params.id}`)
}
module.exports = {
    getAllTasks,
    createNewTask,
    getTask,
    updateTask,
    deleteTask
}