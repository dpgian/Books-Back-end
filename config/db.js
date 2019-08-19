const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(
            db,
            { useNewUrlParser: true }
        )
        console.log('MongoDB is connected.')
    } catch (err) {
        console.error('Error while connecting to database: ' +err.message);
        process.exit(1)
    }
}

module.exports = connectDB;