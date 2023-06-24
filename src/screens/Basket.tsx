import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BottomTabParamList } from '@/navigators/types';
import BasketProduct from '@/components/Basket/Product';
import useBasket from '@/hooks/useBasket';
import TotalPanel from '@/components/Basket/TotalPanel';
import Header from '@/components/Basket/Header';
import EmptyState from '@/components/EmptyState';

type Props = NativeStackScreenProps<BottomTabParamList, 'Basket'>;

const BasketScreen: React.FC<Props> = ({ navigation }) => {
  const { products } = useBasket();

  const emptyList = <EmptyState icon="shopping-bag" text="Empty Basket!" />;

  if (!products?.length) {
    return emptyList;
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlashList
        data={products}
        renderItem={({ item }) => <BasketProduct product={item} />}
        estimatedItemSize={200}
      />
      <TotalPanel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BasketScreen;
