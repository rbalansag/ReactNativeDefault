// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../constants/navigationStrings"
const SignupScreen = register({ loader: () => import("../../screens/authentication/signup"), group: "SIGNUP" });
const LicenseScreen = register({ loader: () => import("../../screens/authentication/signup/driversLicense"), group: "SIGNUP" });
const SetPasswordScreen = register({ loader: () => import("../../screens/authentication/signup/setPassword"), group: "SIGNUP" });
const SetPinScreen = register({ loader: () => import("../../screens/authentication/signup/setPin"), group: "SIGNUP" });


export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP_DETAILS}
               component={SignupScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP_LICENSE}
               component={LicenseScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP_PASSWORD}
               component={SetPasswordScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP_PIN}
               component={SetPinScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
