import React from "react";
import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import {iProps} from './types';

export default function Index(props: iProps) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>View event screen</Text>
         <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Back</Text>
         </TouchableOpacity>
      </View>
   );
}
