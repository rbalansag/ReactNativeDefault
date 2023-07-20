import React, { useEffect, useMemo, useState } from "react";
import { Text, View, Toast } from "react-native-ui-lib";
import { TouchableOpacity } from 'react-native';
import navigationStrings from "../../../navigation/constants/navigationStrings"

export default function Index(props) {

   return (
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
         <Text style={{fontSize: 50}}>New log screen</Text>
         <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.CREATE_LOG)}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Create log for today</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => props.navigation.navigate(navigationStrings.CREATE_LOG, {screen_for: "previous_day"})}>
            <Text style={{fontSize: 20, backgroundColor: 'yellow', paddingVertical:5, paddingHorizontal:5, marginTop: 20}}>Create log for previous day</Text>
         </TouchableOpacity>
      </View>
   );
}
