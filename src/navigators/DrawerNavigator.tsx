import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '@/components/CustomDrawer';

import BottomTabsNavigator from './BottomTabsNavigator';
import { DrawerStackParamList } from './types';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}
      drawerContent={() => <CustomDrawer />}>
      <Drawer.Screen name="BottomTabs" component={BottomTabsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
