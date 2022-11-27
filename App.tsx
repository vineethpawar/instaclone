/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}  />
      <Box flex={1} bg={'blue.400'}>Hello world</Box>
    </NativeBaseProvider>
  );
};
export default App;
