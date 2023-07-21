// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../constants/navigationStrings"
const LoginScreen = register({ loader: () => import("../../screens/authentication/login"), group: "LOGIN" });
const ForgotPasswordScreen = register({ loader: () => import("../../screens/authentication/login/forgotPassword"), group: "LOGIN" });


export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.LOGIN_FORM}
               component={LoginScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.FORGOT_PASSWORD}
               component={ForgotPasswordScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
