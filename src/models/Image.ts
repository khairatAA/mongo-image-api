// This file handles the creation of an Image collection in the db
// The collection then contains documements, hence, the images being uploaded

import mongoose, { Document, Schema } from "mongoose";

interface IImage extends Document {
    data: string;
    contentType: string;
}

const ImageSchema = new Schema({
    data: String,
    contentType: String,
});

const Image = mongoose.model<IImage>('Image', ImageSchema);

export default Image;
