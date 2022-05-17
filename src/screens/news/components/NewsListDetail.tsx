import {View, Text, Button} from 'react-native';
import React from 'react';

const NewsListDetail = ({navigation: {goBack}}) => {
  return (
    <View>
      <Text>Title</Text>
      <Text>Image</Text>
      <Text>Description</Text>
      <Text>NewsListDetail</Text>
      <Button
        onPress={() => goBack()}
        title="Return to the previous screen from the Details component"
      />
    </View>
  );
};

export default NewsListDetail;
