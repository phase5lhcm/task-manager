import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
});

export default mongoose.model('Tasks', TodoSchema);
