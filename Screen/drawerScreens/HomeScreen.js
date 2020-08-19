/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text } from 'react-native';

import { ImageBackground } from 'react-native';

const HomeScreen = () => {
  global.currentScreenIndex = '>WU Badminton Court';
  return (
    <View style={{ flex: 1, marginTop: 0  }}>
      
      <Text style={{ fontSize: 23, marginTop: 10 ,marginLeft:93,color:'#7d539d' }}>อาคารกีฬาแบดมินตัน</Text>
      <Text style={{ fontSize: 23, marginTop: 5,marginLeft:82,color:'#7d539d'  }}>มหาวิทยาลัยวลัยลักษณ์</Text>
      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#f3a32a' }}>ระเบียบข้อปฏิบัติ</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>1. ต้องแต่งกายด้วยชุดกีฬา และรองเท้ากีฬาเท้านั้น</Text>
      <Text style={{ fontSize: 16, marginTop: 5 ,marginLeft:50 }}>2. ต้องตรวจสอบว่ารองเท้าปราศจากดินทรายก่อนลงใช้สนามทุกครั้ง</Text>
      <Text style={{ fontSize: 16, marginTop: 5 ,marginLeft:50 }}>3. การใช้บริการจองสนามสามารถเข้าใช้ครั้งละ 30 นาทีต่อการจอง 1 รอบ</Text>
      <Text style={{ fontSize: 16, marginTop: 5 ,marginLeft:50 }}>4. เจ้าหน้าที่ของโครงการศูนย์กีฬาและสุขภาพสามารถตักเตือน และตัดสิทธิ์การเข้าใช้บริการได้
หากผู้เข้าใช้บริการไม่ปฏิบัติตามกฎเกณฑ์ที่กำหนด</Text>

      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#f3a32a' }}>อัตราค่าเข้าใช้บริการ</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>1. นักศึกษา , บุคลากร ฟรี </Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>2. สมาชิกรายปี ฟรี </Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>3. บุคลากรภายนอก 120 บาท/สนาม/ชั่วโมง</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>4. บุคลากรภายนอก 40 บาท/คน/ครั้ง </Text>
      
      <Text style={{ fontSize: 20, marginTop: 15 ,marginLeft:15,color: '#f3a32a' }}>เวลาเปิดทำการ</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>วันจันทร์ - วันศุกร์ 15.00 - 21.00 น.</Text>
      <Text style={{ fontSize: 16, marginTop: 10 ,marginLeft:50 }}>หยุดวันเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์</Text>
    </View>
  );
};
export default HomeScreen;
