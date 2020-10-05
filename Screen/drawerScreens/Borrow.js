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
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              paddingBottom: 10,
              borderBottomColor: '#5e3881',
              borderBottomWidth: 1,
            }}>
            {' '}
            อุปกรณ์ที่ต้องการยืม :{' '}
          </Text>
          <Picker
            selectedValue={this.state.selectedLabel}
            onValueChange={this.Show.bind()}>
            <Picker.Item label="อุปกรณ์ที่ต้องการยืม" value="0"></Picker.Item>
            <Picker.Item
              label="ไม้แบดมินตัน"
              value="ไม้แบดมินตัน"></Picker.Item>
            <Picker.Item label="ลูกเปตอง" value="ลูกเปตอง"></Picker.Item>
            <Picker.Item label="ลูกแกนเปตอง" value="ลูกแกนเปตอง"></Picker.Item>
          </Picker>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              paddingBottom: 10,
              borderBottomColor: '#5e3881',
              borderBottomWidth: 1,
            }}>
            {' '}
            จำนวน (ชุด) :{' '}
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
          <Button
            title="ตกลง"
            color="#5e3881"
            onPress={() => navigation.navigate('')}
          />
        </View>
      </ImageBackground>
    );
  }
}
