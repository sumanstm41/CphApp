import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Autocomplete from 'react-native-autocomplete-input';
import NewsList from './components/NewsList';
import NewsSearch from './components/NewsSearch';

// interface ITest {
//   title: string;
//   imageName: string;
// }
const MainNewsScreen = ({navigation}: {navigation: any}) => {
  // console.log(MainJSON.filter(item => item.title.search('delectus')));
  return (
    <SafeAreaView>
      <NewsSearch />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NewsListDetail', {
            imageName: 'Test Image',
            title: 'Test Title',
          })
        }>
        <NewsList title="Test Title" imageName="Test Image" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainNewsScreen;
