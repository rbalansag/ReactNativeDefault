// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../constants/navigationStrings"
const LandingScreen = register({ loader: () => import("../../screens/authentication/landing"), group: "LANDING" });
const SignupScreen = register({ loader: () => import("./signup"), group: "SIGNUP" });
const LoginScreen = register({ loader: () => import("./login"), group: "LOGIN" });
const EnterPinScreen = register({ loader: () => import("./enterPin"), group: "PIN" });

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.AUTHENTICATION_LANDING}
               component={LandingScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.SIGNUP}
               component={SignupScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.LOGIN}
               component={LoginScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.PIN}
               component={EnterPinScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
