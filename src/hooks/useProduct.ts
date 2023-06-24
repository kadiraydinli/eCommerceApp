import { useCallback, useEffect } from "react";

import { fetchProducts } from "@/store/products";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchProductTimings } from "@/store/productTiming";
import { Product } from "@/store/products/types";
import { filteredProducts } from "@/utils/helper";

const useProduct = () => {
    const dispatch = useAppDispatch();
    const { status, products: allProducts, error } = useAppSelector(store => store.products);
    const { status: statusProductTiming } = useAppSelector(store => store.productTiming);

    const isLoading = status === 'loading' || statusProductTiming === "loading";

    const isError = error !== null;

    const getProducts = useCallback(() => {
        dispatch(fetchProducts());
        dispatch(fetchProductTimings());
    }, []);

    useEffect(() => getProducts(), []);

    const products = filteredProducts(allProducts as Product[]);

    return {
        getProducts,
        isLoading,
        isError,
        products
    }
};

export default useProduct;