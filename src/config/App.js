import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase'


class App extends React.Component {
  //Conexão BD
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyC6Y7da0zdlOX3tRv4aZxzTIl1bXNtQ2Ss",
      authDomain: "crudvanmos.firebaseapp.com",
      databaseURL: "https://crudvanmos.firebaseio.com",
      projectId: "crudvanmos",
      storageBucket: "crudvanmos.appspot.com",
      messagingSenderId: "881281240777",
      appId: "1:881281240777:web:428395929aa1baf6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase)


    /*Dados do usuario e Rotas*/
    
    //INSERT          //ref(column/ID) 
    firebase.database().ref('Users/003').set({
      numero:'41 9 88855698',
      nome:'Carlos Kpop',
      cpf:'222.222.222-22',
      cidade:'araucaria',
      estado:'PR',
      endereco:'Rua Araucaria 333',
      email:'cae@gmail.com',
      senha:'DCadddcdsdcsc',
        Routes:{
            origem:'Camera municipal',
            destino:'Unifacear - Araucaria'
        }
    }).then(() => {
        console.log('Cadastrado!!')
    }).catch((error) => {
        console.log(error)
    })


    //SELECT
    firebase.database().ref('users').on('value', (data) => {
      console.log(data.toJSON())//Lista de Usuarios cadastrados
    })

    
    //UPDATE
    firebase.database().ref('Users/003').update({
        nome:'Dalenga'//Passar somente os campos que precisam de fatos ser atualizados!
    })

    //DELETE
    //firebase.database().ref('Users/003').remove() //Passar o ID ou o campo que deseja remover!



    /****************************************************************/

    /*Dados de Rotas*/ /*Se precisar Cadastrar somente Rotas*/
    
    //INSERT Routes      //ref(column/ID) 
    // firebase.database().ref('Routes/001').set({
    //   origen:'Mirum Agency',
    //   destino:'Unifacear-Araucaria'
    // }).then(() => {
    //     console.log('Cadastrado!!')
    // }).catch((error) => {
    //     console.log(error)
    // })


    //SELECT Routes
    // firebase.database().ref('').on('value', (data) => {
    //   console.log(data.toJSON())//Lista de Rotas cadastradas
    // })


    //UPDATE  Routes
    // firebase.database().ref('Routes/001').update({
    //     nome:'Dalenga'//Passar somente os campos que precisam de fatos ser atualizados!
    // })

    //DELETE Routes
    // firebase.database().ref('Routes/001').remove()
  }

  render(){
    return (
      <View style={{alignItems: 'center', height:'100%', justifyContent:'center'}}>
          <Text styles={{fontWeight: 'bold', fontSize: 18}}>
              crudVanmos
          </Text>
      </View>
    )
  }
}

export default App

