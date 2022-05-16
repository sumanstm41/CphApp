import {View, Text, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
export interface IUser {
  id: string;
  name: string;
}
const DATA = [
  {
    id: '1',
    name: 'Michael Scott',
  },
  {
    id: '2',
    name: 'Jim Halpert',
  },
  {
    id: '3',
    name: 'Pam Beesly',
  },
  {
    id: '4',
    name: 'Dwight Schrute',
  },
  {
    id: '5',
    name: 'Andy Bernard',
  },
  {
    id: '6',
    name: 'Ryan Howard',
  },
  {
    id: '7',
    name: 'Kelly Kapoor',
  },
  {
    id: '8',
    name: 'Toby Flenderson',
  },
  {
    id: '9',
    name: 'Stanley Hudson',
  },
  {
    id: '10',
    name: 'Phyllis Vance',
  },
];

const Item = ({data}: {data: IUser}) => (
  <View>
    <Text>{data.name}</Text>
  </View>
);

const RnFlatListUser = () => {
  const renderItem: ListRenderItem<IUser> = ({item}) => <Item data={item} />;
  const UsersList = FlatList as new () => FlatList<IUser>;
  return (
    <SafeAreaView>
      <UsersList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: IUser) => item.id}
      />
    </SafeAreaView>
  );
};

export default RnFlatListUser;
