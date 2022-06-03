import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './src/navigation/MainNavigation';
import OnBoarding from './src/components/default/OnBoarding';
import CustomOnBoarding from './src/components/default/CustomOnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      {/* {OnboardingStatus == true ? <OnBoarding /> : null} */}
      {/* <OnBoarding /> */}
      {/* <CustomOnBoarding /> */}
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
function UseState(arg0: null): [any, any] {
  throw new Error('Function not implemented.');
}
