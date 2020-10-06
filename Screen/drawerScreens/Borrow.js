/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
import {Component} from 'react';

//Import all required component
import {View, Text, Picker, ImageBackground, Button} from 'react-native';

export default class Borrow extends Component {
  constructor() {
    super();
    this.state = {selectedLabel: ''};
  }
  Show = (value) => {
    alert(value);
    this.setState({selectedLabel: value});
  };
  render() {
    return (
      <ImageBackground
        source={require('D:/application/WUbadminton/Image/back07.png')}
        style={{flex: 1, resizeMode: 'cover'}}>
        <View>
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
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                color: '#5e3881',
              }}>
              {' '}
              อุปกรณ์ที่ต้องการยืม :{' '}
            </Text>
            <Picker
              selectedValue={this.state.selectedLabel}
              onValueChange={this.Show.bind()}>
              <Picker.Item
                label="กรุณาเลือกอุปกรณ์ที่ต้องการยืม"
                value="กรุณาเลือกอุปกรณ์ที่ต้องการยืม"></Picker.Item>
              <Picker.Item
                label="ไม้แบดมินตัน"
                value="ไม้แบดมินตัน"></Picker.Item>
              <Picker.Item label="ลูกเปตอง" value="ลูกเปตอง"></Picker.Item>
              <Picker.Item
                label="ลูกแกนเปตอง"
                value="ลูกแกนเปตอง"></Picker.Item>
            </Picker>
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
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                color: '#5e3881',
              }}>
              {' '}
              จำนวนที่ยืม (ชุด) :{' '}
            </Text>
            <Picker
              selectedValue={this.state.selectedLabel}
              onValueChange={this.Show.bind()}>
              <Picker.Item label="1" value="1 ชุด"></Picker.Item>
              <Picker.Item label="2" value="2 ชุด"></Picker.Item>
              <Picker.Item label="3" value="3 ชุด"></Picker.Item>
              <Picker.Item label="4" value="4 ชุด"></Picker.Item>
              <Picker.Item label="5" value="5 ชุด"></Picker.Item>
              <Picker.Item label="6" value="6 ชุด"></Picker.Item>
            </Picker>
          </View>

          <View
            style={[
              {width: '95%', borderRadius: 30, margin: 10, marginTop: 20},
            ]}>
            <Button
              title="ตกลง"
              color="#5e3881"
              onPress={() => navigation.navigate('')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
