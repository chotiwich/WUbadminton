/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text,ImageBackground,Button } from 'react-native';

const Profile = ({navigation}) => {
  global.currentScreenIndex = '>WU Badminton Court';
  return (
    <ImageBackground 
    source={require('F:/application/WUbadminton/Image/back07.png')}
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
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>รหัสผ่าน     1212312121</Text>
      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#5e3881' }}>ข้อมูลการจอง</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>20/08/2563     15.30 - 16.00 น.  COURT 1</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>20/08/2563     16.30 - 17.00 น.  COURT 3</Text>
      <Text style={{ fontSize: 16, marginTop: 5 ,marginLeft:50 }}></Text>
      <Button
            title="แก้ไขข้อมูล"
            color="#5e3881"
            onPress={() =>navigation.navigate('')}
          />
    </View>
    </ImageBackground>
  );
};
export default Profile;
