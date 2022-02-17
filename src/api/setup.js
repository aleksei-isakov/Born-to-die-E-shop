import axios from 'axios';
import { BASE_URL } from '@/constants.js';

const HEADERS = {
  'Content-Type': 'application/json'
};
const instance = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: HEADERS
});

export default instance;
