import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Toast } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import navigationStrings from "../../../navigation/constants/navigationStrings"
import {preload} from 'react-native-bundle-splitter';
import {FULFILLED} from './constants';
import {iProps} from './types';

export default function Index(props: iProps) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>Set pin</Text>
         <TouchableOpacity 
             onPress={async () => {
               const [{status}] = await Promise.allSettled([
               // preload group first before navigation *
               preload().group('SIGNUP'),
               preload().component(navigationStrings.AUTHENTICATION_LANDING),
            ]);
               if (status === FULFILLED) {
               props.navigation.push(navigationStrings.AUTHENTICATION_LANDING);
               }
            }}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5}}>Next step</Text>
         </TouchableOpacity>
      </View>
   );
}
