import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = ({navigation}: any) => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <Onboarding
      onDone={() => {
        setCount(count + 1);
        navigation.navigate('Home');
      }}
      onSkip={() => navigation.navigate('Home')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../../assets/images/onboarding-img1.png')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../../assets/images/onboarding-img2.png')}
              // source={require('../assets/images/maxresdefault-4265382.png')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnBoarding;
