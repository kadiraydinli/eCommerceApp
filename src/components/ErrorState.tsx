import React from 'react';
import { StyleSheet, View } from 'react-native';

import Typography from './Typography';

const ErrorState = () => {
  return (
    <View style={styles.container}>
      <Typography style={styles.text}>Something went wrong!</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default ErrorState;
