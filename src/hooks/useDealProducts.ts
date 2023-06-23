import { fetchHotDeals } from "@/store/hotDeals";
import { fetchProducts } from "@/store/products";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useCallback, useEffect, useMemo } from "react";

const useDealProducts = () => {
    const dispatch = useAppDispatch();
    const { status: statusProduct, products } = useAppSelector(
        store => store.products,
    );
    const { status: statusDeals, productIds } = useAppSelector(
        store => store.hotDeals,
    );

    const isLoading = statusProduct === 'loading' || statusDeals === 'loading';

    const getDealProducts = useCallback(() => {
        dispatch(fetchProducts());
        dispatch(fetchHotDeals());
    }, []);

    const dealProducts = useMemo(
        () =>
            products?.filter(product =>
                productIds?.some(id => id.productId === product.id),
            ) || [],
        [products, productIds],
    );

    useEffect(() => getDealProducts(), []);

    return {
        getDealProducts,
        dealProducts,
        isLoading,
    }
};

export default useDealProducts;