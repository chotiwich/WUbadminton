/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
import {Component} from 'react';

//Import all required component
import {View, Text, Picker, ImageBackground, Button,TextInput,ScrollView} from 'react-native';

export default class Bookcourt extends Component {
  constructor() {
    super();
    this.state = {selectedLabel: ''};
  }
  Show = (value) => {
    alert(value);
    this.setState({selectedLabel: value});
  };
  Show1 = (value) => {
    alert(value);
    this.setState({selectedLabel1: value});
  };
  render() {
    return (
      
<ImageBackground
        source={require('D:/application/WUbadminton/Image/back07.png')}
        style={{flex: 1, resizeMode: 'cover'}}>
        <ScrollView>
        <View>
          <View style={{
              minHeight: 10,
              minWidth: 10,
              elevation: 50,
              borderRadius: 20,
              backgroundColor: 'white',
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
              วันที่ต้องการจอง  :{' '}
            </Text>
          <TextInput
            placeholder="วันที่จอง ตย. 12/10/2563"
            onChangeText={(text) => this.setState({text})}
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
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                color: '#5e3881',
              }}>
              {' '}
              ช่วงเวลาที่ต้องการจอง :{' '}
            </Text>
            <Picker
              selectedValue={this.state.selectedLabel1}
              onValueChange={this.Show1.bind()}>
              <Picker.Item
                label="กรุณาเลือกช่วงเวลาที่ท่านต้องการ"
                value="กรุณาเลือกช่วงเวลาที่ท่านต้องการ"></Picker.Item>
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
              คอร์ส :{' '}
            </Text>
            <Picker
              selectedValue={this.state.selectedLabel}
              onValueChange={this.Show.bind()}>
              <Picker.Item
                label="กรุณาเลือกคอร์สที่ท่านต้องการจอง"
                value="กรุณาเลือกคอร์สที่ท่านต้องการจอง"></Picker.Item>
              <Picker.Item label="1" value="คอร์ส 1"></Picker.Item>
              <Picker.Item label="2" value="คอร์ส 2"></Picker.Item>
              <Picker.Item label="3" value="คอร์ส 3"></Picker.Item>
              <Picker.Item label="4" value="คอร์ส 4"></Picker.Item>
              <Picker.Item label="5" value="คอร์ส 5"></Picker.Item>
              <Picker.Item label="6" value="คอร์ส 6"></Picker.Item>
              <Picker.Item label="7" value="คอร์ส 7"></Picker.Item>
              <Picker.Item label="8" value="คอร์ส 8"></Picker.Item>
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
          <View
            style={[
              {width: '95%', borderRadius: 30, margin: 10, marginTop: 10},
            ]}>
            <Button
              title="รายการจองสนาม"
              color="#5e3881"
              onPress={() => navigation.navigate('')}
            />
          </View>
        </View>
     

      </ScrollView>
      </ImageBackground>
      
    );
  }
}
