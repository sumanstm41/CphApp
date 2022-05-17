import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Autocomplete from 'react-native-autocomplete-input';

const NewsSearch = () => {
  const [MainJSON, setMainJSON] = useState([]);
  const [FilterData, setFilterData] = useState([]);
  const [selectedItem, setselectedItem] = useState({});

  useEffect(() => {
    // async () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(res => res.json())
      .then(json => {
        setMainJSON(json);
      })
      .catch(e => {
        alert(e);
      });
    // };
  }, []);

  const SearchDataFromJSON = query => {
    if (query) {
      console.log(query);
      //Making the Search as Case Insensitive.
      const regex = new RegExp(`${query.trim()}`, 'i');
      // setFilterData(MainJSON.filter(data => data.title.search(regex) >= 0));
      setFilterData(MainJSON.filter(item => item.title.search(regex) >= 0));
    } else {
      setFilterData([]);
    }
  };
  console.log(MainJSON.map(item => item.id));
  return (
    <View style={styles.MainContainer}>
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.AutocompleteStyle}
        data={FilterData}
        // defaultValue={
        //   JSON.stringify(selectedItem) === '{}' ? '' : selectedItem.title
        // }
        keyExtractor={(item, i) => i.toString()}
        onChangeText={text => SearchDataFromJSON(text)}
        placeholder="Type The Search Keyword..."
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setselectedItem(item);
              setFilterData([]);
            }}>
            <Text style={styles.SearchBoxTextItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.selectedTextContainer}>
        {
          <Text style={styles.selectedTextStyle}>
            {JSON.stringify(selectedItem)}
          </Text>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    padding: 12,
  },
  AutocompleteStyle: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    borderWidth: 1,
  },
  SearchBoxTextItem: {
    margin: 5,
    fontSize: 16,
    paddingTop: 4,
  },
  selectedTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  selectedTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
export default NewsSearch;
