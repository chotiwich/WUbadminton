
import React, { Component } from 'react';
 
import { ImageBackground,AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';
 
export default class MainProject extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
      
      TextInputCourtName: '',
      TextInputTime: '',
      TextInputDate: ''
 
    }
 
  }
  
  InsertDataToServer = () =>{
    const { TextInputCourtName }  = this.state ;
    const { TextInputTime }  = this.state ;
    const { TextInputDate }  = this.state ;


fetch('http://192.168.43.210/wucourt/booking_court.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  
    court_name: TextInputCourtName,

    court_time: TextInputTime,

    court_date: TextInputDate

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
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Court"
 
          onChangeText={TextInputCourtName => this.setState({TextInputCourtName})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter time"
 
          onChangeText={TextInputTime => this.setState({TextInputTime})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Date"
 
          onChangeText={TextInputDate => this.setState({TextInputDate})}

          // Making the Under line Transparent.
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
