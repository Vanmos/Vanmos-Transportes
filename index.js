/**
 * @format
 */

import {AppRegistry} from 'react-native';

//import Login from './src/screens/Login'
import {name as appName} from './app.json';
//import Routes from './src/screens/index'
import Routes from './src/screens/Menu'

AppRegistry.registerComponent(appName, () => Routes);
