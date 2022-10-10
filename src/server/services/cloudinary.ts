import cloudinary from "cloudinary";
import { env } from "../../env/server.mjs";

cloudinary.v2.config({
    cloud_name: env.CLOUDINARY_NAME,
    api_key: env.CLOUDINARY_KEY,
    api_secret: env.CLOUDINARY_SECRET,
});

export const cloudinaryUpload = (file: string) =>
    cloudinary.v2.uploader.upload(file);
