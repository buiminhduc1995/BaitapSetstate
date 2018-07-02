/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TextInput,Dimensions,TouchableOpacity
} from 'react-native';
var {height, width} = Dimensions.get('window')
var int
export default class App extends Component{
  constructor(){
    super();
    this.state ={
     Sothu1:'',
     Sothu2:'',
     kq:'',
    }
  }
  phepcong = () => {
    this.setState({kq : parseInt(this.state.Sothu1)+parseInt(this.state.Sothu2)})
  }
  pheptru=()=>{
    this.setState({kq: parseInt(this.state.Sothu1)-parseInt(this.state.Sothu2)})
  }
  phepnhan=()=>{
    this.setState({kq: parseInt(this.state.Sothu1)*parseInt(this.state.Sothu2)})
  }
  phepchia=()=>{
    this.setState({kq: parseInt(this.state.Sothu1)/parseInt(this.state.Sothu2)})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.kq}>
        <Text>Ket qua:</Text>
        <Text>{this.state.kq}</Text>
        </View>
        <View style={styles.input}>
        <TextInput onChangeText={(txt1)=>this.setState({Sothu1:txt1})} placeholder="Nhap so thu nhat"/>
        <TextInput onChangeText={(txt2)=>this.setState({Sothu2:txt2})} style={{marginTop:100}}placeholder="Nhap so thu hai"/>
        </View>
        <View style={styles.button}>
        <TouchableOpacity style={styles.touch}onPress={this.phepcong}><Text>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.touch}onPress={this.pheptru}><Text>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.touch}onPress={this.phepnhan}><Text>*</Text></TouchableOpacity>
        <TouchableOpacity style={styles.touch}onPress={this.phepchia}><Text>/</Text></TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kq:{
    justifyContent:'center',
    width: width,
    flex:4,
    flexDirection: 'row',
  },
  input:{
    flex:4,
    width: width,
  },
  button:{
    flexDirection: 'row',
    flex:2,
    width: width, 
    marginTop: 50,
  },
  touch:{
    justifyContent:'center',
    alignItems:'center',
    width: width/4,
    height: 50,
    borderRadius: 25,
    backgroundColor:'red'
  }
});
