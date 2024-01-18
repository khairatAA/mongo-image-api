// This file handles the working principle behind when a POST
// request is made. It creates an image and stores it in MongoDB
// It also validate the file type is either .jpg, .png, .gif

import { Request, Response } from 'express';
import Image from '../models/Image';
import mime from 'mime-types';

export const uploadImage =async (req: Request, res: Response) => {
    try {
        // Extracts the file format and name
        console.log('Request received at uploadImage:', req); //debugging statement

        const {buffer, originalname} = req.file!;

        const allowedFormats = ['image/jpeg', 'image/png', 'image/gif']
        const fileFormat = mime.lookup(originalname);

        // if an invalid format is entered
        if (fileFormat && !allowedFormats.includes(fileFormat)) {
            return res.status(400).json({ error: 'Invalid file format😢 Allowed formats: JPG, PNG, GIF' })
        }

        // convert image (buffer) to base64 to save memory due to image size
        const base64Date = buffer.toString('base64');

        // now the image is save in base64 format to our mongo db databae
        const image = new Image({
            data: base64Date,
            contentType: fileFormat!,
        });

        await image.save();

        // Debugging statement for successful image upload
        console.log('Image uploaded successfully');

        res.status(201).json({ message: 'Hurray, image uploaded successfully🎇🎇' })
    } catch (error) {
        // In case something went wrong
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, something went wrong😭'  })
    }
};
