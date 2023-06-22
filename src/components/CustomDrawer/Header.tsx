import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useTheme from '@/hooks/useTheme';

import ToggleThemeButton from './ToggleThemeButton';

const Header = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text }]}>E-Commerce</Text>
      <ToggleThemeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});

export default Header;
