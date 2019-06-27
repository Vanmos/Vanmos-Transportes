import React, { Component } from 'react'
import { View, Text, StyleSheet,  TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './stylesButtom'



const Buttom = ({ children, style }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela2')} style={[styles.container,
    style
    ]}>
        <Text style={styles.buttomText}>{children}</Text>
    </TouchableOpacity>
)

export default Buttom