import express from 'express';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
const PORT = 5000;

//middleware
app.use(express.json()); // allows access to req.body

app.use('/api/v1/todos', todoRoutes);
// app.get('/', (req, res) => {
//     res.send('Your app is working');
// });
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
