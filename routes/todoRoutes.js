import express from 'express';
import {
    getAllItems,
    createTask,
    getSingleTask,
    // updateTodo,
    deleteSingleTodo,
} from '../controllers/TodoControllers.js';
const router = express.Router();

router.route('/').get(getAllItems).post(createTask);
router
    .route('/:id')
    .get(getSingleTask) /*.patch(updateTodo)*/
    .delete(deleteSingleTodo);

export default router;
