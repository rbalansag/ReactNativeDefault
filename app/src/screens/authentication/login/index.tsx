// library imports
import React from 'react';
import {Text, View } from 'react-native-ui-lib';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {register, preload} from 'react-native-bundle-splitter';
import {FULFILLED} from './constants';
import {iProps} from './types';

// component imports
import navigationStrings from '../../../navigation/constants/navigationStrings';

// dont cache the one time use component to minimize the RAM consumption
// add placeholder for non-cached component
const Form = register<{getFormParam: any}>({
  loader: () => import('./components/form'),
  cached: false,
  placeholder: () => (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#0398fc" />
    </View>
  ),
});

export default function Index(props: iProps) {

  // get data from form
  const getFormParam = (form) => {
    console.log(form);
  };

  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Login screen</Text>
      <Form getFormParam={getFormParam} />
      <TouchableOpacity
        onPress={async () => {
          const [{status}] = await Promise.allSettled([
            // preload group first before navigation *
            preload().group('LOGIN'),
            preload().component(navigationStrings.FORGOT_PASSWORD),
          ]);
          if (status === FULFILLED) {
            props.navigation.push(navigationStrings.FORGOT_PASSWORD);
          }
        }}>
        <Text
          style={{
            fontSize: 20,
            backgroundColor: 'yellow',
            paddingVertical: 5,
            paddingHorizontal: 5,
          }}>
          Forgot password
        </Text>
      </TouchableOpacity>
    </View>
  );
}
