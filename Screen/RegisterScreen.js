
import React, { Component } from 'react';
 
import { ImageBackground,AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';
 
export default class MainProject extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
      
      TextInputName: '',
      TextInputNicename: '',
      TextInputSex: '',
      TextInputTelephone: '',
      TextInputEmail: '',
      TextInputProfession: '',
      TextInputPassword: ''
    }
 
  }
  
  InsertDataToServer = () =>{
    const { TextInputName }  = this.state ;
    const { TextInputNicename }  = this.state ;
    const { TextInputSex }  = this.state ;
    const { TextInputTelephone }  = this.state ;
    const { TextInputProfession }  = this.state ;
    const { TextInputEmail }  = this.state ;
    const { TextInputPassword }  = this.state ;



fetch('http://172.20.10.5/wucourt/Register.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    
    CName: TextInputName,
    CNicename: TextInputNicename,
    CSex: TextInputSex,
    CTelephone: TextInputTelephone,
    CProfession: TextInputProfession,
    CEmail: TextInputEmail,
    CPassword: TextInputPassword,

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
       placeholder="Enter name"
        onChangeText={TextInputName => this.setState({TextInputName})}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter Nicename"
          onChangeText={TextInputNicename => this.setState({TextInputNicename})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter Sex"
          onChangeText={TextInputSex => this.setState({TextInputSex})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Enter Telephone"
          onChangeText={TextInputTelephone => this.setState({TextInputTelephone})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Enter Profession"
          onChangeText={TextInputProfession => this.setState({TextInputProfession})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={TextInputEmail => this.setState({TextInputEmail})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Enter Password"
          onChangeText={TextInputPassword => this.setState({TextInputPassword})}
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
