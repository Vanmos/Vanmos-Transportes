import React, { Component } from 'react'
import { View, Text, StyleSheet,  TouchableOpacity, TextInput, Image } from 'react-native'
import Map from '../components/Map/Map'

class Home extends Component {
  render(){
    return(      
      <View style={styles.container}>
        <Map /> 
        {/* <Text>a</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECBF06',
    alignItems:'center',
    justifyContent: 'center'
  }
})

export default Home