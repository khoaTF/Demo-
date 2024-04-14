/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import index from './android/src/indes';
import indes from './android/src/indes';

AppRegistry.registerComponent(appName, () => indes);
