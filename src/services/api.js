import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const login = async (email, password) => {
  try {
    const response = await API.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchUsers = async (page) => {
  try {
    const response = await API.get(`/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};