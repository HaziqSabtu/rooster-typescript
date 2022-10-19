export const checkFileType = (file: File) => {
    const VALID_TYPE = ["image/jpeg", "image/jpg", "image/png"];
    if (VALID_TYPE.indexOf(file.type) === -1) {
        return false;
    }
    return true;
};
