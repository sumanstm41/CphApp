import {View, Text, Button, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

// https://psdev.nu/confluence/display/VAS/____Polymorphic+components+with+Typescript
// Polymorphic components with Typescript
interface IProps {
  children: any;
}
const Page1 = () => <Text>Page 1</Text>;
const Page2 = () => <Text>Page 2</Text>;
const Page3 = () => <Text>Page 3</Text>;

const Wizard: FC<IProps> = ({children}) => {
  const [activeContent, setActiveContent] = useState(0);
  const contents = React.Children.toArray(children);
  const currentContent = contents[activeContent];

  const onPreviousClick = () => {
    setActiveContent(index => index - 1);
  };

  const onNextClick = () => {
    setActiveContent(index => index + 1);
  };

  return (
    <SafeAreaView>
      <Text>{currentContent}</Text>
      <View style={{flexDirection: 'row'}}>
        {activeContent > 0 ? (
          <View style={styles.buttonStyle}>
            <Button title="Previous" onPress={onPreviousClick} />
          </View>
        ) : null}
        {activeContent < contents.length + 1 ? (
          <View style={styles.buttonStyle}>
            <Button title="Next" onPress={onNextClick} />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const RnComponentsHooks = () => {
  return (
    <SafeAreaView>
      <Text>RnComponentsHooks</Text>
      <Wizard>
        <Page1 />
        <Page2 />
        <Page3 />
      </Wizard>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5,
  },
});
export default RnComponentsHooks;
