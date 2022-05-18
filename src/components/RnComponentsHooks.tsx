import {View, Text, Button} from 'react-native';
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
      {activeContent > 0 ? (
        <Button title="Previous" onPress={onPreviousClick}>
          Previous
        </Button>
      ) : null}
      {activeContent < contents.length + 1 ? (
        <Button title="Next" onPress={onNextClick}>
          Next
        </Button>
      ) : null}
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

export default RnComponentsHooks;
