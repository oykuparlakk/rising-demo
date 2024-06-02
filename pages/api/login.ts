import axios from 'axios';

const BASE_URL = 'https://recruitment-api.vercel.app';

export const loginUser = async (username: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/login`, { username, password });
  return response.data;
};
