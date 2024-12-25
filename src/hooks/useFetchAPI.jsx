// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// // Utility function to read/write to localStorage dynamically
// const getCachedData = (key) => {
//   const cachedData = localStorage.getItem(key);
//   return cachedData ? JSON.parse(cachedData) : null;
// };

// const setCachedData = (key, data) => {
//   localStorage.setItem(key, JSON.stringify(data));
// };

// const useFetchAPI = (key, url) => {
//   return useQuery({
//     queryKey: [key],
//     queryFn: async () => {
//       const response = await axios.get(url);
//       console.log('API Response:', response.data); // Log response
//       setCachedData(key, response.data); // Save to localStorage
//       return response.data;
//     },
//     initialData: () => {
//       const cachedData = getCachedData(key);
//       console.log('Cached Data:', cachedData); // Log cached data
//       return cachedData;
//     },
//     onSuccess: (data) => {
//       console.log('Data fetched successfully:', data); // Log success
//       setCachedData(key, data);
//     },
//     cacheTime: 0, // Disable caching by react-query
//     staleTime: 0, // Force fetching on every mount
//   });
// };

// export default useFetchAPI;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Reusable API fetching hook
const useFetchAPI = (key, url) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await axios.get(url);
      // console.log('API Response:', response.data); // Log response
      return response.data;
    },
    cacheTime: 0, // Disable caching by react-query
    staleTime: 0, // Force fetching on every mount
  });
};

export default useFetchAPI;
