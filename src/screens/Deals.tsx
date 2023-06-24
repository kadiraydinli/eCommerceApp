import React, { useMemo } from 'react';
import { RefreshControl, StyleSheet, View } from 'react-native';

import { MasonryFlashList } from '@shopify/flash-list';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BottomTabParamList } from '@/navigators/types';
import MasonryProduct from '@/components/MasonryProduct';
import useTheme from '@/hooks/useTheme';
import { Spacing } from '@/theme';
import useDealProducts from '@/hooks/useDealProducts';
import EmptyState from '@/components/EmptyState';

type Props = NativeStackScreenProps<BottomTabParamList, 'Deals'>;

const DealsScreen: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();
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
            onRefresh={getDealProducts}
          />
        }
        ListEmptyComponent={ListEmptyComponent}
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
