// library imports
import React from "react";
import { Platform } from "react-native";
import { register } from "react-native-bundle-splitter";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

// component imports
import navigationStrings from "../constants/navigationStrings"
const HomeScreen = register({ loader: () => import("../../screens/main/home"), group: "HOME", name:navigationStrings.HOME });
const NewLogScreen = register({ loader: () => import("./newLog"), group: "NEWLOG", name:navigationStrings.NEW_LOG });
const HistoryScreen = register({ loader: () => import("./history"), group: "HISTORY", name:navigationStrings.HISTORY });
const AccountScreen = register({ loader: () => import("./account"), group: "ACCOUNT", name:navigationStrings.ACCOUNT });

const Tab = createBottomTabNavigator(); 

const screenOptions = {
   headerShown: false,
   tabBarStyle: {zIndex: 901, elevation: 15, backgroundColor: '#F8FAFC', height: Platform.OS == "android" ? 50 : 100},
   tabBarShowLabel: false,
   tabBarHideOnKeyboard: true
}

export default function Index() {
   

   return (
      <>
         <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
               // options={icon_store}
               name={navigationStrings.HOME}     
               component={HomeScreen} 
            />
            <Tab.Screen 
               // options={icon_bulletin}
               name={navigationStrings.NEW_LOG}     
               component={NewLogScreen}  
            />
            <Tab.Screen 
               // options={icon_bulletin}
               name={navigationStrings.HISTORY}     
               component={HistoryScreen}  
            />
            <Tab.Screen 
               // options={icon_bulletin}
               name={navigationStrings.ACCOUNT}     
               component={AccountScreen}  
            />
         </Tab.Navigator> 
      </>
   );
}
