import { useMemo } from "react";

const SIZES = [320, 440, 560];
const DISCOUNT_RATE = { min: 10, max: 70 };

export const getResizedImageUrl = (url: string): { resizedImageUrl: string, randomSize: number } => {
    const randomSize = useMemo(
        () => SIZES[Math.floor(Math.random() * SIZES.length)],
        [],
    );

    const resizedImageUrl = url.replace(
        /(\d{3})\/(\d{3})/,
        randomSize + '/' + randomSize,
    );

    return { resizedImageUrl, randomSize };
};

export const getDiscountRate = (): number => {
    const randomNum = Math.floor(Math.random() * (DISCOUNT_RATE.max - DISCOUNT_RATE.min + 1)) + DISCOUNT_RATE.min;
    const multipleOfFive = Math.ceil(randomNum / 5) * 5;

    return multipleOfFive;
};