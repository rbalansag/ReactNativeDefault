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
         <Text style={{fontSize: 50}}>Account screen</Text>
         <TouchableOpacity
            onPress={async () => {
               const [{status}] = await Promise.allSettled([
                  // async function can be added here before navigating
                  // preload group first before navigation *
                  preload().group('ACCOUNT'),
                  preload().component(navigationStrings.ACCOUNT_CHANGE_PASSWORD),
               ]);
               if (status === FULFILLED) {
                  props.navigation.push(navigationStrings.ACCOUNT_CHANGE_PASSWORD);
               }
            }
         }>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Change password</Text>
         </TouchableOpacity>
         <TouchableOpacity 
            onPress={async () => {
               const [{status}] = await Promise.allSettled([
                  // async function can be added here before navigating
                  // preload group first before navigation *
                  preload().group('ACCOUNT'),
                  preload().component(navigationStrings.ACCOUNT_EDIT_LICENSE),
               ]);
               if (status === FULFILLED) {
                  props.navigation.push(navigationStrings.ACCOUNT_EDIT_LICENSE);
               }
            }
         }>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Edit license</Text>
         </TouchableOpacity>
         <TouchableOpacity 
             onPress={async () => {
               const [{status}] = await Promise.allSettled([
                  // async function can be added here before navigating
                  // preload group first before navigation *
                  preload().group('ACCOUNT'),
                  preload().component(navigationStrings.ACCOUNT_EDIT_COMPANY),
               ]);
               if (status === FULFILLED) {
                  props.navigation.push(navigationStrings.ACCOUNT_EDIT_COMPANY, {screen_for: "history"});
               }
            }
         }>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Edit company</Text>
         </TouchableOpacity>
      </View>
   );
}
