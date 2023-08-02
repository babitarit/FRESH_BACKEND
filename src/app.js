const express = require('express');
require('../src/db/connection');


const newsapp= require('../src/models/newsapp');
const router = require('./routers/news');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use(router);
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
