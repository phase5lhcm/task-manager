import express from 'express';
import {
    getAllItems,
    createTask,
    getSingleTask,
    // updateTodo,
    // deleteTodo,
} from '../controllers/TodoControllers.js';
const router = express.Router();

router.route('/').get(getAllItems).post(createTask);
router
    .route('/:id')
    .get(getSingleTask); /*.patch(updateTodo).delete(deleteTodo);*/

export default router;
