import {View, Text, Button} from 'react-native';
import React from 'react';

const DetailScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DetailScreen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      /> */}
    </View>
  );
};

export default DetailScreen;
