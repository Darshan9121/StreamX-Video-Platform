import API from './api';

export const login = async (credentials) => {
  const { data } = await API.post('/auth/login', credentials);
  return data;
};

export const register = async (userInfo) => {
  const { data } = await API.post('/auth/register', userInfo);
  return data;
};

export const getProfile = async () => {
  const { data } = await API.get('/auth/profile');
  return data;
}; 