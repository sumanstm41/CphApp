import {View, Text} from 'react-native';
import React, {FC} from 'react';
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
  const contents = React.Children.toArray(children);
  const currentContent = contents[0];
  return (
    <SafeAreaView>
      <Text>{currentContent}</Text>
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
