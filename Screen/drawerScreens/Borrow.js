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
