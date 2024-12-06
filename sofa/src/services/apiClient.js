import axios from 'axios';
import store from '../redux/store'; // store 가져오기

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 타임아웃 설정
  headers: {
    "Content-Type": "application/json",
  },
});

// Redux에서 accessToken을 가져오는 함수
const getAccessToken = () => {
  const state = store.getState();  // store 상태 가져오기
  return state.auth.accessToken;   // authReducer에서 관리하는 accessToken 가져오기
};

// GET 요청을 위한 함수 (토큰 없는 기본 GET 요청)
export const get = async (url, params = {}, headers = {}) => {
  const response = await apiClient.get(url, { params, headers });
  return response.data;
};

// POST 요청을 위한 함수 (토큰 없는 기본 POST 요청)
export const post = async (url, data = {}, headers = {}) => {
  console.log("Final Headers:", headers);
  console.log('data:', data);
  const response = await apiClient.post(url, data, { headers });
  return response.data;
};

// PUT 요청을 위한 함수 (토큰 없는 기본 PUT 요청)
export const put = async (url, data = {}, headers = {}) => {
  const response = await apiClient.put(url, data, { headers });
  return response.data;
};

// DELETE 요청을 위한 함수 (토큰 없는 기본 DELETE 요청)
export const del = async (url, headers = {}) => {
  const response = await apiClient.delete(url, { headers });
  return response.data;
};

// GET 요청을 위한 함수 (accessToken이 필요한 GET 요청)
export const tokenGet = async (url, params = {}, headers = {}) => {
  const accessToken = getAccessToken();

  // accessToken이 있으면 Authorization 헤더 추가
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
    console.log(accessToken);
  }
  const response = await apiClient.get(url, { params, headers });
  return response.data;
};

// POST 요청을 위한 함수 (accessToken이 필요한 POST 요청)
export const tokenPost = async (url, data = {}, headers = {}) => {
  const accessToken = getAccessToken();
  
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }  
  const response = await apiClient.post(url, data, { headers });
  return response.data;
};

// PUT 요청을 위한 함수 (accessToken이 필요한 PUT 요청)
export const tokenPut = async (url, data = {}, headers = {}) => {
  const accessToken = getAccessToken();

  // accessToken이 있으면 Authorization 헤더 추가
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const response = await apiClient.put(url, data, { headers });
  
  return response.data;
};

// DELETE 요청을 위한 함수 (accessToken이 필요한 DELETE 요청)
export const tokenDel = async (url, headers = {}) => {
  const accessToken = getAccessToken();

  // accessToken이 있으면 Authorization 헤더 추가
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const response = await apiClient.delete(url, { headers });
  return response.data;
};

// Patch 요청을 위한 함수 (accessToken이 필요한 DELETE 요청)
export const tokenPatch = async (url, data = {}, headers = {}) => {
  const accessToken = getAccessToken();

  // accessToken이 있으면 Authorization 헤더 추가
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const response = await apiClient.patch(url, data, { headers });
  return response.data;
};
