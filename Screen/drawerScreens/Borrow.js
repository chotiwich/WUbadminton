// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// import React from 'react';
// import {Component} from 'react';

// //Import all required component
// import {
//   View,
//   Text,
//   Picker,
//   ImageBackground,
//   Button,
//   TextInput,
// } from 'react-native';

// export default class Borrow extends Component {
//   constructor() {
//     super();
//     this.state = {selectedLabel: ''};
//     this.state = {text: ''};
//   }
//   Show = (value) => {
//     alert(value);
//     this.setState({selectedLabel: value});
//   };
//   Show1 = (value) => {
//     alert(value);
//     this.setState({selectedLabel1: value});
//   };

//   render() {
//     return (
//       <ImageBackground
//         source={require('D:/application/WUbadminton/Image/back07.png')}
//         style={{flex: 1, resizeMode: 'cover'}}>
//         <View>
//           <Text
//             style={{
//               minHeight: 10,
//               minWidth: 10,
//               elevation: 50,
//               borderRadius: 20,
//               fontSize: 20,
//               marginTop: 15,
//               marginLeft: 15,
//               marginRight: 15,
//               color: '#5e3881',
//             }}>
//             ชื่อผู้ใช้ :
//           </Text>
//           <TextInput
//             style={{
//               minHeight: 10,
//               minWidth: 10,
//               elevation: 50,
//               borderRadius: 20,
//               backgroundColor: 'white',
//               fontSize: 20,
//               marginTop: 15,
//               marginLeft: 15,
//               marginRight: 15,
//               color: '#5e3881',
//             }}
//             placeholder="เวลาที่ยืม"
//             onChangeText={(text) => this.setState({text})}
//           />
//           <View
//             style={{
//               backgroundColor: 'white',
//               textAlign: 'center',
//               minHeight: 10,
//               minWidth: 10,
//               elevation: 50,
//               borderRadius: 20,
//               fontSize: 20,
//               marginTop: 15,
//               marginLeft: 15,
//               marginRight: 15,
//               color: '#5e3881',
//             }}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 marginTop: 20,
//                 paddingBottom: 10,
//                 color: '#5e3881',
//               }}>
//               {' '}
//               อุปกรณ์ที่ต้องการยืม :{' '}
//             </Text>
//             <Picker
//               selectedValue={this.state.selectedLabel}
//               onValueChange={this.Show.bind()}>
//               <Picker.Item
//                 label="กรุณาเลือกอุปกรณ์ที่ต้องการยืม"
//                 value="กรุณาเลือกอุปกรณ์ที่ต้องการยืม"></Picker.Item>
//               <Picker.Item
//                 label="ไม้แบดมินตัน"
//                 value="ไม้แบดมินตัน"></Picker.Item>
//               <Picker.Item label="ลูกเปตอง" value="ลูกเปตอง"></Picker.Item>
//               <Picker.Item
//                 label="ลูกแกนเปตอง"
//                 value="ลูกแกนเปตอง"></Picker.Item>
//             </Picker>
//           </View>

//           <View
//             style={{
//               backgroundColor: 'white',
//               textAlign: 'center',
//               minHeight: 10,
//               minWidth: 10,
//               elevation: 50,
//               borderRadius: 20,
//               fontSize: 20,
//               marginTop: 15,
//               marginLeft: 15,
//               marginRight: 15,
//               color: '#5e3881',
//             }}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 marginTop: 20,
//                 paddingBottom: 10,
//                 color: '#5e3881',
//               }}>
//               {' '}
//               จำนวนที่ยืม (ชุด) :{' '}
//             </Text>
//             <Picker
//               selectedValue={this.state.selectedLabel1}
//               onValueChange={this.Show1.bind()}>
//               <Picker.Item label="1" value="1 ชุด"></Picker.Item>
//               <Picker.Item label="2" value="2 ชุด"></Picker.Item>
//               <Picker.Item label="3" value="3 ชุด"></Picker.Item>
//               <Picker.Item label="4" value="4 ชุด"></Picker.Item>
//               <Picker.Item label="5" value="5 ชุด"></Picker.Item>
//               <Picker.Item label="6" value="6 ชุด"></Picker.Item>
//             </Picker>
//           </View>

//           <View
//             style={[
//               {width: '95%', borderRadius: 30, margin: 10, marginTop: 20},
//             ]}>
//             <Button
//               title="ตกลง"
//               color="#5e3881"
//               onPress={() => navigation.navigate('')}
//             />
//           </View>
          
//         </View>
//       </ImageBackground>
//     );
//   }
// }


import React, { Component } from 'react';
 
import { ImageBackground,AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';
 
export default class MainProject extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
      
      TextInputName: '',
      TextInputNum: '',
      TextInputTime: '',
      TextInputTeleDate: '',
      TextInputEmail: '',
      TextInputcustomerID: '',
      TextInputPassword: ''
    }
 
  }
  
  InsertDataToServer = () =>{
    const { TextInputName }  = this.state ;
    const { TextInputNum }  = this.state ;
    const { TextInputTime }  = this.state ;
    const { TextInputTeleDate }  = this.state ;
    const { TextInputcustomerID }  = this.state ;


fetch('http://172.20.10.5/wucourt/borrow_equipment.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    
    equipment_name: TextInputName,
    equipment_num: TextInputNum,
    equipment_time: TextInputTime,
    equipment_date: TextInputTeleDate,
    customer_id: TextInputcustomerID,
   
  })

}).then((response) => response.json())
      .then((responseJson) => {

// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  render() {
    
    return (
      <ImageBackground
      source={require('D:/application/WUbadminton/Image/back07.png')}
      style={{flex: 1, resizeMode: 'cover'}}>
    <View style={styles.MainContainer}>
    <TextInput
          placeholder="id"
          onChangeText={TextInputcustomerID => this.setState({TextInputcustomerID})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
       
      <TextInput
       placeholder="equipment name"
        onChangeText={TextInputName => this.setState({TextInputName})}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="count"
          onChangeText={TextInputNum => this.setState({TextInputNum})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="time"
          onChangeText={TextInputTime => this.setState({TextInputTime})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="date"
          onChangeText={TextInputTeleDate => this.setState({TextInputTeleDate})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        
        
        <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />
       
      </View>
      </ImageBackground>    
    );
    
  }
  
}
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#FF5722',
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
AppRegistry.registerComponent('MainProject', () => MainProject);
