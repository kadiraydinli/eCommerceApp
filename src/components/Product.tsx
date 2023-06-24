import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Product as ProductType } from '@/store/products/types';
import { currencyFormat } from '@/utils/currencyFormat';
import { Spacing } from '@/theme';
import useBasket from '@/hooks/useBasket';

import Typography from './Typography';

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { id, name, image, price } = product;
  const { add } = useBasket();

  const priceText = currencyFormat(price);

  const onPress = () => {
    add(id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.image}>
        <FastImage
          style={{ ...StyleSheet.absoluteFillObject }}
          source={{
            uri: image || '',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.bottomContent}>
        <Typography numberOfLines={2} style={styles.title}>
          {name}
        </Typography>
        <Typography style={styles.priceText}>{priceText}</Typography>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: Spacing.medium,
    paddingBottom: 0,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bottomContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.extraSmall,
    paddingHorizontal: Spacing.extraSmall,
  },
  title: {
    flex: 1,
    marginRight: Spacing.small,
    fontFamily: 'Poppins-Regular',
  },
  priceText: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Product;
