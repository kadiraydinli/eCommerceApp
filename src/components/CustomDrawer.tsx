import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import useTheme from '@/hooks/useTheme';

const CustomDrawer = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text }}>DRAWER</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomDrawer;
