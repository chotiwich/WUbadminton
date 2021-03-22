/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {View, Text, ImageBackground, Button, ScrollView , Image} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'],
  dayNamesShort: ['Sun.','Mon.','Tues.','Wed.','Thurs.','Fri.','Sat.']
};

LocaleConfig.defaultLocale = 'fr';
const HomeScreen = ({navigation}) => {
  global.currentScreenIndex = '>WU Badminton Court';
  return (
    <ImageBackground
      source={require('D:/application/WUbadminton/Image/back08.png')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
    
    
    
    <View
      style={{
        flex: 1,
        marginTop: 0,
      }}>
      <ScrollView>
      <View style={{
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
          }} >
    <Image source = {{uri:'https://ocd.wu.ac.th/photo/components/com_eventgallery/helpers/image.php?&mode=full&folder=300561001&file=IMG_7395.jpg'}}
   style = {{ width: 365, height: 170 }}
   />
    </View>
        <View style={{
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
        <Calendar 
  // Collection of dates that have to be colored in a special way. Default = {}
   markedDates={
    {'2012-05-20': [{textColor: 'green'}],
     '2012-05-22': [{startingDay: true, color: 'green'}],
     '2012-05-23': [{endingDay: true, color: 'green', textColor: '#5e3881'}],
     '2012-05-04': [{startingDay: true, color: 'green'}, {endingDay: true, color: 'green'}]
    }}
  // Date marking style [simple/interactive]. Default = 'simple'
  markingType={'interactive'}
/>
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
              minWidth: 0,
              elevation: 50,
              borderRadius: 20,
              fontSize: 20,
              marginTop: 15,
              marginLeft: 15,
              color: '#5e3881',
            }}>
            Regulations
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 10,

              elevation: 20,
              marginLeft: 20,
            }}>
            1. Must dress in sportswear And sports shoes that foot.
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}>
           2. Make sure your shoes are free of sand before using the field every time.
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}>
            3. The course reservation service can be used for 30 minutes per time per booking.
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
            }}>
            4. Staff of the Sports and Health Center Project can warn and disqualify access to the service. If the user does not comply with the rules set.
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
            Service fee
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
          1. Student, staff Free{' '}
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
          2. Free annual membership{' '}
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
          3.Outside personnel 120 baht / court / hour
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
          4. External personnel 40 baht / person / time{' '}
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
            Business hours
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
            }}>
            Monday - Friday 3:00 p.m. - 9:00 p.m.
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, marginLeft: 20}}>
          Closed on Saturday - Sunday And public holidays
          </Text>
        </View>

        <View style={[{width: '95%', margin: 10, marginTop: 10}]}>
          <Button
            title="Checkin"
            color="#5e3881"
            onPress={() => navigation.navigate('Checkin')}
          />
        </View>
        <View style={[{width: '95%', marginTop: 5, margin: 10}]}>
          <Button
            title="Book court"
            color="#5e3881"
            onPress={() => navigation.navigate('Bookcourt')}
          />
        </View>
      </ScrollView>
    </View>
     </ImageBackground>
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
