/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Auth0Provider} from 'react-native-auth0';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import config from './auth0-configuration';
import Navigation from './src/navigation';
import {investigate} from 'react-native-bundle-splitter/dist/utils';
import Instabug, {InvocationEvent} from 'instabug-reactnative';
import {LogBox} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
import SInfo from 'react-native-sensitive-info';

const App = () => {
  React.useEffect(() => {
    (async () => {
      const savingFirstData = await SInfo.setItem('key1', 'value1', {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
      }).then;

      console.log(savingFirstData); //value1

      // Need to retrieve later?

      const gettingFirstData = await SInfo.getItem('key1', {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
      });

      console.log(gettingFirstData); //value1

      //Need to get all values stored?

      const gettingAllKeys = await SInfo.getAllItems({
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
      });

      console.log(gettingAllKeys); //value1
    })();
  }, []);

  // DefaultPreference.get('my key').then(function(value) {console.log(value)});
  // DefaultPreference.set('my key', 'my value').then(function() {console.log('done')});

  // instabug integration
  // note: need to rebuild app when updating from BETA to LIVE
  const isLive: boolean = false;
  const token = isLive
    ? '64974045bdefd8c7ad8893fce36f1dc1'
    : 'eac7435f743eb8e93a1ca75f278bf194';

  Instabug.init({
    token: token,
    invocationEvents: [
      InvocationEvent.shake,
      InvocationEvent.screenshot,
      InvocationEvent.floatingButton,
    ],
  });

  // please remove on staging and prod only
  // check loaded screens to reduce heavy loading on launch
  console.log(
    'Bundle info: ',
    `loaded: ${investigate().loaded.length}, waiting: ${
      investigate().waiting.length
    }`,
  );

  // remove yellow warning on screen
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  );
};

export default App;
