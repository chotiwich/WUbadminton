
import React, { Component } from 'react';
 
import { ImageBackground,AppRegistry, StyleSheet, TextInput, View, Alert, Button ,Text} from 'react-native';
 
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


fetch('http://172.20.10.5/wucourt/booking_court.php', {
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
    
      <View>
      <Text  style={{
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                marginLeft:20,
                color: '#5e3881',
              }}>
            Date:
            </Text> 
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginTop: 5,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
          <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter date"
          onChangeText={TextInputDate => this.setState({TextInputDate})}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        /> 
    </View>   
      </View>
     
     <View>
     <Text  style={{
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                marginLeft:20,
                color: '#5e3881',
              }}>
            Time :
            </Text> 
     <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginTop: 5,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter time"
 
          onChangeText={TextInputTime => this.setState({TextInputTime})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
      </View>

     </View>

     <View>
     <Text  style={{
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                marginLeft:20,
                color: '#5e3881',
              }}>
            Court :
            </Text> 
     <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginTop: 5,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
<TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Court"
 
          onChangeText={TextInputCourtName => this.setState({TextInputCourtName})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

      </View>

     </View>
      <View style={[
              {width: '95%', borderRadius: 30, margin: 10, marginTop: 20},
            ]}>
      <Button title="Confirm" onPress={this.InsertDataToServer} color="#5e3881" />

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

  fontSize: 20,
  marginTop: 20,
  paddingBottom: 10,
  color: '#5e3881',
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
AppRegistry.registerComponent('MainProject', () => MainProject);
