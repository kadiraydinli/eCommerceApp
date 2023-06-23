import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Spacing } from '@/theme';

import ToggleThemeButton from './ToggleThemeButton';
import Typography from '../Typography';

const Header = () => {
  return (
    <View style={styles.container}>
      <Typography style={styles.text}>E-Commerce</Typography>
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
