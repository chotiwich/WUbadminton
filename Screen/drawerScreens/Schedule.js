/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Slide} from 'react-slideshow-image';

const Schedule = ({navigation}) => {
  global.currentScreenIndex = 'Schedule';

  return (
    <ImageBackground
      source={require('D:/application/WUbadminton/Image/back07.png')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.logo}
            source={require('D:/application/WUbadminton/Image/poster01.jpg')}
          />
          <Button
            style={styles.buttonStyle}
            title="Go to Details"
            onPress={() => navigation.navigate('Schedule')}
          />
          <Image
            style={styles.logo}
            source={require('D:/application/WUbadminton/Image/poster02.jpg')}
          />
          <Button
            style={styles.buttonStyle}
            title="Go to Details"
            onPress={() => navigation.navigate('Schedule')}
          />
          <Image
            style={styles.logo}
            source={require('D:/application/WUbadminton/Image/poster03.jpg')}
          />
          <Button
            style={styles.buttonStyle}
            title="Go to Details"
            onPress={() => navigation.navigate('Schedule')}
          />
          <Image
            style={styles.logo}
            source={require('D:/application/WUbadminton/Image/poster04.jpg')}
          />
          <Button
            style={styles.buttonStyle}
            title="Go to Details"
            onPress={() => navigation.navigate('Schedule')}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default Schedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 350,
    height: 500,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle: {
   
      backgroundColor: 'white',
      textAlign: 'center',
      minHeight: 5,
      minWidth: 5,
      elevation: 50,
      borderRadius: 10,
      fontSize: 20,
      marginTop: 5,
      marginLeft: 15,
      marginRight: 15,
      color: '#5e3881',
    
  },
});
