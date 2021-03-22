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
    return fetch('http://10.113.3.147/wucourt/show_customer_court_equipment.php')
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
            <Text style={{fontSize: 20, marginTop: 10, marginLeft: 20, color:'#5e3881'}}>
                      Profile :
                    </Text>
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
                    
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Name : {item.CName}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Nickname : {item.CNicename}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Sex : {item.CSex}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Tel : {item.CTelephone}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Job : {item.CProfession}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Email : {item.CEmail}
                    </Text>
                    
                  </View>
                )}
              />
            </View>
            <View>
            <Text style={{fontSize: 20, marginTop: 10, marginLeft: 20,color:'#5e3881'}}>
            Booking / Borrow information :
                    </Text>
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
                    
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Date : {item.court_date}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Time : {item.court_time}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                      Court : {item.court_name}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    Equipment name : {item.equipment_name}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    Equipment num : {item.equipment_num}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    Equipment date : {item.equipment_date}
                    </Text>
                    <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    Equipment time : {item.equipment_time}
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
