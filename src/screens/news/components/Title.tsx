import {View, Text} from 'react-native';
import React from 'react';

const Title = props => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default Title;
