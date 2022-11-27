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
import React, {useEffect} from 'react';
import { NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import Navigator from './navigator';




const App = () => {
  useEffect(() => {
    try {
      hideNavigationBar();
    } catch {}
  }, []);



  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Navigator />
    </NativeBaseProvider>
  );
};
export default App;
