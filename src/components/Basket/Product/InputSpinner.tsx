import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Product } from '@/store/products/types';
import useBasket from '@/hooks/useBasket';
import useTheme from '@/hooks/useTheme';
import { Spacing } from '@/theme';

import Typography from '../../Typography';

interface InputSpinnerProps {
  product: Product;
}

const InputSpinner: React.FC<InputSpinnerProps> = ({ product }) => {
  const { id } = product;
  const { isDarkTheme, colors } = useTheme();
  const { increaseAmount, decreaseAmount, basketIds } = useBasket();

  const quantity = basketIds?.find(i => i.productId === id)?.quantity || 0;

  const onDecrease = () => {
    decreaseAmount(id);
  };

  const onIncrease = () => {
    increaseAmount(id);
  };

  const buttonTextColor = isDarkTheme ? colors.black : colors.white;
  const buttonBackgroundColor = isDarkTheme ? colors.white : colors.black;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onDecrease}
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}>
        {quantity === 1 ? (
          <Icon name="delete" color={buttonTextColor} size={20} />
        ) : (
          <Typography style={[styles.buttonText, { color: buttonTextColor }]}>
            -
          </Typography>
        )}
      </TouchableOpacity>

      <Typography style={styles.quantityText}>{quantity}</Typography>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onIncrease}
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}>
        <Typography style={[styles.buttonText, { color: buttonTextColor }]}>
          +
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.tiny,
    borderWidth: 0.5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  button: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  quantityText: {
    width: 25,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default InputSpinner;
