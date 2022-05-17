import {View, Text} from 'react-native';
import React from 'react';

const Image = props => {
  return (
    <View>
      <Text>{props.imageName}</Text>
    </View>
  );
};

export default Image;
