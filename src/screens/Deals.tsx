import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BottomTabParamList } from '@/navigators/types';
import MasonryProduct from '@/components/MasonryProduct';
import useDealProducts from '@/hooks/useDealProducts';
import EmptyState from '@/components/EmptyState';
import MasonryList from '@/components/MasonryList';

type Props = NativeStackScreenProps<BottomTabParamList, 'Deals'>;

const DealsScreen: React.FC<Props> = ({ navigation }) => {
  const { dealProducts, getDealProducts, isLoading, isError } =
    useDealProducts();

  const ListEmptyComponent = useMemo(
    () =>
      isError ? (
        <EmptyState text="Something went wrong!" />
      ) : !dealProducts?.length && !isLoading ? (
        <EmptyState icon="shopping-bag" text="No Product!" />
      ) : null,
    [isError, isLoading, dealProducts.length],
  );

  return (
    <View style={styles.container}>
      <MasonryList
        data={dealProducts}
        renderItem={item => <MasonryProduct product={item} />}
        refreshing={isLoading}
        onRefresh={getDealProducts}
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

export default DealsScreen;
