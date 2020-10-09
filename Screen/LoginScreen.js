/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hook we needed
// import React, {useState} from 'react';
import React, {Component} from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import Loader from './Components/loader';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_email: '',
      user_password: '',
    };
  }
  UserLoginFunction = () => {
    const {user_email} = this.state;
    const {user_password} = this.state;

    fetch(
      'http://172.20.10.3/WUBadminton/user_login.php?user_email=' +
        user_email +
        '&user_password=' +
        user_password,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        // If server response message same as Data Matched
        if (responseJson === 'Data Matched') {
          //Then open Profile activity and send user email to profile activity.
          this.props.navigation.navigate('DrawerNavigationRoutes');
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <ImageBackground
        source={require('D:/application/WUbadminton/Image/back07.png')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <View style={styles.mainBody}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={{marginTop: 100}}>
              <KeyboardAvoidingView enabled>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../Image/wubadlogo.png')}
                    style={{
                      width: '70%',
                      height: 180,
                      resizeMode: 'contain',
                      margin: 30,
                    }}
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(user_email) => this.setState({user_email})}
                    underlineColorAndroid="#778899"
                    placeholder="Enter Email"
                    placeholderTextColor="#778899"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    blurOnSubmit={false}
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={(user_password) =>
                      this.setState({user_password})
                    }
                    underlineColorAndroid="#778899"
                    placeholder="Enter Password"
                    placeholderTextColor="#778899"
                    keyboardType="default"
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    secureTextEntry={true}
                  />
                </View>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={this.UserLoginFunction}>
                  <Text style={styles.buttonTextStyle}>LOGIN</Text>
                </TouchableOpacity>
                <Text
                  style={styles.registerTextStyle}
                  onPress={() =>
                    this.props.navigation.navigate('RegisterScreen')
                  }>
                  New Here ? Register
                </Text>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
export default LoginScreen;

/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React and Hook we needed
// import React, {useState} from 'react';

// //Import all required component
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   ScrollView,
//   Image,
//   Keyboard,
//   ImageBackground,
//   TouchableOpacity,
//   KeyboardAvoidingView,
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import Loader from './Components/loader';

// const LoginScreen = (props) => {
//   let [user_email, setuser_email] = useState('');
//   let [userPassword, setUserPassword] = useState('');
//   let [loading, setLoading] = useState(false);
//   let [errortext, setErrortext] = useState('');

//   const handleSubmitPress = () => {
//     setErrortext('');
//     if (!user_email) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userPassword) {
//       alert('Please fill Password');
//       return;
//     }
//     setLoading(true);
//     var dataToSend = {user_email: user_email, user_password: userPassword};
//     var formBody = [];
//     for (var key in dataToSend) {
//       var encodedKey = encodeURIComponent(key);
//       var encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');

//     fetch('https://aboutreact.herokuapp.com/login.php', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Hide Loader
//         setLoading(false);
//         console.log(responseJson);
//         // If server response message same as Data Matched
//         if (responseJson.status == 1) {
//           AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
//           console.log(responseJson.data[0].user_id);
//           props.navigation.navigate('DrawerNavigationRoutes');
//         } else {
//           setErrortext('Please check your email id or password');
//           console.log('Please check your email id or password');
//         }
//       })
//       .catch((error) => {
//         //Hide Loader
//         setLoading(false);
//         console.error(error);
//       });
//   };

//   return (
//     <ImageBackground
//       source={require('D:/application/WUbadminton/Image/back07.png')}
//       style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
//       <View style={styles.mainBody}>
//         <Loader loading={loading} />
//         <ScrollView keyboardShouldPersistTaps="handled">
//           <View style={{marginTop: 100}}>
//             <KeyboardAvoidingView enabled>
//               <View style={{alignItems: 'center'}}>
//                 <Image
//                   source={require('../Image/wubadlogo.png')}
//                   style={{
//                     width: 200,
//                     height: 200,
//                     resizeMode: 'contain',
//                     margin: 50,
//                   }}
//                 />
//               </View>
//               <View style={styles.SectionStyle}>
//                 <TextInput
//                   style={styles.inputStyle}
//                   onChangeText={(user_email) => setuser_email(user_email)}
//                   placeholder="Username" //dummy@abc.com
//                   placeholderTextColor="#5e3881"
//                   autoCapitalize="none"
//                   keyboardType="email-address"
//                   ref={(ref) => {
//                     this._emailinput = ref;
//                   }}
//                   returnKeyType="next"
//                   onSubmitEditing={() =>
//                     this._passwordinput && this._passwordinput.focus()
//                   }
//                   blurOnSubmit={false}
//                 />
//               </View>
//               <View style={styles.SectionStyle}>
//                 <TextInput
//                   style={styles.inputStyle}
//                   onChangeText={(UserPassword) => setUserPassword(UserPassword)}
//                   placeholder="Password" //12345
//                   placeholderTextColor="#5e3881"
//                   keyboardType="default"
//                   ref={(ref) => {
//                     this._passwordinput = ref;
//                   }}
//                   onSubmitEditing={Keyboard.dismiss}
//                   blurOnSubmit={false}
//                   secureTextEntry={true}
//                 />
//               </View>
//               {errortext != '' ? (
//                 <Text style={styles.errorTextStyle}> {errortext} </Text>
//               ) : null}
//               <TouchableOpacity
//                 style={styles.buttonStyle}
//                 activeOpacity={0.5}
//                 onPress={handleSubmitPress}>
//                 <Text style={styles.buttonTextStyle}>LOGIN</Text>
//               </TouchableOpacity>
//               <Text
//                 style={styles.registerTextStyle}
//                 onPress={() => props.navigation.navigate('RegisterScreen')}>
//                 New Here ? Register
//               </Text>
//             </KeyboardAvoidingView>
//           </View>
//         </ScrollView>
//       </View>
//     </ImageBackground>
//   );
// };
// export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#5e3881',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#ffffff',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#5e3881',
  },
  registerTextStyle: {
    color: '#5e3881',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
  },
});
