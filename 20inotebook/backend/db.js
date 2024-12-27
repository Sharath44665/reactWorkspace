const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook";
const connectToMongo = () => {

    mongoose.connect(mongoURI)
        .then(() => console.log('Connected to MongoDB...'))
        .catch((error) => console.error('Connection error', error));
}


module.exports = connectToMongo;

