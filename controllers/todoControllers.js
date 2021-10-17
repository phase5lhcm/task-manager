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

// export function updateTodo(req, res) {
//     res.send('Edit task');
// }
// export function deleteTodo(req, res) {
//     res.send('Delete task');
// }

export { createTask, getAllItems, getSingleTask };
