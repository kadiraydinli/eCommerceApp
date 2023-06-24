import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Spacing } from '@/theme';
import useBasket from '@/hooks/useBasket';
import useTheme from '@/hooks/useTheme';

import Typography from '../Typography';

const Header = () => {
  const { isDarkTheme, colors } = useTheme();
  const { clear } = useBasket();

  const color = isDarkTheme ? colors.white : colors.black;

  const onPress = () => {
    Alert.alert(
      'Remove All Products',
      'Are you sure you want to remove all items in the basket?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => clear() },
      ],
    );
  };

  return (
    <View
      style={[
        styles.header,
        { borderTopColor: color, borderBottomColor: color },
      ]}>
      <Typography>Remove all products</Typography>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Icon name="delete" size={20} color={color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.small,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.5,
  },
});

export default Header;
