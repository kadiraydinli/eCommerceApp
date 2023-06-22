import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import useTheme from '@/hooks/useTheme';

const ToggleThemeButton = () => {
  const { isDarkTheme, toggleTheme, colors } = useTheme();

  const iconName = isDarkTheme ? 'wb-sunny' : 'bedtime';

  const onPress = () => {
    toggleTheme();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={25} color={colors.text} />
    </TouchableOpacity>
  );
};

export default ToggleThemeButton;
