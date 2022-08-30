import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect, useContext} from 'react';
import {currentUser, getAllArticles} from '../services/auth';
import api from '../services/api';

export const AuthContext = createContext();

/**
 *
 * @returns {{user: any, signed: boolean, isLoading: boolean, login: () => void, logout: () => void}}
 */
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = props => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState([]);

  const login = async (accessToken, resUser) => {
    await AsyncStorage.setItem('token', accessToken);
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    setUser(resUser);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    api.defaults.headers.common.Authorization = undefined;
    setUser(null);
  };

  useEffect(() => {
    setIsLoading(true);
    currentUser()
      .then(data => {
        setUser(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
    getAllArticles().then(data => {
      setArticle(data);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{user, signed: !!user, isLoading, login, logout, article}}>
      {props.children}
    </AuthContext.Provider>
  );
};
