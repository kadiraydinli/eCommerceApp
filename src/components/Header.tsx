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
import { Spacing } from '@/theme';

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
  const { isDarkTheme, colors } = useTheme();

  const onMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const backgroundColor = isDarkTheme ? colors.black : colors.white;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
      <Animated.View style={options.headerStyle}>
        <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
      </Animated.View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onMenu}
        style={styles.menuButton}>
        <Icon name="menu" color={colors.text} size={25} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Spacing.extraSmall,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: Spacing.small,
  },
  menuButton: {
    paddingRight: Spacing.small,
  },
});

export default Header;
