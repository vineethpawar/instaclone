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
import {Box, NativeBaseProvider, Text} from 'native-base';
import {StatusBar} from 'react-native';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <Box flex={1}>
      <Text>HOME</Text>
    </Box>
  );
}

function SettingsScreen() {
  return (
    <Box flex={1}>
      <Text>SETTING</Text>
    </Box>
  );
}

const App = () => {
  useEffect(() => {
    try {
      hideNavigationBar();
    } catch {}
  }, []);

  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              switch (route.name) {
                case 'Home': {
                  iconName = focused ? 'home' : 'home-outline';
                  size = focused ? 25 : 22;
                  break;
                }

                case 'Search': {
                  iconName = focused ? 'search' : 'search';
                  size = focused ? 25 : 22;
                  break;
                }

                case 'Reels': {
                  iconName = focused ? 'film' : 'film-outline';
                  size = focused ? 25 : 22;
                  break;
                }

                case 'Notifications': {
                  iconName = focused ? 'heart' : 'heart-outline';
                  size = focused ? 25 : 22;
                  break;
                }

                case 'Profile': {
                  iconName = focused ? 'person-circle' : 'person-circle-outline';
                  size = focused ? 25 : 22;
                  break;
                }
              }

              // @ts-ignore
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#454542',
            tabBarInactiveTintColor: '#454542',
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SettingsScreen} />
          <Tab.Screen name="Reels" component={SettingsScreen} />
          <Tab.Screen name="Notifications" component={SettingsScreen} />
          <Tab.Screen name="Profile" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
