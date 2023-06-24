import { useCallback, useEffect } from "react";

import { fetchProducts } from "@/store/products";
import { useAppDispatch, useAppSelector } from "@/store/store";

const useProduct = () => {
    const dispatch = useAppDispatch();
    const { status, products, error } = useAppSelector(store => store.products);

    const isLoading = status === 'loading';

    const isError = error !== null;

    const getProducts = useCallback(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => getProducts(), []);

    return {
        getProducts,
        isLoading,
        isError,
        products
    }
};

export default useProduct;