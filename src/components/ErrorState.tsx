import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useTheme from '@/hooks/useTheme';

const ErrorState = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text }]}>
        Something went wrong!
      </Text>
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
