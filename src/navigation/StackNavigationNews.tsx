import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsList from '../screens/news/components/NewsList';
import NewsListDetail from '../screens/news/components/NewsListDetail';
import HomeScreen from '../screens/HomeScreen';
import MainNewsScreen from '../screens/news/MainNewsScreen';
import NewsListDetailLink from '../screens/news/components/NewsListDetailLink';

const StackNavigationNews = () => {
  const Stack1 = createNativeStackNavigator();
  return (
    <Stack1.Navigator>
      {/* News Navigation */}
      {/* <Stack1.Screen name="Home" component={HomeScreen} /> */}
      <Stack1.Screen
        name="MainNews"
        component={MainNewsScreen}
        options={{headerShown: false}}
      />
      {/* <Stack1.Screen name="NewsList" component={NewsList} /> */}
      <Stack1.Screen name="NewsListDetail" component={NewsListDetail} />
      <Stack1.Screen name="NewsListDetailLink" component={NewsListDetailLink} />
    </Stack1.Navigator>
  );
};

export default StackNavigationNews;
