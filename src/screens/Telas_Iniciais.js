import React, { Component } from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Button, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header/HeaderLogin'

import styles from '../components/Buttom/ButtomLogin/stylesButtom'

import { createSwitchNavigator } from 'react-navigation'
import Home from './Tela_Usuario';
import Menu from './Menu';


class Telas_iniciais extends Component{
    render(){
        return<MyNavigator/>;
    }
}

class Login extends Component {
    render(){
        return(
            
            <View style={{ flex: 1, backgroundColor: '#ECBF06', justifyContent:"center" }}>
                <Header/>
                <View style={stylesMain.container}>
                    <Text style={stylesMain.welcome}>Bem Vindo</Text>
                    <TextInput placeholder='N° Telefone' style={stylesMain.input}/>
                    <TextInput placeholder='Senha' style={stylesMain.input} 
                    secureTextEntry={true}/>
                    <Text onPress={() => this.props.navigation.navigate('tela3')} style={{fontSize: 15, marginTop: 15}}>Não possue conta? Cadastre-se</Text>
                </View>
                
                <View style={styless.buttomContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('tela2')} style={styles.container}>
                        <Text style={styles.buttomText} > Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('tela7')} style={styles.container1}>
                        <Text style={styles.buttomText} > Login Motorista</Text>
                </TouchableOpacity>
                </View>

                <View  style={{alignItems: 'center'}}>
                    <Text  style={styless.texto}>Venha trabalhar conosco!</Text>
                </View>

            </View>     
        )
    }
}


class Cadastro1 extends Component {
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#ECBF06' }}>
            <Header/>
            <View style={{ flex: 1, backgroundColor: '#ECBF06', alignItems: 'center' }}>
               <Text style={styles1.texto}> Insira seu número: </Text>
               <TextInput placeholder='' style={styles1.input}/>
                <View style={styles1.buttoms}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela1')} style={styles1.butom}>
                        <Text style={styles1.textbuttom}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela4')} style={styles1.butom2}>
                    <Text style={styles1.textbuttom}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>  
            </View>   
        )
    }
}

class Cadastro2 extends Component {
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#ECBF06' }}>
            <Header/>
            <View style={{ flex: 1, backgroundColor: '#ECBF06', alignItems: 'center' }}>
               <Text style={styles2.texto}> Nome: </Text>
               <TextInput placeholder='' style={styles2.input}/>
               <Text style={styles2.texto2}> CPF: </Text>
               <TextInput placeholder='' style={styles2.input}/>
                <View style={styles2.buttoms}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela3')} style={styles2.butom}>
                        <Text style={styles2.textbuttom}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela5')} style={styles2.butom2}>
                    <Text style={styles2.textbuttom}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                
            </View> 
            </View>    
        )
    }
}

class Cadastro3 extends Component {
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#ECBF06' }}>
            <Header/>
            <View style={{ flex: 1, backgroundColor: '#ECBF06', alignItems: 'center' }}>
                <View style={{flexDirection: 'row', marginTop: 180, alignItems: 'center' }}>
                        <Text style={styles3.textoRow}> Cidade: </Text>
                        <TextInput placeholder='' style={styles3.inputRow}/>
                        
                        <Text style={styles3.textoRow}> Estado: </Text>
                        <TextInput placeholder='' style={styles3.inputRow}/>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                        <Text style={styles3.texto}> Endereço: </Text>
                        <TextInput placeholder='' style={styles3.input}/>
                </View>
                <View style={styles3.buttoms}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela4')} style={styles3.butom}>
                        <Text style={styles3.textbuttom}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela6')} style={styles3.butom2}>
                    <Text style={styles3.textbuttom}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                
            </View> 
            </View>    
        )
    }
}

class Cadastro4 extends Component {
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#ECBF06' }}>
            <Header/>
            <View style={{ flex: 1, backgroundColor: '#ECBF06', alignItems: 'center' }}>
               <Text style={styles4.texto}> E-mail: </Text>
               <TextInput placeholder='' style={styles4.input}/>
               <Text style={styles4.texto2}> Senha: </Text>
               <TextInput placeholder='' style={styles4.input}/>
                <View style={styles4.buttoms}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela5')} style={styles4.butom}>
                        <Text style={styles4.textbuttom}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('tela1')} style={styles4.butom2}>
                    <Text style={styles4.textbuttom}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                
            </View> 
            </View>    
        )
    }
}

class Tela_Motorista_Inicial extends Component {
    render(){
        return(
            <View style={{ flex: 1,alignItems:'center', backgroundColor: '#ECBF06' }}>
                <Icon name='bus' size={50}/>
                <Text style={stylesM1.nome}>Ultras</Text>

               
                <Text style={stylesM1.texto}>Olá Carlos, você tem uma viagem programada com o destino Facear com inicio as 16:hrs</Text>
                
                <View style={{ alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('tela8')} style={stylesM1.buttom}>
                    <Text style={stylesM1.TextButtom}>Iniciar viagem</Text>
                </TouchableOpacity>
                </View>

            </View>     
        )
    }
}


class Tela_Motorista_Rota extends Component {
    render(){
        return(
            <View style={{ flex: 1,alignItems:'center', backgroundColor: '#ECBF06' }}>
                <View style={stylesM2.header}>
                    <Text style={stylesM2.text}>Destino Final: Tuiuti</Text>
                    <Text style={stylesM2.text}>Prox. Passageiro: Carlos</Text>
                    <Text style={stylesM2.text}>Futuro Passageiro: Matheus</Text>
                        <View style={stylesM2.buttoms}>
                            <TouchableOpacity style={stylesM2.buttom}>
                                <Text style={stylesM2.TextButtom}>Presente</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesM2.buttom2}>
                                <Text style={stylesM2.TextButtom}>Faltou</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={stylesM2.mapa}>
                    <Text> Mapa do Motorista aqui </Text>
                </View>
                </View>
    
        )
    }
}

