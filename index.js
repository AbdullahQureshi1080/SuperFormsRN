/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {ObservablePersistMMKV} from '@legendapp/state/mmkv';
// import {configureObservablePersistence} from '@legendapp/state/persist';

// // Global configuration
// configureObservablePersistence({
//   // Use react-native-mmkv in React Native
//   persistLocal: ObservablePersistMMKV,
// });

AppRegistry.registerComponent(appName, () => App);
