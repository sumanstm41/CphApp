import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import NewsListDetailLink from './NewsListDetailLink';

const NewsListDetail = ({route, navigation}: {route: any; navigation: any}) => {
  const {title, imageName} = route.params;
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NewsListDetailLink', {
            title: {title},
          })
        }>
        <Text>Title: {title}</Text>
      </TouchableOpacity>
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
