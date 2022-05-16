import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Detail', {
            projectName: 'Copnhagen Tourism Project',
            version: '0.0.1',
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
