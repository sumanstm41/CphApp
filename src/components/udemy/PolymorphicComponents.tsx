import {View, Text} from 'react-native';
import React, {Children} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Border = ({children}: any) => {
  return <div>{children};</div>;
};

const PolymorphicComponents = () => {
  return (
    <SafeAreaView>
      <Text>PolymorphicComponents</Text>
      <Text>Hello</Text>
      <Text>
        <Border as="Text">Hello world</Border>
      </Text>
    </SafeAreaView>
  );
};

export default PolymorphicComponents;
