import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mayurstay.com/himalayanflavours',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitForm = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'An error occurred';
  }
};

export default api;
