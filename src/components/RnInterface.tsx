import {View, Text} from 'react-native';
import React from 'react';
interface IUser {
  firstName: string;
  secondName: string;
}

const User: IUser = {
  firstName: 'Jhon',
  secondName: 'Doe',
};

// Simple interface and data type
const RnInterface = () => {
  return (
    <View>
      <Text>{User.firstName}</Text>
      <Text>{User.secondName}</Text>
    </View>
  );
};

// Multiple interface inheritance and functions
interface IFullName {
  firstName: string;
  lastName: string;
  //   fullProfile: () => string;
}

interface IAge {
  age: number;
}

interface IProfile extends IFullName, IAge {}
const Profile: IProfile = {
  firstName: 'Steven',
  lastName: 'Fray',
  age: 23,
};
const fullProfile = () => {
  return `Mr. ${Profile.lastName} first name is ${Profile.firstName} and he's ${Profile.age} years old`;
};
const RnInterface1 = () => {
  return (
    <View>
      <Text>
        {Profile.firstName} last name is {Profile.lastName} and s/he is{' '}
        {Profile.age} years old
      </Text>
      <Text>{fullProfile()}</Text>
    </View>
  );
};

export default RnInterface1;
