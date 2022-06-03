import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Square = ({isLight, selected}: any) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const backgroundColor = (isLight: any) => (isLight ? 'blue' : 'lightblue');
const color = (isLight: any) => backgroundColor(!isLight);

const Done = ({isLight, ...props}: any) => (
  <Button
    title={'Done'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{color: color(isLight)}}
    {...props}
  />
);

const Skip = ({isLight, skipLabel, ...props}: any) => (
  <Button
    title={'Skip'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    textStyle={{color: color(isLight)}}
    {...props}>
    {skipLabel}
  </Button>
);

const Next = ({isLight, ...props}: any) => (
  <Button
    title={'Next'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{color: color(isLight)}}
    {...props}
  />
);

const CustomOnBoarding = () => (
  <Onboarding
    DotComponent={Square}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    titleStyles={{color: 'blue'}} // set default color for the title
    pages={[
      {
        backgroundColor: '#fff',
        image: (
          <Image
            source={require('../../../assets/images/Erd5stTW8AEh8g1-3217555669.png')}
          />
        ),
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
        titleStyles: {color: 'red'}, // overwrite default color
      },
      {
        backgroundColor: '#fe6e58',
        image: (
          <Image
            source={require('../../../assets/images/Erd5stTW8AEh8g1-3217555669.png')}
          />
        ),
        title: 'The Title',
        subtitle: 'This is the subtitle that sumplements the title.',
      },
      {
        backgroundColor: '#999',
        image: (
          <Image
            source={require('../../../assets/images/Erd5stTW8AEh8g1-3217555669.png')}
          />
        ),
        title: 'Triangle',
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />
);

export default CustomOnBoarding;
