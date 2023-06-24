import { Product } from "@/store/products/types";
import { useAppSelector } from "@/store/store";

// The date of today has been predetermined in advance
const CHOSEN_DATE = '2020-06-06';

export const filteredProducts = (products: Product[]): Product[] => {
    const { productTimings } = useAppSelector(store => store.productTiming);

    const today = new Date(CHOSEN_DATE);
    const filteredProducts: Product[] = [];

    productTimings?.map(timing => {
        const startDate = new Date(timing.startDate);
        const endDate = new Date(timing.endDate);

        if (startDate <= today && endDate >= today) {
            const product = products?.find(p => p.id === timing.productId);
            if (product) {
                filteredProducts.push(product);
            }
        }
    });

    return filteredProducts;
};