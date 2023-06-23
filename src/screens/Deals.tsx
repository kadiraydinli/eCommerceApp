import React, { useCallback, useEffect, useMemo } from 'react';
import { RefreshControl, StyleSheet, View } from 'react-native';

import { MasonryFlashList } from '@shopify/flash-list';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BottomTabParamList } from '@/navigators/types';
import MasonryProduct from '@/components/MasonryProduct';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { fetchProducts } from '@/store/products';
import useTheme from '@/hooks/useTheme';
import { Spacing } from '@/theme';
import { fetchHotDeals } from '@/store/hotDeals';

type Props = NativeStackScreenProps<BottomTabParamList, 'Deals'>;

const DealsScreen: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const { status: statusProduct, products } = useAppSelector(
    store => store.products,
  );
  const { status: statusDeals, productIds } = useAppSelector(
    store => store.hotDeals,
  );

  const getData = useCallback(() => {
    dispatch(fetchProducts());
    dispatch(fetchHotDeals());
  }, []);

  useEffect(() => getData(), []);

  const isLoading = statusProduct === 'loading' || statusDeals === 'loading';

  const dealProducts = useMemo(
    () =>
      products?.filter(product =>
        productIds?.some(id => id.productId === product.id),
      ) || [],
    [products, productIds],
  );

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={dealProducts}
        numColumns={2}
        renderItem={({ item }) => <MasonryProduct product={item} />}
        estimatedItemSize={200}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            tintColor={colors.text}
            colors={[colors.black]}
            onRefresh={getData}
          />
        }
        contentContainerStyle={{
          padding: Spacing.extraSmall,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DealsScreen;
