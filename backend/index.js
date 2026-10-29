require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const testRoutes = require('./routes/testRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/tests', testRoutes);

app.get('/', (req, res) => {
    res.send('online assesment portal API is running');
});

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `Hello ${name}, your email is ${email}` });
});

//integrate MongoDB connection with server startup

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();