const mongoose = require('mongoose');
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'error connecting to database'));

    db.once('open', () => {
        console.log("successfully connected to database : mongoDB");
    });
};

module.exports = connectWithDb;