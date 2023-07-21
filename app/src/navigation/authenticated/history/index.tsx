// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../../constants/navigationStrings"
const LogHistoryScreen = register({ loader: () => import("../../../screens/main/history/logHistoryScreen"), group: "HISTORY", name:navigationStrings.HISTORY_LANDING });
const LogScreen = register({ loader: () => import("../../../screens/main/newLog/overview/overviewScreen"), group: "HISTORY", name:navigationStrings.HISTORY_TIMELINE_VIEW });
const ReviewListScreen = register({ loader: () => import("../../../screens/main/newLog/reviewAndComplete/reviewListScreen"), group: "HISTORY", name:navigationStrings.HISTORY_LIST_VIEW });

export default function Index(props) {
   const Stack = createStackNavigator();

   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.HISTORY_LANDING}
               component={LogHistoryScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.HISTORY_TIMELINE_VIEW}
               component={LogScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.HISTORY_LIST_VIEW}
               component={ReviewListScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
