import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from './Header';

const CustomDrawer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawer;
