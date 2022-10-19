//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './src/Screens/Home/Home';

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Home/>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

//make this component available to the app
export default App;
