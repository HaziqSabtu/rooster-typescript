import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { cloudinaryUpload } from "../../../server/services/cloudinary";
import { dataUri } from "../../../server/services/dataUri";
import { upload } from "../../../server/services/multer";

export const config: PageConfig = {
    api: {
        bodyParser: false,
    },
};

interface NextReqWithFile extends NextApiRequest {
    file: {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        buffer: Buffer;
        size: number;
    };
}
const uploadImage = async (req: NextReqWithFile, res: NextApiResponse) => {
    try {
        // modify header with req.file
        await runMiddleware(req, res, upload.single("file"));
        if (!req.file) {
            throw new Error("Image is not presented!");
        }

        // convert buffer to base64
        const file64 = dataUri(req.file);

        // upload Image to Cloudinary
        if (!file64.content) {
            throw new Error("Error in Encoding Image!");
        }
        const data = await cloudinaryUpload(file64.content);

        const url = data.url;

        return res.json({
            url: url,
        });
    } catch (error: any) {
        return res.status(422).json({ message: error.message });
    }
};

function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: (...args: any[]) => void
): Promise<any> {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default function handler(req: NextReqWithFile, res: NextApiResponse) {
    const method = req.method;

    if (method === "POST") {
        return uploadImage(req, res);
    }

    if (method === "GET") {
        return res.status(200).json({ status: "Okei" });
    }

    return res.status(405).json({ error: `Method ${method} is not allowed` });
}
