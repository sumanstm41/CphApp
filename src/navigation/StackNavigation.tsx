import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import RnFlatListUser from '../components/RnFlatListUser';
import RnFlatList from '../components/RnFlatList';
import RnTouchableOpacity from '../components/RnTouchableOpacity';
import RnFlexBox from '../components/RnFlexBox';
<<<<<<< HEAD
import NewsList from '../screens/news/components/NewsList';
import NewsListDetail from '../screens/news/components/NewsListDetail';
=======
import RnComponentsHooks from '../components/RnComponentsHooks';
>>>>>>> Rn-Components

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: 'Detail'}}
      />
      <Stack.Screen name="RnFlatList" component={RnFlatList} />
      <Stack.Screen name="RnFlatListUser" component={RnFlatListUser} />
      <Stack.Screen name="RnTouchableOpacity" component={RnTouchableOpacity} />
      <Stack.Screen name="RnFlexBox" component={RnFlexBox} />
<<<<<<< HEAD

      {/* News Navigation */}
      {/* <Stack.Screen name="NewsList" component={NewsList} />
      <Stack.Screen name="NewsListDetail" component={NewsListDetail} /> */}
=======
      <Stack.Screen name="RnComponentsHooks" component={RnComponentsHooks} />
>>>>>>> Rn-Components
    </Stack.Navigator>
  );
};

export default StackNavigation;
