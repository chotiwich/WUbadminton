import React, {Component} from 'react';

import {StyleSheet, View, TextInput, Button, Text, Alert} from 'react-native';

export default class Rebad extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      type: '',
      num: '',
    };
  }

  UserRegistrationFunction = () => {
    fetch('http://172.16.240.112/WUBadminton/insert_borrow.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        people_name: this.state.people_name,

        type_borrow: this.state.type_borrow,

        num_borrow: this.state.num_borrow,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.title}>User Registration Form</Text>

        <TextInput
          placeholder="Enter User Name"
          onChangeText={(people_name) =>
            this.setState({people_name: people_name})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter User Email"
          onChangeText={(type_borrow) =>
            this.setState({type_borrow: type_borrow})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter User Password"
          onChangeText={(num_borrow) => this.setState({num_borrow: num_borrow})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <Button
          title="Click Here To Register"
          onPress={this.UserRegistrationFunction}
          color="#2196F3"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
  },

  title: {
    fontSize: 22,
    color: '#009688',
    textAlign: 'center',
    marginBottom: 15,
  },
});
// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// import React from 'react';
// import {Component} from 'react';

// //Import all required component
// import {View, Text, Picker, ImageBackground, Button} from 'react-native';

// export default class Rebad extends Component {
//   constructor() {
//     super();
//     this.state = {selectedLabel: ''};
//   }
//   Show = (value) => {
//     alert(value);
//     this.setState({selectedLabel: value});
//   };
//   render() {
//     return (
//       <ImageBackground
//         source={require('D:/application/WUbadminton/Image/back07.png')}
//         style={{flex: 1, resizeMode: 'cover'}}>
//         <View>
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
//               อุปกรณ์ที่ต้องการคืน :{' '}
//             </Text>
//             <Picker
//               selectedValue={this.state.selectedLabel}
//               onValueChange={this.Show.bind()}>
//               <Picker.Item
//                 label="กรุณาเลือกอุปกรณ์ที่ต้องการคืน"
//                 value="กรุณาเลือกอุปกรณ์ที่ต้องการคืน"></Picker.Item>
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
//               จำนวนที่ต้องการคืน (ชุด) :{' '}
//             </Text>
//             <Picker
//               selectedValue={this.state.selectedLabel}
//               onValueChange={this.Show.bind()}>
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
