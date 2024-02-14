// app.js
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });


// Use routers
app.use('/auth', authRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
