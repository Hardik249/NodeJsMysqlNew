const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes.js');

routes.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})