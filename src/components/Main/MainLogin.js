import React, { Component } from 'react'
import { View, Text, StyleSheet,  TouchableOpacity, TextInput, Image } from 'react-native'
import styles from './stylesMain'
import Buttom from '../Buttom/ButtomLogin/Buttom'



const Main = () =>(
        <View style={styles.container}>
        <Text style={styles.welcome}>Bem Vindo</Text>
            <TextInput placeholder='N° Telefone' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input} 
            secureTextEntry={true}/>

        <View style={styles.buttomContainer}>
            <Buttom>Entrar</Buttom>
        </View>
        
        <Text style={styles.cadastro}>Não possue conta? Cadastre-se</Text>
        
        </View>

        
);

//<Buttom style={styles.firstButtom}>Teste</Buttom>

export default Main