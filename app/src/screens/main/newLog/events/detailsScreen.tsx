import React from "react";
import { Text, View } from "react-native-ui-lib";
import {iProps} from '../types';

export default function Index(props: iProps) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>Event Details form screen</Text>
      </View>
   );
}
