// This file handles the delete of an image based on the id

import { Request, Response } from 'express';
import Image from '../models/Image';
import mongoose from 'mongoose';

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validate that the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid image ID' });
    }

    // Find the image by ID and delete it
    const deletedImage = await Image.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ error: 'Image not found' });
    }

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
