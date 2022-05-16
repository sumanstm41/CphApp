import {View, Text, Button, StyleSheet} from 'react-native';
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
      <Button
        title="Flat List Component"
        onPress={() => navigation.navigate('RnFlatListUser')}
      />
      <Button
        title="Flat List User"
        onPress={() => navigation.navigate('RnFlatListUser')}
      />
      <Button
        title="Touchable Opacity"
        onPress={() => navigation.navigate('RnTouchableOpacity')}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  Button: {
    flex: 1,
    padding: 3,
    backgroundColor: 'red',
  },
});
