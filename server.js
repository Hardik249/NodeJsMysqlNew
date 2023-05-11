const express = require('express');
const app = express();
const PORT = 3001;
const routes = require('./routes.js');

routes.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})