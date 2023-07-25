// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../../constants/navigationStrings"
const StartingDetailsScreen = register({ loader: () => import("../../../screens/main/newLog/startDetails/startingDetailsScreen"), group: "NEWLOG", name:navigationStrings.STARTING_DETAILS });
const StartingVehicleScreen = register({ loader: () => import("../../../screens/main/newLog/startDetails/startingVehicleScreen"), group: "NEWLOG", name:navigationStrings.STARTING_VEHICLE });
const StartingCompanyScreen = register({ loader: () => import("../../../screens/main/newLog/startDetails/startingCompanyScreen"), group: "NEWLOG", name:navigationStrings.STARTING_COMPANY });
const LogScreen = register({ loader: () => import("../../../screens/main/newLog/overview/overviewScreen"), group: "NEWLOG", name:navigationStrings.OVERVIEW });
const DetailScreen = register({ loader: () => import("../../../screens/main/newLog/events/detailsScreen"), group: "NEWLOG", name:navigationStrings.EVENT_DETAILS });
const ReviewListScreen = register({ loader: () => import("../../../screens/main/newLog/reviewAndComplete/reviewListScreen"), group: "NEWLOG", name:navigationStrings.REVIEW_LIST });
const CompleteScreen = register({ loader: () => import("../../../screens/main/newLog/reviewAndComplete/completeScreen"), group: "NEWLOG", name:navigationStrings.REVIEW_COMPANY_LIST });
const EditCompanyScreen = register({ loader: () => import("../../../screens/main/account/editCompanyScreen"), group: "NEWLOG", name:navigationStrings.REVIEW_EDIT_COMPANY });


export default function Index(props) {
   const Stack = createStackNavigator();
   
   return (
      <>
       
         <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.STARTING_DETAILS}
               component={StartingDetailsScreen} 
               initialParams={props.route.params}
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.STARTING_VEHICLE}
               component={StartingVehicleScreen} 
               initialParams={props.route.params}
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.STARTING_COMPANY}
               component={StartingCompanyScreen} 
               initialParams={props.route.params}
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.OVERVIEW}
               initialParams={props.route.params}
               component={LogScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.EVENT_DETAILS}
               initialParams={props.route.params}
               component={DetailScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.REVIEW_LIST}
               initialParams={props.route.params}
               component={ReviewListScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.REVIEW_COMPANY_LIST}
               initialParams={props.route.params}
               component={CompleteScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.REVIEW_EDIT_COMPANY}
               initialParams={props.route.params}
               component={EditCompanyScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
