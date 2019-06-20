import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Home from './Tela_Usuario'

const Routes = createAppContainer(
  createDrawerNavigator({
    Home: Home
  })
)
export default Routes

