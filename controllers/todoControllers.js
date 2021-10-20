import Task from '../models/Todos.js';
// GET list of all items/todos
const getAllItems = async (req, res) => {
    try {
        // empty error returns all objects
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({
            msg: 'Error returning tasks, try again',
            error: error,
        });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: 'Error creating task', error: error });
    }
};

const getSingleTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: %{taskId}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: 'Error finding task', error: error });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body);
        if (!task) {
            return res.status(400).json({
                msg: `Task ${task} does it exist. It may have already been deleted`,
                error: error,
            });
        }
        res.status(200).json({
            id: taskID,
            data: req.body,
            // new: true,
            // runValidators: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: '' });
    }
};

const deleteSingleTodo = async (req, res) => {
    try {
        const { id: deleteTaskID } = req.params;
        const deleteTask = await Task.findOneAndDelete({ _id: deleteTaskID });
        if (!deleteTask) {
            return res.status(400).json({
                msg: `Task ${deleteTask} does it exist. It may have already been deleted`,
                error: error,
            });
        }
        res.status(200).json({
            msg: `Task ${deleteTaskID} has been deleted`,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error finding task`,
            deleteError: error,
        });
    }
};

export { createTask, getAllItems, getSingleTask, deleteSingleTodo, updateTodo };
