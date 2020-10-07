import React, {Component} from 'react';

import {StyleSheet, View, TextInput, Button, Text, Alert} from 'react-native';

export default class Book_course extends Component {
  constructor() {
    super();

    this.state = {
      student_id: '',
      people_name: '',
      school_of: '',
      book_time: '',
      num_course: '',
      people_tel: '',
    };
  }

  UserRegistrationFunction = () => {
    fetch('http://172.20.10.3/WUBadminton/ิbook_course.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        student_id: this.state.student_id,

        people_name: this.state.people_name,

        school_of: this.state.school_of,

        book_time: this.state.book_time,

        num_course: this.state.num_course,

        people_tel: this.state.people_tel,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.title}>การจองสนาม</Text>

        <TextInput
          placeholder="Enter Student ID"
          onChangeText={(student_id) => this.setState({student_id: student_id})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter FullName"
          onChangeText={(people_name) =>
            this.setState({people_name: people_name})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter school of"
          onChangeText={(school_of) => this.setState({school_of: school_of})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter book time"
          onChangeText={(book_time) => this.setState({book_time: book_time})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter course"
          onChangeText={(num_course) => this.setState({num_course: num_course})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter Tel"
          onChangeText={(people_tel) => this.setState({people_tel: people_tel})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <Button
          title="Click Here To Register"
          onPress={this.UserRegistrationFunction}
          color="#2196F3"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
  },

  title: {
    fontSize: 22,
    color: '#009688',
    textAlign: 'center',
    marginBottom: 15,
  },
});
