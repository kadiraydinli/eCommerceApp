import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import useTheme from '@/hooks/useTheme';

interface TypographyProps extends TextProps {}

const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Text style={[{ color: colors.text }, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
});

export default Typography;
