import axios from 'axios';

const devApi = axios.create({
  baseURL: 'https://dev.to/api',
  // headers: {
  //   'api-key': process.env.NEXT_PUBLIC_DEV_TO_KEY,
  // },
});

export default devApi;
