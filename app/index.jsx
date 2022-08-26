import React from 'react';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './contexts/auth';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
