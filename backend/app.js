const express = require('express');
const app = express();
app.use(express.json())
const error = require('./middleware/error')
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true,
    }));




const jobRoutes = require('./routes/jobRoutes')
app.use('/api/v1' , jobRoutes);

app.use(error);

module.exports = app;