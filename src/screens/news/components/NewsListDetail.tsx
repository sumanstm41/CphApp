import {View, Text, Button} from 'react-native';
import React from 'react';

const NewsListDetail = ({route, navigation}: {route: any; navigation: any}) => {
  const {title, imageName} = route.params;
  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Title: {imageName}</Text>
      <Text>Description</Text>
      <Text>NewsListDetail</Text>
      <Button
        // onPress={() => goBack()}
        title="Return"
      />
    </View>
  );
};

export default NewsListDetail;
