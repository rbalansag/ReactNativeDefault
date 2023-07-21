// library imports
import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {FormValues, iProps} from '../types/index';
import {useAuth0} from 'react-native-auth0';
import {Alert, Button} from 'react-native';

// styling import
import {styles} from '../styling/index';

const Home = () => {
  const {authorize, clearSession, user, getCredentials, error} = useAuth0();

  const onLogin = async () => {
    await authorize({scope: 'openid profile email'});
    const {accessToken} = await getCredentials();
    Alert.alert('AccessToken: ' + accessToken);
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    await clearSession({federated: true}, {localStorageOnly: false});
  };

  return (
    <View>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log out' : 'Log in'}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

const Index = (props: iProps): JSX.Element => {
  const {user, error, authorize} = useAuth0();

  // Handle form submission
  const handleSubmit = (values: FormValues) => {
    props.getFormParam(values);
    onPress();
  };

  const onPress = async () => {
    try {
      await authorize(
        {scope: 'openid profile email'},
        {customScheme: 'auth0.com.roadninja.bbt'},
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View padding-s5>
      <Home />
    </View>
  );
};

export default Index;
