import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Home from './Tela_Usuario'
import Transporte_Usuario from './Seu_Transporte_Usuario'
import Contato_Usuario from './Contato_Usuario'
import Perfil_Usuario from './Perfil_Usuario'

export default createDrawerNavigator({
    Home: Home,
    Perfil: Perfil_Usuario,
    Transporte: Transporte_Usuario,
    Contato: Contato_Usuario
}, { drawerWidth: 250 })
