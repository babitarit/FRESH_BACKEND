//connecting this express app to the database
const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0/newsapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log("Connection is successful");
    }).catch((e) => {
        console.log("No connection");
    });

