export type Basket = {
    productId: string;
    quantity: number;
};

export type BasketState = {
    basket: Basket[] | null;
};