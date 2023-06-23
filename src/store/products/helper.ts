export const isObjectString = (data: string) => {
    try {
        const obj = JSON.parse(data);
        return typeof obj === 'object' && obj !== null;
    } catch (e) {
        return false;
    }
};