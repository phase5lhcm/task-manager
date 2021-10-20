import express from 'express';
import todoRoutes from './routes/todoRoutes.js';
import connectDb from './db/connectDb.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5000;

//middleware
app.use(express.json()); // allows access to req.body

// routes
app.use('/api/v1/todos', todoRoutes);

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        // spin up server only if connection is successful
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
