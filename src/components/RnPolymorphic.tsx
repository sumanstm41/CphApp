import {View, Text} from 'react-native';
import React from 'react';
import CustomText from './polymorphic/CustomText';

type TitleProps = {
  children: string;
};

function Title({children}: TitleProps) {
  return <h2 aria-labelledby="title">{children}</h2>;
}

const RnPolymorphic = () => {
  return (
    <View>
      {/* <Text>RnPolymorphic</Text> */}
      <CustomText size="lg">Heading 1</CustomText>
      <CustomText size="md">Heading 2</CustomText>
      <CustomText size="sm" color="secondary">
        Heading 3
      </CustomText>
    </View>
  );
};

export default RnPolymorphic;
