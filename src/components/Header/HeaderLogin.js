import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../img/icone.png'
import styles from './stylesHeader'

const Header = () => (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={icon} style={styles.image}/>
                </View>
                
                <Text style={styles.title}>Vanmos</Text>
                
            </View>

);

export default Header