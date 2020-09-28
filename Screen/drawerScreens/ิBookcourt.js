//Example Multiple select / Dropdown / Picker in React Native
import React, {Component} from 'react';
//Import React
import {
  View,
  Text,
  Picker,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
//Import basic react native components
import MultiSelect from 'react-native-multiple-select';
//Import MultiSelect library

//Dummy Data for the MutiSelect
this.items = [
  {id: '1', name: '16.00 – 16.30'},
  {id: '2', name: '16.30 – 17.00'},
  {id: '3', name: '17.00 – 17.30'},
  {id: '4', name: '17.30 – 18.00'},
  {id: '5', name: '18.00 – 18.30'},
  {id: '6', name: '18.30 – 19.00'},
  {id: '7', name: '19.00 – 19.30'},
  {id: '8', name: '19.30 – 20.00'},
  {id: '9', name: '20.00 – 20.30'},
  {id: '10', name: '20.30 – 21.00'},
];

// this.courts = [
//     { id: '1', name: 'Court 1' },
//     { id: '2', name: 'Court 2' },
//     { id: '3', name: 'Court 3' },
//     { id: '4', name: 'Court 4' },
//     { id: '5', name: 'Court 5' },
//     { id: '6', name: 'Court 6' },
//     { id: '7', name: 'Court 7' },
//     { id: '8', name: 'Court 8' },
//   ];

export default class App extends Component {
  state = {
    //We will store selected item in this
    selectedItems: [],
    // selectedCourt: [],
  };
  onSelectedCourtChange = (selectedCourt) => {
    this.setState({selectedCourt});
    //Set Selected Items
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({selectedItems});
    //Set Selected Items
  };

  render() {
    const {selectedItems} = this.state;
    // const { selectedCourt } = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 20}}>
          <ScrollView>
            <MultiSelect
              hideTags
              items={items}
              uniqueKey="id"
              ref={(component) => {
                this.multiSelect = component;
              }}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="Choose time"
              searchInputPlaceholderText="Choose time"
              onChangeInput={(text) => console.log(text)}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#5e3881"
              selectedItemTextColor="#5e3881"
              selectedItemIconColor="#5e3881"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{color: '#CCC'}}
              submitButtonColor="#5e3881"
              submitButtonText="Submit"
            />
          </ScrollView>
        </View>
        {/* <View style={{ flex: 1, padding: 20 }}>
          <MultiSelect
            hideTags
            courts={courts}
            uniqueKey="id"
            ref={component => {
              this.multiSelect = component;
            }}
            onSelectedCourtChange={this.onSelectedCourtChange}
            selectedCourt={selectedCourt}
            selectText="Choose court"
            searchInputPlaceholderText="Choose court"
            onChangeInput={text => console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedCourtTextColor="#CCC"
            selectedCourtIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#48d22b"
            submitButtonText="Submit"
          />
        </View> */}
      </SafeAreaView>
    );
  }
}
