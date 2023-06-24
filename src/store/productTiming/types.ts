import { StatusType } from "../types";

export type ProductTiming = {
    productId: string;
    startDate: string;
    endDate: string;
};

export type ProductTimingState = {
    status: StatusType;
    productTimings: ProductTiming[] | null;
    error: string | null;
};