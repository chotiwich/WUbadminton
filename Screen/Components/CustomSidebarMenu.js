/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, StyleSheet, Text, Alert, _ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const CustomSidebarMenu = props => {
  let items = [
    {
      navOptionName: 'หน้าหลัก',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'ข้อมูลผู้ใช้',
      screenToNavigate: 'Profile',
    },
    {
      navOptionName: 'จองสนาม',
      screenToNavigate: 'Bookcourt',
    },
    {
      navOptionName: 'เช็คอิน',
      screenToNavigate: 'Checkin',
    },
    {
      navOptionName: 'ยืมอุปกรณ์',
      screenToNavigate: 'Borrow',
    },
    {
      navOptionName: 'คืนอุปกรณ์',
      screenToNavigate: 'Rebad',
    },
    {
      navOptionName: 'ข้อมูลการแข่งขัน',
      screenToNavigate: 'Schedule',
    },
    {
      navOptionName: 'การตั้งค่า',
      screenToNavigate: 'SettingsScreen',
    },
    {
      navOptionName: 'ออกจากระบบ',
      screenToNavigate: 'logout',
    },
  ];

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == 'logout') {
      props.navigation.toggleDrawer();
      Alert.alert(
        'Logout',
        'Are you sure? You want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return null;
            },
          },
          {
            text: 'Confirm',
            onPress: () => {
              AsyncStorage.clear();
              props.navigation.navigate('Auth');
              console.log('logout');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };
  return (
    <ScrollView>
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{ fontSize: 25, color: '#307ecc' }}>
            {'C'.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>Chotiwich Waradach</Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <View style={{ width: '100%', flex: 1 }}>
        {items.map((item, key) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
              backgroundColor:
                global.currentScreenIndex === item.screenToNavigate
                  ? '#5e3881'
                  : '#5e3881',
            }}
            key={key}
            onStartShouldSetResponder={() =>
              handleClick(key, item.screenToNavigate)
            }>
            <Text style={{ fontSize: 15, color: 'white' }}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
};

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#5e3881',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#5e3881',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
    marginBottom: 10,
  },
});
export default CustomSidebarMenu;