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
         <Text style={{fontSize: 50}}>overview screen</Text>
         
         {props.route.params?.screen_for === "previous_day" ?
            <>
               <TouchableOpacity
                     onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.EVENT_DETAILS),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.push(navigationStrings.EVENT_DETAILS);
                        }
                     }
                  }>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Log an event</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                     onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.REVIEW_LIST),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.replace(navigationStrings.REVIEW_LIST);
                        }
                     }
                  }>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>List view</Text>
               </TouchableOpacity>
            </>
         : props.route.params?.screen_for === "history" ?
            <>
               <TouchableOpacity 
                     onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.VIEW_EVENT),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.push(navigationStrings.VIEW_EVENT);
                        }
                     }
                  }>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>View an event</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                     onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.HISTORY_LIST_VIEW),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.replace(navigationStrings.HISTORY_LIST_VIEW, {screen_for: props.route.params?.screen_for});
                        }
                     }
                  }>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>List View</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                      onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.EXPORT),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.push(navigationStrings.EXPORT);
                        }
                     }
                  }>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Export</Text>
               </TouchableOpacity>
            </>
         :
            <>
               <TouchableOpacity 
                      onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.EVENT_DETAILS),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.push(navigationStrings.EVENT_DETAILS);
                        }
                     }
                  }>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Log an event</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                     onPress={async () => {
                        const [{status}] = await Promise.allSettled([
                           // async function can be added here before navigating
                           // preload group first before navigation *
                           preload().group('NEWLOG'),
                           preload().component(navigationStrings.REVIEW_LIST),
                        ]);
                        if (status === FULFILLED) {
                           props.navigation.push(navigationStrings.REVIEW_LIST);
                        }
                     }
                  }>
                  <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Review/Complete</Text>
               </TouchableOpacity>
            </>
         }
      </View>
   );
}
