import DatauriParser from "datauri/parser";
import { DataURI } from "datauri/types";
import path from "path";

const parser = new DatauriParser();

// dUri.format('.png', buffer);
export const dataUri = (file: {
    originalname: string;
    buffer: DataURI.Input;
}) => parser.format(path.extname(file.originalname).toString(), file.buffer);
