// library imports
import React from "react";
import { Formik, Field, ErrorMessage, FormikProps } from "formik";
import * as yup from "yup";
import { View, Text, TextField, Button } from "react-native-ui-lib";
import { FormValues } from "../types/index";
import { useAuth0, Auth0Provider } from "react-native-auth0";

// constant import
import { email, password } from "../constants";

// styling import
import { styles } from "../styling/index";

// Define the validation schema using Yup
const validationSchema = yup.object().shape({
   email: yup.string().email("Invalid email").required("Email is required"),
   password: yup.string().required("Password is required"),
});

const Index = (props): JSX.Element => {
   const { user, error, authorize } = useAuth0();

   // Handle form submission
   const handleSubmit = (values: FormValues) => {
      props.getFormParam(values);
      onPress();
   };

   const onPress = async () => {
      try {
         await authorize({ scope: "openid profile email" }, { customScheme: "auth0.com.roadninja.bbt" });
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <View padding-s5>
         <Auth0Provider domain={"dev-mvp8fq05h32j8h2e.us.auth0.com"} clientId={"3aOSnU02sP5agUPRbd8VR9GIf5UwyDLF"}>
            <Formik initialValues={{ email, password }} onSubmit={handleSubmit} validationSchema={validationSchema}>
               {(formikProps: FormikProps<FormValues>) => (
                  <View>
                     <Text>Email</Text>
                     

                     <Text>Password</Text>
                     
                  </View>
               )}
            </Formik>
            {user && <Text>Logged in as {user.name}</Text>}
            {!user && <Text>Not logged in</Text>}
            {error && <Text>{error.message}</Text>}
         </Auth0Provider>
      </View>
   );
};

export default Index;
