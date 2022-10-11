export const joinClassNames = (...classes: string[]) => {
    console.log(classes.filter(Boolean).join(" "));
    return classes.filter(Boolean).join(" ");
};
