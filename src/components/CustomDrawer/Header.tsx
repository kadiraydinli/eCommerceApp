import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Spacing } from '@/theme';
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
    padding: Spacing.medium,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
});

export default Header;
