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
         <Text style={{fontSize: 50}}>Starting detail screen</Text>
         {!props.route.params?.screen_for === "previous_day" ?
            <TouchableOpacity 
                     onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.STARTING_VEHICLE),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.navigate(navigationStrings.STARTING_VEHICLE);
                        }
                     }
                  }>
               <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Starting vehicle</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity 
                     onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.REVIEW_LIST),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.navigate(navigationStrings.REVIEW_LIST, { screen_for: props?.route?.params?.screen_for });
                        }
                     }
                  }>
               <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Review list</Text>
            </TouchableOpacity>
         }
         
      </View>
   );
}
