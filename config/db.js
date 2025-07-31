const mongoose = require('mongoose');  // Correction ici : "require" au lieu de "required"

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is not defined');
    }

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Pour MongoDB Atlas, ajoutez ces options :
            ssl: true,
            authSource: 'admin',
            retryWrites: true,
            w: 'majority'
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;