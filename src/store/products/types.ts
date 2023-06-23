import { StatusType } from "../types";

export type Product = {
    id: string;
    createdAt: string;
    name: string;
    image: string;
    price: string;
    category: string;
};

export type ProductState = {
    status: StatusType;
    products: Product[] | null;
    error: string | null;
};