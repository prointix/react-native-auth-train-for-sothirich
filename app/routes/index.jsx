import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import AppRoute from './app';
import AuthRoute from './auth';
import {useAuth} from '../contexts/auth';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const Routes = () => {
  const {signed, isLoading} = useAuth();

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}>
      {signed ? (
        <Stack.Screen name="App" component={AppRoute} />
      ) : (
        <Stack.Screen name="Auth" component={AuthRoute} />
      )}
    </Stack.Navigator>
  );
};

export default Routes;
