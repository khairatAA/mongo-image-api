// The finds handles route defination for all endpoints

import express from 'express';
import { uploadImage } from '../controllers/uploadImage';
import { getImagesMetadata } from '../controllers/getImages';
import { getImageById } from '../controllers/getImageById';
import multer from 'multer';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage }); // used to specify how files will be uploaded to th db

console.log('Middleware configured successfully'); // debugging statement

// Uploads an image to the data base
router.post('/upload', upload.single('image'), uploadImage);

// Retrieve all images betadata from the database
router.get('/get_image', getImagesMetadata);

// Retrieve a specific image by ID
router.get('/get_image/:id', getImageById);

console.log('Upload route configured successfully'); // Debugging statement

export default router;
