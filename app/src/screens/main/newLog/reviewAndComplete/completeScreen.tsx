import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Toast } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import navigationStrings from "../../../../navigation/constants/navigationStrings"
import {preload} from 'react-native-bundle-splitter';
import {FULFILLED} from '../constants';
import {iProps} from '../types';

export default function Index(props: iProps) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>Company list screen</Text>
         <TouchableOpacity 
               onPress={async () => {
                  const [{status}] = await Promise.allSettled([
                     // async function can be added here before navigating
                     // preload group first before navigation *
                     preload().group('NEWLOG'),
                     preload().component(navigationStrings.NEW_LOG),
                  ]);
                  if (status === FULFILLED) {
                     props.navigation.navigate(navigationStrings.NEW_LOG);
                  }
               }
            }>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Finish/Send log</Text>
         </TouchableOpacity>
         <TouchableOpacity 
               onPress={async () => {
                  const [{status}] = await Promise.allSettled([
                     // async function can be added here before navigating
                     // preload group first before navigation *
                     preload().group('NEWLOG'),
                     preload().component(navigationStrings.REVIEW_EDIT_COMPANY),
                  ]);
                  if (status === FULFILLED) {
                     props.navigation.navigate(navigationStrings.REVIEW_EDIT_COMPANY);
                  }
               }
            }>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Edit Company</Text>
         </TouchableOpacity>
      </View>
   );
}
