import { useMemo } from "react";

import { addProduct, clearBasket, removeProduct } from "@/store/basket";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { currencyFormat } from "@/utils/currencyFormat";

const useBasket = () => {
    const dispatch = useAppDispatch();
    const { basket: basketIds } = useAppSelector(store => store.basket);
    const { products: allProducts } = useAppSelector(store => store.products);

    const products = useMemo(
        () =>
            allProducts?.filter(product =>
                basketIds?.some(id => id.productId === product.id),
            ) || [],
        [allProducts, basketIds],
    );

    const totalPrice = useMemo(() => {
        const total = products.map(i =>
            parseFloat(i.price) *
            (basketIds?.find(basketId => basketId.productId === i.id)?.quantity || 1)
        ).reduce((sum, current) => sum + current, 0);
        return currencyFormat(total.toString());
    }, [products]);

    const basketCount = basketIds?.length || 0;

    const add = (id: string) => {
        dispatch(addProduct({ productId: id }));
    };

    const remove = (id: string) => {
        dispatch(removeProduct({ productId: id, isDelete: true }));
    };

    const increaseAmount = (id: string) => {
        dispatch(addProduct({ productId: id }));
    };

    const decreaseAmount = (id: string) => {
        dispatch(removeProduct({ productId: id }));
    };

    const clear = () => {
        dispatch(clearBasket());
    };

    return {
        add,
        remove,
        increaseAmount,
        decreaseAmount,
        clear,
        products,
        basketCount,
        basketIds,
        totalPrice
    }
};

export default useBasket;