module.exports = () => {
    const mongoose = require('mongoose')
    const { url } = require('./index').mongo

    // Start database connection
    mongoose.Promise = global.Promise;
    mongoose.connect(url, {
        promiseLibrary: global.Promise
    });
    const db = mongoose.connection;

    // Database event listeners
    db.on('connected', function () {
        console.log('Connected to MongoDB');
    });

    db.on('disconnected', function () {
        console.log('Disconnected from MongoDB');
    });

    db.on('open', function () {
        console.log('MongoDB Connection Open')
    });

    db.on('connecting', function () {
        console.log("Connecting to MongoDB");
    });

    db.on('error', function (error) {
        console.error('MongoDB error: ' + error);
        mongoose.disconnect();
    });

    db.on('reconnected', function () {
        console.log('Reconnected to MongoDB');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose connection disconnected through app termination');
            process.exit(0);
        });
    });
    
    return { mongoose, db }
}