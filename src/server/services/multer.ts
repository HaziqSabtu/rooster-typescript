// https://www.npmjs.com/package/multer
import multer from "multer";

const ALLOWED_FORMAT = ["image/jpeg", "image/png", "image/jpg"];

const storage = multer.memoryStorage();
export const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 5mb
    },
    fileFilter: function (req, file, cb) {
        if (ALLOWED_FORMAT.includes(file.mimetype)) {
            cb(null, true); // true -> accept file
        } else {
            cb(new Error("Not supported file format!"));
        }
    },
});
