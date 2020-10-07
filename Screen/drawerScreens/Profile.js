import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  ImageBackground,
} from 'react-native';
// import Gallery from 'react-native-image-gallery';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('http://172.16.240.112/wucourt/FlowersList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }

  render() {
    return (
      <ImageBackground
        source={require('D:/application/WUbadminton/Image/back07.png')}
        style={{flex: 1, resizeMode: 'cover'}}>
        <View>
          <ScrollView>
            <View>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: 'white',
                      textAlign: 'center',
                      minHeight: 10,
                      minWidth: 10,
                      elevation: 50,
                      borderRadius: 10,
                      fontSize: 20,
                      marginTop: 15,
                      marginLeft: 10,
                      marginRight: 10,
                      color: '#5e3881',
                    }}>
                    <Text style={{fontSize: 25, marginTop: 10, marginLeft: 50}}>
                      ข้อมูลผู้ใช้
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      ชื่อผู้ใช้ : {item.CName}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      ชื่อเล่น : {item.CNicename}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      เพศ: {item.CSex}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      เบอร์โทร: {item.CTelephone}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      เบอร์โทร : {item.CEmail}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      อาชีพ : {item.CProfession}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: 'white',
                      textAlign: 'center',
                      minHeight: 10,
                      minWidth: 10,
                      elevation: 50,
                      borderRadius: 10,
                      fontSize: 20,
                      marginTop: 15,
                      marginLeft: 10,
                      marginRight: 10,
                      color: '#5e3881',
                    }}>
                    <Text style={{fontSize: 25, marginTop: 10, marginLeft: 50}}>
                      ข้อมูลการจอง
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      เวลาที่จอง : {item.CTime}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      คอร์ด : {item.CCourt}
                    </Text>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
