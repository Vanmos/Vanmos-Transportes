/**
 * @format
 */

import {AppRegistry} from 'react-native';

import Telas_iniciais from './src/screens/Telas_Iniciais'
import {name as appName} from './app.json';
import Menu from './src/screens/Menu'

AppRegistry.registerComponent(appName, () => Telas_iniciais);
