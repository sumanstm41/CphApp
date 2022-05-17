import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NewsImage from './NewsImage';
import Title from './Title';
interface IProps {
  imageName: string;
  title: string;
}
const NewsList: React.FC<IProps> = props => {
  return (
    <SafeAreaView>
      <NewsImage imageName={props.imageName} />
      <Title title={props.title} />
    </SafeAreaView>
  );
};

export default NewsList;
