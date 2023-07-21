import React from "react";
import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import navigationStrings from "../../../navigation/constants/navigationStrings"
import {preload} from 'react-native-bundle-splitter';
import {FULFILLED} from './constants';
import {iProps} from './types';

export default function Index(props: iProps) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>Log History screen</Text>
         <TouchableOpacity 
            onPress={async () => {
               const [{status}] = await Promise.allSettled([
                  // async function can be added here before navigating
                  // preload group first before navigation *
                  preload().group('HISTORY'),
                  preload().component(navigationStrings.HISTORY_TIMELINE_VIEW),
               ]);
               if (status === FULFILLED) {
                  props.navigation.navigate(navigationStrings.HISTORY_TIMELINE_VIEW, {screen_for: "history"});
               }
            }
         }>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>View item</Text>
         </TouchableOpacity>
      </View>
   );
}
