import React, { Component } from 'react'
import { View, Text, StyleSheet,  TouchableOpacity, TextInput, Image } from 'react-native'
import Header from '../components/Header/HeaderLogin'
import Main from '../components/Main/MainLogin'
import Icon from '../img/icone.png'

class Login extends Component {
    render(){
        return(
            
            <View style={{ flex: 1, backgroundColor: '#ECBF06' }}>
                <Header/>
                <Main/>
                
            </View>     
        )
    }
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#ECBF06'
//     },
//     buttom: {
//         marginTop: 30,
//         padding: 10,
//         backgroundColor: '#4286f4',
//         width: '90%',
//     },
//     buttomText: {
//         fontSize: 20,
//         color: '#FFF',
//         alignItems: 'center'
//     },
//     input: {
//         marginTop: 20,
//         width: '90%',
//         backgroundColor: '#EEE',
//         height: 40,
//         borderWidth: 1,
//         borderColor: '#333',
//     },
//     rowContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
        
//         justifyContent: 'center'
//     },
//     title: {
//         color: '#000',
//         fontFamily: 'calibri',
//         height: 30,
//         fontSize: 28,

//     },image: {
//         height: 30,
//         width: 30,
//         resizeMode: 'contain',
//         marginTop: 12
//     },
//     containerButtom:{
//         borderRadius: 30,
//         justifyContent: 'center',
//         flexDirection: 'row',
//         alignItems: 'center',
        
//     }
// })


export default Login