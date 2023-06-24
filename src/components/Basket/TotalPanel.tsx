import React from 'react';
import { StyleSheet, View } from 'react-native';

import useBasket from '@/hooks/useBasket';
import useTheme from '@/hooks/useTheme';
import { Spacing } from '@/theme';

import Typography from '../Typography';

const TotalPanel = () => {
  const { isDarkTheme, colors } = useTheme();
  const { totalPrice } = useBasket();

  const borderTopColor = isDarkTheme ? colors.white : colors.deActive;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundColor, borderTopColor },
      ]}>
      <Typography style={styles.totalText}>Total</Typography>
      <Typography style={styles.amountText}>{totalPrice}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    borderTopWidth: 1,
  },
  totalText: {
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
  },
  amountText: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default TotalPanel;
