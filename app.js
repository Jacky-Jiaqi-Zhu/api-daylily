const express = require('express');
const bodyParser = require('body-parser');
const task = require('./routes/task.route'); // Imports routes for the tasks

// load .env
require('dotenv').config()

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');

let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/tasks', task);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});