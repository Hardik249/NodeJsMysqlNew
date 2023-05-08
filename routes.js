console.log('routes');
const express = require('express');
const app = express();

const { body, validationResult } = require('express-validator');
const bodyparser = require('body-parser');
const cors = require('cors')

const api = require('./modules/routes');


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/testapi', (req, res) => {
    res.status(200).json({
        "status" : "success",
        "message" : "Test api"
    });
});

app.use(cors())

app.use('/api', api);

module.exports = app;