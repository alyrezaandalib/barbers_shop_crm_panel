const truncateTextEnd = (maxLength: number, text: string) => {
    let truncated
    if (text.length > maxLength) {
        truncated = text.substr(-maxLength, maxLength) + "...";
    } else truncated = text
    return truncated;
};

export default truncateTextEnd;


export const truncateTextStart = (maxLength: number, text: string) => {
    let truncated
    if (text.length > maxLength) {
        truncated = text.substr(0, maxLength) + "...";
    } else truncated = text
    return truncated;
};
