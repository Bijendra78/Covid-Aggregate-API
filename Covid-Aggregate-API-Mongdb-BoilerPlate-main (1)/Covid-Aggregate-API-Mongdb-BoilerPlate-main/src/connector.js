
const mongodb = require('mongodb');

const mongoURI = "mongodb+srv://rambijendra02:rambijendra@cluster0.v4rs57r.mongodb.net/express_crud?retryWrites=true&w=majority" + "/covidtally"

let mongoose = require('mongoose');
const { tallySchema } = require('./schema')


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
collection_connection = mongoose.model('covidtally', tallySchema)


exports.connection = collection_connection;
