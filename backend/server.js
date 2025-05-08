const app = require('./app')

const dotenv = require('dotenv');
dotenv.config()
const databaseConnection = require('./config/databaseConnection')

databaseConnection();

const PORT = process?.env?.PORT ?? 8080;
const server = app.listen(PORT,() =>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})

