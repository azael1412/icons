
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class App extends Component{
  render(){
    return(
      <View>
        <Feather name="activity" style={{fontSize:24, color:'red'}}></Feather>
        <FontAwesome name="user" style={{fontSize:24, color:'#00BFFF'}}></FontAwesome>
      </View>
    )
  }
}

