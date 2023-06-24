import React, { useMemo } from 'react';
import { RefreshControl, StyleSheet, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BottomTabParamList } from '@/navigators/types';
import Product from '@/components/Product';
import EmptyState from '@/components/EmptyState';
import useProduct from '@/hooks/useProduct';

type Props = NativeStackScreenProps<BottomTabParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { getProducts, products, isLoading, isError } = useProduct();

  const ListEmptyComponent = useMemo(
    () =>
      isError ? (
        <EmptyState text="Something went wrong!" />
      ) : !products?.length && !isLoading ? (
        <EmptyState icon="shopping-bag" text="No Product!" />
      ) : null,
    [isError, isLoading, products?.length],
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        estimatedItemSize={200}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getProducts} />
        }
        refreshing={isLoading}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
