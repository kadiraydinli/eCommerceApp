import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from '@react-navigation/native';

import { Spacing } from '@/theme';

import Typography from './Typography';

interface EmptyStateProps {
  text: string;
  icon?: 'shopping-bag';
}

const EmptyState: React.FC<EmptyStateProps> = ({ text, icon }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {icon && <Icon name={icon as string} size={60} color={colors.text} />}
      <Typography style={styles.text}>{text}</Typography>
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
    marginTop: Spacing.small,
  },
});

export default EmptyState;
