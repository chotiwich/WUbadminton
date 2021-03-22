
import React, { Component } from 'react';
 
import { ImageBackground,AppRegistry, StyleSheet, TextInput, View, Alert, Button ,Text,ScrollView} from 'react-native';
 
export default class MainProject extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
      TextInputCustomerID:'',
      TextInputCourtName: '',
      TextInputTime: '',
      TextInputDate: ''
 
    }
 
  }
  
  InsertDataToServer = () =>{
    const { TextInputCustomerID }  = this.state ;
    const { TextInputCourtName }  = this.state ;
    const { TextInputTime }  = this.state ;
    const { TextInputDate }  = this.state ;


fetch('http://10.113.3.147/wucourt/booking_court.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    customer_id: TextInputCustomerID,

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

          <ScrollView>
          <View>
      <Text  style={{
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                marginLeft:20,
                color: '#5e3881',
              }}>
           Student id :
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
          onChangeText={TextInputCustomerID => this.setState({TextInputCustomerID})}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        /> 
    </View>   
      </View>

      
    
      <View>
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

      </View>

    <View> 
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

    </View>
    <View>
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
    <View style={{
               backgroundColor: 'white',
               textAlign: 'center',
               minHeight: 5,
               minWidth: 5,
               elevation: 50,
               fontSize: 20,
               marginTop: 15,
               marginLeft: 15,
               marginRight: 15,
               color: '#5e3881',
            }}>
            <Text style={{fontSize:16,color:'#5e3881'}}>Note :</Text>
            <Text style={{marginLeft: 20,}}>1.Example Date : 10/10/2020</Text>
            <Text style={{marginLeft: 20,}}>2.Select Time : 15.30-16.00 , 16.00-16.30 , 16.30-17.00 , 17.00-17.30 , 17.30-18.00 , 18.00-18.30 , 18.30-19.00 , 19.00-19.30 , 19.30-20.00 , 20.00-20.30 , 20.30-21.00</Text>
            <Text style={{marginLeft: 20,}}>3.Select Court : 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8</Text>
    </View>

    <View>
    </View>
      <View style={[
              {width: '95%', borderRadius: 30, margin: 10, marginTop: 20},
            ]}>
      <Button title="Confirm" onPress={this.InsertDataToServer} color="#5e3881" />

      </View>
    </View>
    </ScrollView>
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
