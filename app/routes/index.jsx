import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AppRoute from './app';
import AuthRoute from './auth';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Auth" component={AuthRoute} />
      <Stack.Screen name="App" component={AppRoute} />
    </Stack.Navigator>
  );
};

export default Routes;
