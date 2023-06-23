import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useTheme from '@/hooks/useTheme';

import DrawerNavigator from './DrawerNavigator';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isDarkTheme, colors } = useTheme();

  useEffect(() => {
    const changeBarColor = async () => {
      StatusBar.setBarStyle(isDarkTheme ? 'light-content' : 'dark-content');

      if (Platform.OS === 'android') {
        const color = isDarkTheme ? colors.black : colors.white;
        StatusBar.setBackgroundColor(color);
        await SystemNavigationBar.setNavigationColor(
          color,
          isDarkTheme ? 'light' : 'dark',
          'both',
        );
      }
    };

    changeBarColor();
  }, [isDarkTheme]);

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
