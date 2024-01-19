// index module
// Makes a connection to the database within a specific port

import express from 'express';
import mongoose from 'mongoose';
import imageRoutes from './routes/imageRoutes';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();
const mongoURI = process.env.MONGODB_URI || 'mongodb://44.225.181.72/image_api?connectTimeoutMS=30000';

const app = express();
const PORT = process.env.PORT || 3000;

// Creates an express app
app.use(express.json());
app.use('/images', imageRoutes);
app.use(cors()); // For Cross-Origin Resource Sharing
app.use(helmet()); // For enchanced security

// Connect to the MongoDB database
mongoose.connect(mongoURI);

// Debugging statement to ensure the connect to the database was seamless
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
    console.log('Successfully connected to MongoDB');
});

// Debugging statement to shoe server is running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
