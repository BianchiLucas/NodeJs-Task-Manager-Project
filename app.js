const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//Middleware:
app.use(express.json());

//Routes:
app.get('/hello', (req, res) => {
    res.send('Task manager app')
});

app.use('/api/v1/tasks', tasks)


//Get all the tasks ('/api/v1/tasks')
//Create new task ('/api/v1/tasks')
//Get a single task ('/api/v1/tasks/:id')
//Patch a single task ('/api/v1/tasks/:id')
//Delete a single task ('/api/v1/tasks/:id')

const port = 3000;
app.listen(port, console.log(`Server listening port ${port}`));