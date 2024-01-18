// Retrieves an image from database by id
import { Request, Response } from "express";
import Image from "../models/Image";

export const getImageById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
    
        // Retrieve the image by ID from the database
        const image = await Image.findById(id);
    
        if (!image) {
          return res.status(404).json({ error: 'Image not found' });
        }
    
        // Send the base64 data as the image response
        res.status(200).send(Buffer.from(image.data, 'base64'));
    } catch (error) {
        // Throw an error if something goes wrong
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
