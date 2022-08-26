import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AppRoute from './app';
import AuthRoute from './auth';
import {useAuth} from '../contexts/auth';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const Routes = () => {
  const {userInfo, splashLoading} = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {splashLoading ? (
        <Stack.Screen name="Splash" component={Splash} />
      ) : userInfo.accessToken ? (
        <Stack.Screen name="App" component={AppRoute} />
      ) : (
        <Stack.Screen name="Auth" component={AuthRoute} />
      )}
    </Stack.Navigator>
  );
};

export default Routes;
