// src/services/loginService.js
import axios from 'axios';

import { get, post, put, del, tokenPost} from "./apiClient";

// Google 로그인 URL을 얻는 API 호출
export const googleOAuthRedirectUriGet3 = async (headers = {}) => {
  try {
    const url = await get('/o/oauth2/v2/auth?client_id=39094036388-q21u023nj26301t8tfbng2r2tkgu5c2i.apps.googleusercontent.com&redirect_uri=https://api.linkiving.com/login/oauth2/code/google&response_type=code&scope=email profile', {}, {}); // GET 요청 보내기
    return url; // 로그인 URL 반환
  } catch (error) {
    console.error('Google 로그인 URL을 가져오는 데 실패했습니다:', error);
    throw error; // 에러 발생 시 호출한 곳으로 에러 전달
  }
};

// Google 로그인 URL을 얻는 API 호출
export const googleOAuthRedirectUriGet2 = async (headers = {}) => {
  try {
    const url = await get('/oauth2/google', {}, {}); // GET 요청 보내기
    return url; // 로그인 URL 반환
  } catch (error) {
    console.error('Google 로그인 URL을 가져오는 데 실패했습니다:', error);
    throw error; // 에러 발생 시 호출한 곳으로 에러 전달
  }
};

// Google 로그인 URL을 얻는 API 호출
export const googleOAuthRedirectUriGet = async (headers = {}) => {
  try {
    const url = await get('/login/oauth2/google', {}, {}); // GET 요청 보내기
    return url; // 로그인 URL 반환
  } catch (error) {
    console.error('Google 로그인 URL을 가져오는 데 실패했습니다:', error);
    throw error; // 에러 발생 시 호출한 곳으로 에러 전달
  }
};

// Google OAuth2 콜백 처리
export const googleOAuthLoginGet = async (code) => {
  try {
    const response = await get('/oauth2/code/google?code='+code, {}, {}); // GET 요청 보내기
    return response; // 로그인 URL 반환
  } catch (error) {
    console.error('Google 로그인 실패', error);
    throw error; // 에러 발생 시 호출한 곳으로 에러 전달
  }
};

// 임시 로그인 함수 (accessToken, refreshToken을 포함한 응답 반환)
export const tempLogin = async (data) => {
  try {
    console.log("tempLogin:", data);

    const response = await post("/oauth2/signUpOrLogin", data, {});
    console.log('tempLogin response:', response);  // 응답을 제대로 출력해보세요

    // 응답 데이터에서 필요한 정보 반환
    if (response) {
      return response;  // response.data에 accessToken과 refreshToken이 포함되어 있음
    } else {
      throw new Error('응답 데이터가 없습니다.');
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;  // 에러 발생 시 호출한 곳으로 에러 전달
  }
};

// 토큰 갱신 (accessToken, refreshToken)
export const oAuth2RefreshPost = async () => {
  try {
    const response = await tokenPost("/oauth2/refresh", {}, {});
    console.log('tempLogin response:', response);  // 응답을 제대로 출력해보세요

    // 응답 데이터에서 필요한 정보 반환
    if (response) {
      return response // 토큰 저장
    } else {
      throw new Error('응답 데이터가 없습니다.');
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;  // 에러 발생 시 호출한 곳으로 에러 전달
  }
};