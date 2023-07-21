// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../constants/navigationStrings"
const BottomNav = register({ loader: () => import("./bottomNav"), group: "BOTTOMNAV" });
const Log = register({ loader: () => import("./newLog/log"), group: "LOG" });
const ViewEventScreen = register({ loader: () => import("../../screens/main/history/viewEventScreen"), group: "VIEWEVENT" });
const ExportScreen = register({ loader: () => import("../../screens/main/history/exportScreen"), group: "EXPORT" });

export default function Index() {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.MAIN_NAVIGATION}
               component={BottomNav} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.CREATE_LOG}
               component={Log} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.EXPORT}
               component={ExportScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
