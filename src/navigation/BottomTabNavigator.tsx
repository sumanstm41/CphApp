import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';
import StackNavigation from './StackNavigation';
import MainNewsScreen from '../screens/news/MainNewsScreen';
export type BottomTabParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
  AboutTab: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NewsTab"
        component={MainNewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="AboutTab" component={AboutScreen} />
      <Tab.Screen
        name="SettingsTab"
        component={SettingScreen}
        options={{
          tabBarBadge: 3,
          title: 'Setting',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="rocket" size={30} color="#900" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
