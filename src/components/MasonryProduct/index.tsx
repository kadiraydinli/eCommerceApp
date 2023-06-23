import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Product as ProductType } from '@/store/products/types';
import { Spacing } from '@/theme';

import { getDiscountRate, getResizedImageUrl } from './helper';
import Typography from '../Typography';

interface MasonryProductProps {
  product: ProductType;
}

const MasonryProduct: React.FC<MasonryProductProps> = ({ product }) => {
  const { name, image, price } = product;

  const { resizedImageUrl, randomSize } = getResizedImageUrl(image);

  const discountRate = getDiscountRate();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.image}>
          <FastImage
            style={{
              height: randomSize / 2,
              alignSelf: 'stretch',
            }}
            source={{
              uri: resizedImageUrl || '',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={styles.bottomContent}>
          <Typography numberOfLines={2} style={styles.title}>
            {name}
          </Typography>
          <View style={{ flexDirection: 'row', gap: 4, marginTop: 4 }}>
            <Typography style={styles.priceText}>${price}</Typography>
            <Typography style={styles.discountText}>
              %{discountRate} OFF
            </Typography>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: Spacing.small,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  bottomContent: {
    flex: 1,
    marginTop: Spacing.extraSmall,
    paddingHorizontal: Spacing.tiny,
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  priceText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  discountText: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
  },
});

export default MasonryProduct;
