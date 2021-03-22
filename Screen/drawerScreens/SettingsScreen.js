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
    return fetch('http://10.113.3.147/WUBadminton/BorrowList.php')
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
                  <Text style={{fontSize: 16, marginTop: 10, marginLeft: 10}}>
                    ลำดับที่ : {item.id}
                  </Text>
                  <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    ชื่อผู้ยืม : {item.people_name}
                  </Text>
                  <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    อุปกรณ์ที่ยืม : {item.type_borrow}
                  </Text>
                  <Text style={{fontSize: 16, marginTop: 10, marginLeft: 50}}>
                    จำนวน (ชุด): {item.num_borrow}
                  </Text>
                </View>
              )}
            />
            {/* <Text style={styles.name}>Super Black T-Shirt</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </Text> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// import React from 'react';

// //Import all required component
// import { View, Text } from 'react-native';

// const SettingsScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
//       <Text style={{ fontSize: 23, marginTop: 10 }}>Setting Screen</Text>
//       <Text style={{ fontSize: 18, marginTop: 10 }}>
//         Simple Login Registraction Example
//       </Text>
//       <Text style={{ fontSize: 18, marginTop: 10 }}>https://aboutreact</Text>
//     </View>
//   );
// };
// export default SettingsScreen;
