import { StatusType } from "../types";

export type HotDeal = {
    productId: string;
};

export type HotDealsState = {
    status: StatusType;
    productIds: HotDeal[] | null;
    error: string | null;
};