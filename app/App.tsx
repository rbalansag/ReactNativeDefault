/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent } from 'react';
import { Auth0Provider } from 'react-native-auth0';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import config from './auth0-configuration';
import Navigation from "./src/navigation";
import { investigate } from 'react-native-bundle-splitter/dist/utils';
import Instabug, { InvocationEvent } from 'instabug-reactnative';

const App= (): JSX.Element => {

   // instabug integration
   // note: need to rebuild app when updating from BETA to LIVE
   const isLive: boolean = false;
   const token = isLive ? "64974045bdefd8c7ad8893fce36f1dc1" : "eac7435f743eb8e93a1ca75f278bf194"

   Instabug.init({
      token: token,
      invocationEvents: [InvocationEvent.shake, InvocationEvent.screenshot, InvocationEvent.floatingButton],
   });

   
   // please remove on staging and prod only
   // check loaded screens to reduce heavy loading on launch
   console.log('Bundle info: ', `loaded: ${investigate().loaded.length}, waiting: ${investigate().waiting.length}`);



   
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
