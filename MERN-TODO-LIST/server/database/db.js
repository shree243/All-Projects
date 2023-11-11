import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD
const connectToDatabase = () => {
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-eoccpbp-shard-00-00.o3qtu8m.mongodb.net:27017,ac-eoccpbp-shard-00-01.o3qtu8m.mongodb.net:27017,ac-eoccpbp-shard-00-02.o3qtu8m.mongodb.net:27017/?ssl=true&replicaSet=atlas-c2qyoi-shard-0&authSource=admin&retryWrites=true&w=majority`;

    // Set up the MongoDB connection
    mongoose.connect(MONGODB_URI);

    const db = mongoose.connection;

    db.on('error', (error) => {
        console.error('Database connection error:', error);
    });

    db.once('open', () => {
        console.log('Connected to the database.');
    });

    db.on('disconnected', () => {
        console.log('Database disconnected.');
    });


    process.on('SIGINT', () => {
        db.close(() => {
            console.log('Database connection terminated due to app termination.');
            process.exit(0);
        });
    });
};

export default connectToDatabase;
