import {View, Text, Button} from 'react-native';
import React from 'react';

const DetailScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {projectName, version} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DetailScreen</Text>
      <Text>Project Name: {JSON.stringify(projectName)}</Text>
      <Text>Project Version: {JSON.stringify(version)}</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      /> */}
    </View>
  );
};

export default DetailScreen;
