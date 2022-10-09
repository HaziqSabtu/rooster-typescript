import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: "do7i2qsru",
    api_key: "245769356929299",
    api_secret: "f3QeRX92U-QnJWKbb2i5GsH4QMA",
});

export const cloudinaryUpload = (file: string) =>
    cloudinary.v2.uploader.upload(file);
