import express from 'express';
import {
    getAllItems,
    createTodo,
    getSingleTodo,
    updateTodo,
    deleteTodo,
} from '../controllers/TodoControllers.js';
const router = express.Router();

router.route('/').get(getAllItems).post(createTodo);
router.route('/:id').get(getSingleTodo).patch(updateTodo).delete(deleteTodo);

export default router;
