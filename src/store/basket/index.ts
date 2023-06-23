import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Basket, BasketState } from './types';

const slice = createSlice({
    name: 'BasketSlice',
    initialState: { basket: [] } as BasketState,
    reducers: {
        addProduct: (state, action: PayloadAction<{ productId: string }>) => {
            const productId = action.payload.productId;
            const product = state.basket?.find(i => i.productId === productId);

            if (product) {
                const updatedBasket = state.basket?.map((product) => {
                    if (product.productId === action.payload.productId) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    }

                    return product;
                });

                state.basket = updatedBasket as Basket[];
            } else {
                state.basket?.push({ productId: action.payload.productId, quantity: 1 });
            }
        },
        removeProduct: (state, action: PayloadAction<{ productId: string, isDelete?: boolean; }>) => {
            const productId = action.payload.productId;
            const product = state.basket?.find(i => i.productId === productId);
            const quantity = product?.quantity || 0;

            if (quantity > 1 && !action.payload.isDelete) {
                const updatedBasket = state.basket?.map((product) => {
                    if (product.productId === action.payload.productId) {
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        };
                    }

                    return product;
                });

                state.basket = updatedBasket as Basket[];
            } else {
                const updatedBasket = state.basket?.filter(i => i.productId !== productId);

                state.basket = updatedBasket as Basket[];
            }
        },
        clearBasket: (state) => {
            state.basket = [];
        }
    },
});

export const { addProduct, removeProduct, clearBasket } = slice.actions;

export default slice.reducer;