const stylesMain = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        alignItems: 'center',
        backgroundColor: '#ECBF06'
    },
    input: {
        marginTop: 10,
        width: '90%',
        backgroundColor: '#EEE',
        borderRadius: 30,
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    },
    buttomContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    firstButtom: {
        marginRight: 10
    }, 
    welcome: {
        marginBottom: 50,
        fontSize: 30
    },
    cadastro: {
        marginTop: 15,
        fontSize: 15
    }
})

const stylesM2 = StyleSheet.create({
    
    header: {
        padding: 10,
        backgroundColor: '#ECBF06',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    buttoms: {
        flexDirection: 'row',
        marginTop: 15,
    },
    text:{
        fontSize: 20
    },
    buttom: {
        height: 31,
        width: '50%',
        backgroundColor: '#3ADF00',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 10
    },
    buttom2: {
        marginLeft: 5,
        height: 31,
        width: '50%',
        backgroundColor: '#DF0101',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 10
    },
    TextButtom: {
        fontSize: 20,
        color: '#FFF',
        alignItems: 'center'
    },
    mapa:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200
    }

})




const stylesM1 = StyleSheet.create({
    nome:{
        fontSize: 30,
        marginTop: 10
    },
    texto: {
        
        padding:30,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop:100
    },
    buttom: {
        height: 31,
        width: '50%',
        backgroundColor: '#F49D05',
        borderRadius: 30,
        paddingHorizontal: 15, 
        marginTop: 20
    },
    TextButtom: {
        fontSize: 20,
        color: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


const styles1 = StyleSheet.create({
    texto: {
        marginTop:150,
        fontSize: 20,
        marginRight: 140
    },
    input: {
        marginTop: 15,
        width: '90%',
        backgroundColor: '#EEE',
        borderRadius: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#333',
    },
    buttoms: {
        flexDirection: 'row',
        marginTop: 20, 
        alignItems: 'center'
    }, 
    butom: {
        height: 31,
        width: '30%',
        backgroundColor: '#FF8000',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 15
    }, 
    butom2: {
        height: 31,
        width: '30%',
        backgroundColor: '#F49D05',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 15,
        marginLeft: 5
    }
})


const styles2 = StyleSheet.create({
    texto: {
        marginTop:150,
        fontSize: 20,
        marginRight: 230
    },
    texto2:{
        marginTop:20,
        fontSize: 20,
        marginRight: 245
    },
    input: {
        marginTop: 15,
        width: '90%',
        backgroundColor: '#EEE',
        borderRadius: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#333',
    },
    buttoms: {
        flexDirection: 'row',
        marginTop: 20, 
        alignItems: 'center'
    }, 
    butom: {
        height: 31,
        width: '30%',
        backgroundColor: '#FF8000',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 15
    }, 
    butom2: {
        height: 31,
        width: '30%',
        backgroundColor: '#F49D05',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 15,
        marginLeft: 5
    }
})

const styles3 = StyleSheet.create({
    texto: {
        marginTop:12,
        fontSize: 15,
    },
    texto2:{
        marginTop:20,
        fontSize: 20,
        marginRight: 245
    },
    textoRow: {
        marginTop:12,
        fontSize: 15,
    },
    input: {
        marginTop: 15,
        width: '70%',
        backgroundColor: '#EEE',
        borderRadius: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#333',
    },
    inputRow: {
        marginTop: 15,
        width: '30%',
        backgroundColor: '#EEE',
        borderRadius: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#333',
    },
    buttoms: {
        flexDirection: 'row',
        marginTop: 20, 
        alignItems: 'center'
    }, 
    butom: {
        height: 31,
        width: '30%',
        backgroundColor: '#FF8000',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 15
    }, 
    butom2: {
        height: 31,
        width: '30%',
        backgroundColor: '#F49D05',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 15,
        marginLeft: 5
    }
})

const styles4 = StyleSheet.create({
    texto: {
        marginTop:150,
        fontSize: 20,
        marginRight: 245
    },
    texto2:{
        marginTop:20,
        fontSize: 20,
        marginRight: 245
    },
    input: {
        marginTop: 15,
        width: '90%',
        backgroundColor: '#EEE',
        borderRadius: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#333',
    },
    buttoms: {
        flexDirection: 'row',
        marginTop: 20, 
        alignItems: 'center'
    }, 
    butom: {
        height: 31,
        width: '30%',
        backgroundColor: '#FF8000',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 15
    }, 
    butom2: {
        height: 31,
        width: '30%',
        backgroundColor: '#F49D05',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15, 
        marginTop: 15,
        marginLeft: 5
    }
})


const styless = StyleSheet.create({
    buttomContainer: {
        flex: 1,
        backgroundColor: '#ECBF06',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    texto: {
        marginBottom: 40,
        fontSize: 20
    }
})
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

const MyNavigator = createSwitchNavigator({
    tela1: Login,
    tela2: Menu,
    tela3: Cadastro1,
    tela4: Cadastro2,
    tela5: Cadastro3,
    tela6: Cadastro4,
    tela7: Tela_Motorista_Inicial,
    tela8: Tela_Motorista_Rota
})


export default Telas_iniciais