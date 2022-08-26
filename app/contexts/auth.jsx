import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {addUser, loginUser} from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const register = async (name, email, password) => {
    setIsLoading(true);
    let userInfo = await addUser(name, email, password);

    if (userInfo.error) {
      Alert.alert('Error', 'Email is already exist.');
      setIsLoading(false);
    } else {
      Alert.alert('Success', 'Account created successfully.');
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    let userInfo = await loginUser(email, password);
    if (userInfo.error) {
      Alert.alert('Error', 'Email/Password is incorrect');
    } else {
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
    setIsLoading(false);
  };

  const logout = () => {
    console.log('loggout');
    try {
      setIsLoading(true);
      AsyncStorage.removeItem('userInfo');
      setUserInfo({});
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (e) {}
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{register, login, isLoading, userInfo, logout}}>
      {props.children}
    </AuthContext.Provider>
  );
};
