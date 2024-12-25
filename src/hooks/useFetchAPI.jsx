// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// // Utility function to read/write to localStorage dynamically
// const getCachedData = (key: string) => {
//   const cachedData = localStorage.getItem(key);
//   return cachedData ? JSON.parse(cachedData) : null;
// };

// const setCachedData = (key: string, data: unknown) => {
//   localStorage.setItem(key, JSON.stringify(data));
// };

// // Reusable API fetching hook
// const useFetchAPI = <T>(key: string, url: string) => {
//   return useQuery<T>({
//     queryKey: [key],
//     queryFn: async () => {
//       const response = await axios.get<T>(url);
//       setCachedData(key, response.data); // Save to localStorage with dynamic key
//       return response.data;
//     },
//     initialData: () => {
//       const cachedData = getCachedData(key);
//       return cachedData;
//     },
//     onSuccess: (data) => {
//       setCachedData(key, data);
//     },
//     cacheTime: 0, // Disable caching by react-query
//   });
// };

// export default useFetchAPI;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Utility function to read/write to localStorage dynamically
const getCachedData = (key) => {
  const cachedData = localStorage.getItem(key);
  return cachedData ? JSON.parse(cachedData) : null;
};

const setCachedData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Reusable API fetching hook
const useFetchAPI = (key, url) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await axios.get(url);
      setCachedData(key, response.data); // Save to localStorage with dynamic key
      return response.data;
    },
    initialData: () => {
      const cachedData = getCachedData(key);
      return cachedData;
    },
    onSuccess: (data) => {
      setCachedData(key, data);
    },
    cacheTime: 0, // Disable caching by react-query
    staleTime: 1000 * 60 * 60, // Keep data fresh for 1 hour
  });
};

export default useFetchAPI;
