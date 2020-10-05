/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
import {Component} from 'react';

//Import all required component
import {View, Text, Picker, ImageBackground, Button} from 'react-native';

export default class Bookcourt extends Component {
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
            ช่วงเวลาที่ต้องการจอง :{' '}
          </Text>
          <Picker
            selectedValue={this.state.selectedLabel}
            onValueChange={this.Show.bind()}>
            <Picker.Item
              label="15.30 - 16.00 น."
              value="15.30 - 16.00 น."></Picker.Item>
            <Picker.Item
              label="16.00 - 16.30 น."
              value="16.00 - 16.30 น."></Picker.Item>
            <Picker.Item
              label="16.30 - 17.00 น."
              value="16.30 - 17.00 น."></Picker.Item>
            <Picker.Item
              label="17.00 - 17.30 น."
              value="17.00 - 17.30 น."></Picker.Item>
            <Picker.Item
              label="17.30 - 18.00 น."
              value="17.30 - 18.00 น."></Picker.Item>
            <Picker.Item
              label="18.00 - 18.30 น."
              value="18.00 - 18.30 น."></Picker.Item>
            <Picker.Item
              label="18.30 - 19.00 น."
              value="18.30 - 19.00 น."></Picker.Item>
            <Picker.Item
              label="19.00 - 19.30 น."
              value="19.00 - 19.30 น."></Picker.Item>
            <Picker.Item
              label="19.30 - 20.00 น."
              value="19.30 - 20.00 น."></Picker.Item>
            <Picker.Item
              label="20.00 - 20.30 น."
              value="20.00 - 20.30 น."></Picker.Item>
            <Picker.Item
              label="20.30 - 21.00 น."
              value="20.30 - 21.00 น."></Picker.Item>
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
            คอร์ส :{' '}
          </Text>
          <Picker
            selectedValue={this.state.selectedLabel}
            onValueChange={this.Show.bind()}>
            <Picker.Item label="1" value="คอร์ส 1"></Picker.Item>
            <Picker.Item label="2" value="คอร์ส 2"></Picker.Item>
            <Picker.Item label="3" value="คอร์ส 3"></Picker.Item>
            <Picker.Item label="4" value="คอร์ส 4"></Picker.Item>
            <Picker.Item label="5" value="คอร์ส 5"></Picker.Item>
            <Picker.Item label="6" value="คอร์ส 6"></Picker.Item>
            <Picker.Item label="7" value="คอร์ส 7"></Picker.Item>
            <Picker.Item label="8" value="คอร์ส 8"></Picker.Item>
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
