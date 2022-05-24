import Constants from 'expo-constants';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';
import Route from './src/navigation/main';
import { startNetworkLogging } from 'react-native-network-logger';

startNetworkLogging();


const store = createStore(rootReducer, applyMiddleware(thunk))

if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase)
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}
else {
  firebase.app()
}

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

