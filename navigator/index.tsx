/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';




const Navigator = () => {
    const Tab = createBottomTabNavigator();

    const Screens = {
        Home: HomeScreen,
        Search: HomeScreen,
        Reels: HomeScreen,
        Notifications: HomeScreen,
        Profile: HomeScreen,
    };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerTintColor: '#454542',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home': {
                iconName = focused ? 'home' : 'home-outline';
                size = focused ? 25 : 21;
                break;
              }

              case 'Search': {
                iconName = focused ? 'search' : 'search';
                size = focused ? 26 : 22;
                break;
              }

              case 'Reels': {
                iconName = focused ? 'film' : 'film-outline';
                size = focused ? 27 : 24;
                break;
              }

              case 'Notifications': {
                iconName = focused ? 'heart' : 'heart-outline';
                size = focused ? 27 : 23;
                break;
              }

              case 'Profile': {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
                size = focused ? 29 : 25;
                break;
              }
            }
            // @ts-ignore
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#454542',
          tabBarInactiveTintColor: '#454542',
        })}>
        <Tab.Screen
          options={{
            headerTitle: 'Instagram',
          }}
          name="Home"
          component={Screens?.Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Search"
          component={Screens?.Search}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Reels"
          component={Screens?.Reels}
        />
        <Tab.Screen name="Notifications" component={Screens?.Notifications} />
        <Tab.Screen
          options={{
            headerTitle: 'vineeth_pawar_01',
          }}
          name="Profile"
          component={Screens?.Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
