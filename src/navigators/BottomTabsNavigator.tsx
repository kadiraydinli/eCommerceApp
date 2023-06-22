/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';

import HomeScreen from '@/screens/Home';
import DealsScreen from '@/screens/Deals';
import BasketScreen from '@/screens/Basket';
import ProfileScreen from '@/screens/Profile';
import useTheme from '@/hooks/useTheme';
import Header from '@/components/Header';

import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigator = () => {
  const { activeColor, deActiveColor } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <Header title={title} navigation={navigation} options={options} />
          );
        },
        headerStyle: {
          height: 40,
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="home"
              color={focused ? activeColor : deActiveColor}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={DealsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="local-offer"
              color={focused ? activeColor : deActiveColor}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="shopping-bag"
              color={focused ? activeColor : deActiveColor}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name="person"
              color={focused ? activeColor : deActiveColor}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
