
import React, { Component } from 'react';
 
import { ImageBackground,AppRegistry, StyleSheet, TextInput, View, Alert, Button ,Text ,ScrollView} from 'react-native';
 
export default class MainProject extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
      TextInputID: '',
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
    const { TextInputID }  = this.state ;
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
    CID: TextInputID,
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
      
      <ScrollView>

      <View>
      <Text  style={{
                fontSize: 20,
                marginTop: 20,
                paddingBottom: 10,
                marginLeft:20,
                color: '#5e3881',
              }}>
           id :
            </Text>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
              
       <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
              color: '#5e3881',
            }}>
        <TextInput
          placeholder="id"
          onChangeText={TextInputID => this.setState({TextInputID})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
       </View>
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
            Full Name :
            </Text>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
              
       <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
              color: '#5e3881',
            }}>
        <TextInput
          placeholder="Enter name"
          onChangeText={TextInputName => this.setState({TextInputName})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
       </View>
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
            Nickname :
            </Text>
       <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
       <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
              color: '#5e3881',
            }}>
        <TextInput
          placeholder="Enter Nickname"
          onChangeText={TextInputNicename => this.setState({TextInputNicename})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
      </View >
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
            Sex :
            </Text>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
              color: '#5e3881',
            }}>
      <TextInput
          placeholder="Enter Sex"
          onChangeText={TextInputSex => this.setState({TextInputSex})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
      </View>
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
            Telephone :
            </Text>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
              color: '#5e3881',
            }}>
      <TextInput
          placeholder="Enter Telephone"
          onChangeText={TextInputTelephone => this.setState({TextInputTelephone})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
      </View>
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
            Job :
            </Text>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
              color: '#5e3881',
            }}>
      <TextInput
          placeholder="Enter Job"
          onChangeText={TextInputProfession => this.setState({TextInputProfession})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
      </View>
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
            Email : 
            </Text>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
              color: '#5e3881',
            }}>
      <TextInput
          placeholder="Enter Email"
          onChangeText={TextInputEmail => this.setState({TextInputEmail})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
      </View>
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
            Password :
            </Text>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginLeft: 15,
              marginRight: 15,
              color: '#5e3881',
            }}>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
              color: '#5e3881',
            }}>
        <TextInput
          placeholder="Enter Password"
          onChangeText={TextInputPassword => this.setState({TextInputPassword})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
      </View>
      </View>
      </View>
     
      <View>
      <View>
      <View style={{
              backgroundColor: 'white',
              textAlign: 'center',
              minHeight: 5,
              minWidth: 5,
              elevation: 50,
              borderRadius: 10,
              fontSize: 20,
              marginLeft: 15,
              marginRight: 15,
              marginTop:15,
              color: '#5e3881',
            }} >
        <Button title="COnfirm" onPress={this.InsertDataToServer} color="#5e3881" />
      </View>
      </View>

      </View>

      </ScrollView>

      
      
      
         
      
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

// Set border Hex Color Code Here.
 borderColor: '#5e3881',
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
AppRegistry.registerComponent('MainProject', () => MainProject);
