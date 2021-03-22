import React, { Component } from 'react';
 
import { ImageBackground,AppRegistry, StyleSheet, TextInput, View, Alert, Button ,Text ,ScrollView } from 'react-native';
 
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


fetch('http://10.113.3.147/wucourt/update_equipment.php', {
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
    
    <ScrollView>
    <View>
    <Text  style={{
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                marginLeft:20,
                color: '#5e3881',
              }}>
            Student ID :
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
          placeholder="Student ID "
          onChangeText={TextInputcustomerID => this.setState({TextInputcustomerID})}
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
            Equipment Name :
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
       placeholder="Equipment Name"
        onChangeText={TextInputName => this.setState({TextInputName})}
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
            Count :
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
          placeholder="Count"
          onChangeText={TextInputNum => this.setState({TextInputNum})}
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
          placeholder="Time"
          onChangeText={TextInputTime => this.setState({TextInputTime})}
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
            Date :
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
          placeholder="Date"
          onChangeText={TextInputTeleDate => this.setState({TextInputTeleDate})}
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

    </ScrollView>

      
      </ImageBackground>    
    );
    
  }
  
}
const styles = StyleSheet.create({
 




TextInputStyleClass: {

  fontSize: 20,
  marginTop: 10,
  paddingBottom: 10,
  color: '#5e3881',
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
AppRegistry.registerComponent('MainProject', () => MainProject);
