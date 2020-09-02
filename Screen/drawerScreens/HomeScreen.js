/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text,ImageBackground ,Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  global.currentScreenIndex = '>WU Badminton Court';
  return (
    <ImageBackground 
    source={require('D:/application/WUbadminton/Image/back07.png')}

    style={{flex: 1,
      resizeMode: "cover",
      justifyContent: "center"}} 
    >
    <View style={{ flex: 1, marginTop: 0  }}>
      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#5e3881' }}>ระเบียบข้อปฏิบัติ</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>1. ต้องแต่งกายด้วยชุดกีฬา และรองเท้ากีฬาเท้านั้น</Text>
      <Text style={{ fontSize: 16, marginTop: 5 ,marginLeft:50 }}>2. ต้องตรวจสอบว่ารองเท้าปราศจากดินทรายก่อนลงใช้สนามทุกครั้ง</Text>
      <Text style={{ fontSize: 16, marginTop: 5 ,marginLeft:50 }}>3. การใช้บริการจองสนามสามารถเข้าใช้ครั้งละ 30 นาทีต่อการจอง 1 รอบ</Text>
      <Text style={{ fontSize: 16, marginTop: 5 ,marginLeft:50 }}>4. เจ้าหน้าที่ของโครงการศูนย์กีฬาและสุขภาพสามารถตักเตือน และตัดสิทธิ์การเข้าใช้บริการได้
หากผู้เข้าใช้บริการไม่ปฏิบัติตามกฎเกณฑ์ที่กำหนด</Text>

      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#5e3881' }}>อัตราค่าเข้าใช้บริการ</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>1. นักศึกษา , บุคลากร ฟรี </Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>2. สมาชิกรายปี ฟรี </Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>3. บุคลากรภายนอก 120 บาท/สนาม/ชั่วโมง</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>4. บุคลากรภายนอก 40 บาท/คน/ครั้ง </Text>
      
      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#5e3881' }}>เวลาเปิดทำการ</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>วันจันทร์ - วันศุกร์ 15.00 - 21.00 น.</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>หยุดวันเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์</Text>
      <Text style={{ fontSize: 20, marginTop: 20 ,marginLeft:15,color: '#5e3881' }}></Text>
      <Button
            title="เช็คอิน"
            color="#5e3881"
            onPress={() =>navigation.navigate('Checkin')}
          />
      <Text style={{ fontSize: 10, marginTop: 0 ,marginLeft:15,color: '#5e3881' }}></Text>
      <Button
            title="จองสนาม"
            color="#5e3881"
            onPress={() =>navigation.navigate('Bookcourt')}
          />
    </View>
    </ImageBackground>
  );
};
export default HomeScreen;
