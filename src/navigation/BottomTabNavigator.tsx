import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';
export type BottomTabParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
  AboutTab: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="AboutTab" component={AboutScreen} />
      <Tab.Screen
        name="SettingsTab"
        component={SettingScreen}
        options={{
          tabBarBadge: 3,
          title: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
