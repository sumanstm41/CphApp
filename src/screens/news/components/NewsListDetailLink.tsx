import {View, Text} from 'react-native';
import React from 'react';

const NewsListDetailLink = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const {title} = route.params;
  return (
    <View>
      <Text>NewsListDetailLink: {JSON.stringify(title)}</Text>
      <Text>NewsListDetailLink: {title.title}</Text>
    </View>
  );
};

export default NewsListDetailLink;
