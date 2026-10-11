const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Import routes
const testRoutes = require('./routes/testRoutes');

app.use('/api/tests', testRoutes);

app.get('/', (req, res) => {
    res.send('online assesment portal API is running');
});

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `Hello ${name}, your email is ${email}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});