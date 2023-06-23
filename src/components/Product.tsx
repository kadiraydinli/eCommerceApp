import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import useTheme from '@/hooks/useTheme';
import { Product as ProductType } from '@/store/products/types';
import { Spacing } from '@/theme';

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { name, image, price } = product;
  const { colors } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
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
        <Text numberOfLines={2} style={[styles.title, { color: colors.text }]}>
          {name}
        </Text>
        <Text style={[styles.priceText, { color: colors.text }]}>${price}</Text>
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
