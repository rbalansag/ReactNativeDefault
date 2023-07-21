// library imports
import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {TouchableOpacity} from 'react-native';
import {preload} from 'react-native-bundle-splitter';
import {FULFILLED} from './constants';
import {iProps} from './types';

// component imports
import navigationStrings from '../../../navigation/constants/navigationStrings';

export default function Index(props: iProps) {
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Enter Pin screen</Text>
      <TouchableOpacity
        onPress={async () => {
          const [{status}] = await Promise.allSettled([
            // preload group first before navigation *
            preload().group('LOGIN'),
            preload().component(navigationStrings.FORGOT_PIN),
          ]);
          if (status === FULFILLED) {
            props.navigation.push(navigationStrings.FORGOT_PIN);
          }
        }}>
        <Text
          style={{
            fontSize: 20,
            backgroundColor: 'yellow',
            paddingVertical: 5,
            paddingHorizontal: 5,
          }}>
          Forgot PIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}
