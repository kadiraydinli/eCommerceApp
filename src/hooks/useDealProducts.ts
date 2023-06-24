import { useCallback, useEffect, useMemo } from "react";

import { fetchHotDeals } from "@/store/hotDeals";
import { fetchProductTimings } from "@/store/productTiming";
import { fetchProducts } from "@/store/products";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { filteredProducts } from "@/utils/helper";

const useDealProducts = () => {
    const dispatch = useAppDispatch();
    const { status: statusProduct, products, error: errorProduct } = useAppSelector(
        store => store.products,
    );
    const { status: statusDeals, productIds, error: errorDeals } = useAppSelector(
        store => store.hotDeals,
    );
    const { status: statusProductTiming } = useAppSelector(store => store.productTiming);

    const isLoading = statusProduct === 'loading' || statusDeals === 'loading' || statusProductTiming === "loading";

    const isError = errorProduct !== null || errorDeals !== null;

    const getDealProducts = useCallback(() => {
        dispatch(fetchProducts());
        dispatch(fetchHotDeals());
        dispatch(fetchProductTimings());
    }, []);

    const filteredDealProducts = useMemo(
        () =>
            products?.filter(product =>
                productIds?.some(id => id.productId === product.id),
            ) || [],
        [products, productIds],
    );

    useEffect(() => getDealProducts(), []);

    const dealProducts = filteredProducts(filteredDealProducts);

    console.log(dealProducts)

    return {
        getDealProducts,
        dealProducts,
        isLoading,
        isError
    }
};

export default useDealProducts;