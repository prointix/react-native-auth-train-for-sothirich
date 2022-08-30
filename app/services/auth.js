import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const currentUser = async () => {
  const accessToken = await AsyncStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  return api.get('/auth/me', {headers}).then(res => res.data);
};

/**
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{accessToken: string, user: any}>}
 */
export const addUser = (name, email, password) => {
  return api
    .post('/auth/register', {
      name: name,
      email: email,
      password: password,
    })
    .then(res => res.data);
};

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{accessToken: string, user: any}>}
 */
export const loginUser = (email, password) => {
  return api
    .post('/auth/login', {
      email: email,
      password: password,
    })
    .then(res => res.data);
};

export const getAllArticles = () => {
  return api.get('/articles').then(res => res.data);
};

export const getArticleDetails = id => {
  return api.get(`/articles/${id}`).then(res => res.data);
};
