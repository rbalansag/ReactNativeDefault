// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../constants/navigationStrings"
const PinScreen = register({ loader: () => import("../../screens/authentication/pin"), group: "PIN" });
const ForgotPinScreen = register({ loader: () => import("../../screens/authentication/pin/forgotPin"), group: "PIN" });

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ENTER_PIN}
               component={PinScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.FORGOT_PIN}
               component={ForgotPinScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
