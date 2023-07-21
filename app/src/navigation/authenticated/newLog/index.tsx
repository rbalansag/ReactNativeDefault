// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../../constants/navigationStrings"
const LogForToday = register({ loader: () => import("./log"), group: "NEWLOG", name:navigationStrings.CREATE_LOG_FOR_TODAY });
const NewLogScreen = register({ loader: () => import("../../../screens/main/newLog"), group: "NEWLOG", name:navigationStrings.NEW_LOG_LANDING });

export default function Index(props) {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.NEW_LOG_LANDING}
               component={NewLogScreen} 
            />
            {/*
               <Stack.Screen 
                  options={{ ...TransitionPresets.SlideFromRightIOS }}
                  name={navigationStrings.CREATE_LOG_FOR_TODAY}
                  component={LogForToday} 
               />
            */}
         </Stack.Navigator>
      </>
   );
}
