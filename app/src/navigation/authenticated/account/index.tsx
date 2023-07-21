// library imports
import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { register } from "react-native-bundle-splitter";

// component imports
import navigationStrings from "../../constants/navigationStrings"
const AccountScreen = register({ loader: () => import("../../../screens/main/account"), group: "ACCOUNT", name:navigationStrings.ACCOUNT_LANDING });
const ChangePaswordScreen = register({ loader: () => import("../../../screens/main/account/changePasswordScreen"), group: "ACCOUNT", name:navigationStrings.ACCOUNT_CHANGE_PASSWORD });
const EditCompanyScreen = register({ loader: () => import("../../../screens/main/account/editCompanyScreen"), group: "ACCOUNT", name:navigationStrings.ACCOUNT_EDIT_COMPANY });
const LicenseScreen = register({ loader: () => import("../../../screens/main/account/licenseScreen"), group: "ACCOUNT", name:navigationStrings.ACCOUNT_EDIT_LICENSE });

export default function Index(props) {
   const Stack = createStackNavigator();

   return (
      <>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ACCOUNT_LANDING}
               component={AccountScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ACCOUNT_CHANGE_PASSWORD}
               component={ChangePaswordScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ACCOUNT_EDIT_COMPANY}
               component={EditCompanyScreen} 
            />
            <Stack.Screen 
               options={{ ...TransitionPresets.SlideFromRightIOS }}
               name={navigationStrings.ACCOUNT_EDIT_LICENSE}
               component={LicenseScreen} 
            />
         </Stack.Navigator>
      </>
   );
}
