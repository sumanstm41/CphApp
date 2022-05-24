import {View, Text} from 'react-native';
import React from 'react';

type TextProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
};
const CustomText = ({size, color, children}: TextProps) => {
  return (
    <View>
      <Text>CustomText</Text>
      {/* <Text className={`class-with-${size}-${color}`}>{children}</Text> */}
    </View>
  );
};

export default CustomText;
