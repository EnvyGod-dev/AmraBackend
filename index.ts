import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import levelRoutes from './routes/levelRoutes';
import questionRoutes from './routes/questionRoutes';
import answerRoutes from './routes/answerRoutes';

const app = express();
const PORT = 9090;

// Middleware
app.use(cors());
app.use(express.json());

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/team4');
        console.log('Connected to MongoDB successfully.');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}
connectToDatabase();

// Use Routes
app.use('/levels', levelRoutes);
app.use('/questions', questionRoutes);
app.use('/answers', answerRoutes);

app.get('/', (req, res) => {
    res.send('Hello, Node.js Backend with CORS!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});