import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Product } from '@/store/products/types';
import useBasket from '@/hooks/useBasket';
import useTheme from '@/hooks/useTheme';
import { Spacing } from '@/theme';

import Typography from '../../Typography';
import InputSpinner from './InputSpinner';

interface BasketProductProps {
  product: Product;
}

const IMAGE_SIZE = 100;

const BasketProduct: React.FC<BasketProductProps> = ({ product }) => {
  const { id, name, image, price } = product;
  const { isDarkTheme, colors } = useTheme();
  const { remove } = useBasket();

  const dividerColor = isDarkTheme ? colors.white : colors.deActive;
  const color = isDarkTheme ? colors.white : colors.black;

  const onDeleteProduct = () => {
    Alert.alert(
      'Remove Product',
      'Are you sure you want to remove item in the basket?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => remove(id) },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
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

        <View
          style={{
            flex: 1,
            marginLeft: Spacing.small,
          }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Typography numberOfLines={2} style={styles.title}>
              {name}
            </Typography>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onDeleteProduct}
              style={styles.deleteButton}>
              <Icon
                name="delete"
                size={20}
                color={color}
                style={styles.trashIcon}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography style={styles.priceText}>${price}</Typography>
            <InputSpinner product={product} />
          </View>
        </View>
      </View>

      <View style={[styles.divider, { backgroundColor: dividerColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: Spacing.medium,
    paddingBottom: 0,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
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
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
  priceText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  divider: {
    width: '100%',
    height: 1,
    marginTop: Spacing.small,
  },
  deleteButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trashIcon: {
    marginBottom: Spacing.small,
    marginLeft: Spacing.small,
  },
});

export default BasketProduct;
