/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
import Checkin from './drawerScreens/Checkin';
import Bookcourt from './drawerScreens/ิBookcourt';
import SettingsScreen from './drawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'WU Badminton Court',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'การตั้งค่า',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const thirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Checkin,
    navigationOptions: ({ navigation }) => ({
      title: 'การเช็คอิน',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const fourActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Bookcourt,
    navigationOptions: ({ navigation }) => ({
      title: 'จองสนาม',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    Bookcourt: {
      screen: fourActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Bookcourt',
      },
    },
    SettingsScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Setting Screen',
      },
    },
    Checkin: {
      screen: thirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Checkin',
      },
    },

  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default DrawerNavigatorRoutes;