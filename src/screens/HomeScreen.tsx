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
        title="Interface Components"
        onPress={() => navigation.navigate('RnInterface')}
      />
      <Button
        title="Touchable Opacity"
        onPress={() => navigation.navigate('RnTouchableOpacity')}
      />
      <Button
        title="Flex Box"
        onPress={() => navigation.navigate('RnFlexBox')}
      />
      <Button
        title="Hooks Components"
        onPress={() => navigation.navigate('RnComponentsHooks')}
      />
      <Button
        title="Polymorphic Components"
        onPress={() => navigation.navigate('RnPolymorphic')}
      />
      <Text>Udemy Courses</Text>
      <Button
        title="Polymorphic Components Udemy"
        onPress={() => navigation.navigate('PolymorphicComponents')}
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
