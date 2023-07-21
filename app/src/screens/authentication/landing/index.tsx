// library imports
import React from 'react';
import {Text, View } from 'react-native-ui-lib';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {register, preload} from 'react-native-bundle-splitter';
import {FULFILLED} from './constants';
import {iProps} from './types';

// component imports
import navigationStrings from '../../../navigation/constants/navigationStrings';

export default function Index(props: iProps) {
   const FULFILLED = 'fulfilled';

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>landing</Text>
         <TouchableOpacity 
            onPress={async () => {
               const [{status}] = await Promise.allSettled([
                  // async function can be added here before navigating
                  // preload group first before navigation *
                  preload().group('SIGNUP'),
                  preload().component(navigationStrings.SIGNUP),
               ]);
               if (status === FULFILLED) {
                  props.navigation.navigate(navigationStrings.SIGNUP);
               }
            }
         }><Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5}}>Signup</Text>
         </TouchableOpacity>
         <TouchableOpacity 
            onPress={async () => {
               const [{status}] = await Promise.allSettled([
                  // async function can be added here before navigating
                  // preload group first before navigation *
                  preload().group('LOGIN'),
                  preload().component(navigationStrings.LOGIN),
               ]);
               if (status === FULFILLED) {
                  props.navigation.navigate(navigationStrings.LOGIN);
               }
            }
         }><Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity 
            onPress={async () => {
               const [{status}] = await Promise.allSettled([
                  // async function can be added here before navigating
                  // preload group first before navigation *
                  preload().group('PIN'),
                  preload().component(navigationStrings.PIN),
               ]);
               if (status === FULFILLED) {
                  props.navigation.navigate(navigationStrings.PIN);
               }
            }
         }><Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Enter PIN</Text>
         </TouchableOpacity>
         <TouchableOpacity 
            onPress={async () => {
               const [{status}] = await Promise.allSettled([
                  // async function can be added here before navigating
                  // preload group first before navigation *
                  preload().group('LOGIN'),
                  preload().component(navigationStrings.AUTHENTICATED),
               ]);
               if (status === FULFILLED) {
                  props.navigation.navigate(navigationStrings.AUTHENTICATED);
               }
            }
         }><Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Authenticated user</Text>
         </TouchableOpacity>
      </View>
   );
}
