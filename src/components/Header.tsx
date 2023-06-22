import React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { DrawerActions, ParamListBase } from '@react-navigation/native';
import useTheme from '@/hooks/useTheme';

interface HeaderProps {
  title: string;
  navigation: BottomTabNavigationProp<ParamListBase, string, undefined>;
  options: BottomTabNavigationOptions;
  style?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({
  title,
  navigation,
  options,
  style,
}) => {
  const theme = useTheme();

  const onMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <Animated.View style={options.headerStyle}>
        <Text style={[styles.text, { color: theme.colors.text }]}>{title}</Text>
      </Animated.View>

      <TouchableOpacity activeOpacity={0.7} onPress={onMenu}>
        <Icon name="menu" color={theme.colors.text} size={25} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Header;
