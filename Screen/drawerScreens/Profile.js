/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text,ImageBackground } from 'react-native';

const Profile = () => {
  global.currentScreenIndex = '>WU Badminton Court';
  return (
    <ImageBackground 
    source={require('D:/application/WUbadminton/Image/back01.jpg')}
    style={{flex: 1,
      resizeMode: "cover",
      justifyContent: "center"}} 
    >
    <View style={{ flex: 1, marginTop: 0  }}>
      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#5e3881' }}>ข้อมูลของฉัน</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>ชื่อ - สกุล   โชติวิชช์  วรเดช</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>ชื่อเล่น        ปืน</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>เพศ            M</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>เบอร์โทร     0969423557</Text>
      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#5e3881' }}>ข้อมูลหน่วยงาน</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>อาชีพ         นักศึกษา</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>E-mail        chotiwich6793@gmail.com</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>รหัสผ่าน     1849901391378</Text>
      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#5e3881' }}>ข้อมูลการจอง</Text>
    </View>
    </ImageBackground>
  );
};
export default Profile;
