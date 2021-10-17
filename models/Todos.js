import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [20, 'length cannot exceed 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model('Task', TodoSchema);
