/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
import Checkin from './drawerScreens/Checkin';
import Bookcourt from './drawerScreens/ิBookcourt';
import Borrow from './drawerScreens/Borrow';
import Rebad from './drawerScreens/Rebad';
import Schedule from './drawerScreens/Schedule';
import Profile from './drawerScreens/Profile';
import Graph from './drawerScreens/Graph';
import SettingsScreen from './drawerScreens/SettingsScreen';
import DailySummary from './drawerScreens/DailySummary';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
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
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
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
    navigationOptions: ({navigation}) => ({
      title: 'Checkin',
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
    navigationOptions: ({navigation}) => ({
      title: 'Bookcourt',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const fiveActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Borrow,
    navigationOptions: ({navigation}) => ({
      title: 'Borrow',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const sixActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Rebad,
    navigationOptions: ({navigation}) => ({
      title: 'Receive',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const sevenActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Schedule,
    navigationOptions: ({navigation}) => ({
      title: 'Schedule',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const eightActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const nineActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Graph,
    navigationOptions: ({navigation}) => ({
      title: 'Graph',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5e3881',
      },
      headerTintColor: '#fff',
    }),
  },
});

const tenActivity_StackNavigator = createStackNavigator({
  First: {
    screen: DailySummary,
    navigationOptions: ({navigation}) => ({
      title: 'Daily Summary',
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
    Profile: {
      screen: eightActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Profile',
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
    Borrow: {
      screen: fiveActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Borrow',
      },
    },
    Rebad: {
      screen: sixActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Rebad',
      },
    },
    Schedule: {
      screen: sevenActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Schedule',
      },
    },
    Graph: {
      screen: nineActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Schedule',
      },
    },
    DailySummary: {
      screen: tenActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'DailySummary',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);
export default DrawerNavigatorRoutes;
