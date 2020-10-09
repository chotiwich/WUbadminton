/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {View, Text, ImageBackground, Button, ScrollView} from 'react-native';

const HomeScreen = ({navigation}) => {
  global.currentScreenIndex = '>WU Badminton Court';
  return (
    // <ImageBackground
    //   source={require('D:/application/WUbadminton/Image/back07.png')}
    //   style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
    <View
      style={{
        flex: 1,
        marginTop: 0,
      }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            minHeight: 10,
            minWidth: 10,
            elevation: 50,
            borderRadius: 20,
            fontSize: 20,
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            color: '#5e3881',
          }}>
          <Text
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 10,
              minWidth: 0,
              elevation: 50,
              borderRadius: 20,
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              color: '#5e3881',
            }}>
            ระเบียบข้อปฏิบัติ
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 10,

              elevation: 20,
              marginLeft: 20,
            }}>
            1. ต้องแต่งกายด้วยชุดกีฬา และรองเท้ากีฬาเท้านั้น
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}>
            2. ต้องตรวจสอบว่ารองเท้าปราศจากดินทรายก่อนลงใช้สนามทุกครั้ง
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}>
            3. การใช้บริการจองสนามสามารถเข้าใช้ครั้งละ 30 นาทีต่อการจอง 1 รอบ
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}>
            4. เจ้าหน้าที่ของโครงการศูนย์กีฬาและสุขภาพสามารถตักเตือน
            และตัดสิทธิ์การเข้าใช้บริการได้
            หากผู้เข้าใช้บริการไม่ปฏิบัติตามกฎเกณฑ์ที่กำหนด
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            minHeight: 10,
            minWidth: 10,
            elevation: 50,
            borderRadius: 20,
            fontSize: 20,
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            color: '#5e3881',
          }}>
          <Text
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 10,
              minWidth: 50,
              elevation: 50,
              borderRadius: 20,
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              color: '#5e3881',
            }}>
            อัตราค่าเข้าใช้บริการ
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
            1. นักศึกษา , บุคลากร ฟรี{' '}
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
            2. สมาชิกรายปี ฟรี{' '}
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
            3. บุคลากรภายนอก 120 บาท/สนาม/ชั่วโมง
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
            4. บุคลากรภายนอก 40 บาท/คน/ครั้ง{' '}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            minHeight: 10,
            minWidth: 10,
            elevation: 50,
            borderRadius: 20,
            fontSize: 20,
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            color: '#5e3881',
          }}>
          <Text
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 10,
              minWidth: 50,
              elevation: 50,
              borderRadius: 20,
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              color: '#5e3881',
            }}>
            เวลาเปิดทำการ
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
            }}>
            วันจันทร์ - วันศุกร์ 15.00 - 21.00 น.
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
            หยุดวันเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์
          </Text>
        </View>

        <View style={[{width: '95%', margin: 10, marginTop: 5}]}>
          <Button
            title="เช็คอิน"
            color="#5e3881"
            onPress={() => navigation.navigate('Checkin')}
          />
        </View>
        <View style={[{width: '95%', marginTop: 5, margin: 10}]}>
          <Button
            title="จองสนาม"
            color="#5e3881"
            onPress={() => navigation.navigate('Bookcourt')}
          />
        </View>
      </ScrollView>
    </View>
    // </ImageBackground>
  );
};
export default HomeScreen;

// backgroundColor: '#5e3881',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 20,
