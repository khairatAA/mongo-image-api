// Retrieves all images from database
import { Request, Response } from "express";
import Image from "../models/Image";

export const getImagesMetadata = async (req: Request, res: Response) => {
    try {
      // Retrieve metadata for all images from the database (excluding base64 data)
      const images = await Image.find({}, '_id contentType fileName');
  
      res.status(200).json(images);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

