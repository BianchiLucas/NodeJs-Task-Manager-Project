const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/conection');
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//Middleware:
app.use(express.json());
app.use(express.static('./public'));

//Routes:
app.use('/api/v1/tasks', tasks)

app.use(notFound);
app.use(errorHandlerMiddleware);

//Get all the tasks ('/api/v1/tasks')
//Create new task ('/api/v1/tasks')
//Get a single task ('/api/v1/tasks/:id')
//Patch a single task ('/api/v1/tasks/:id')
//Delete a single task ('/api/v1/tasks/:id')

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening port ${port}`));

    } catch (error) {
        console.log(error);
    }
};

start()
