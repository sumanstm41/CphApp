import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import RnFlatListUser from '../components/RnFlatListUser';
import RnFlatList from '../components/RnFlatList';
import RnTouchableOpacity from '../components/RnTouchableOpacity';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: 'Detail'}}
      />
      <Stack.Screen name="RnFlatList" component={RnFlatList} />
      <Stack.Screen name="RnFlatListUser" component={RnFlatListUser} />
      <Stack.Screen name="RnTouchableOpacity" component={RnTouchableOpacity} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
