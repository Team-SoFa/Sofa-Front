// src/services/loginService.js
import { get, post, put, del} from "./apiClient";

// Google 로그인 URL을 얻는 API 호출
export const getGoogleLoginUrl = async (headers = {}) => {
  try {
    const url = await get('/login/oauth2/google', headers); // GET 요청 보내기
    return url; // 로그인 URL 반환
  } catch (error) {
    console.error('Google 로그인 URL을 가져오는 데 실패했습니다:', error);
    throw error; // 에러 발생 시 호출한 곳으로 에러 전달
  }
};

// 임시 로그인 함수 (accessToken, refreshToken을 포함한 응답 반환)
export const tempLogin = async (headers) => {
  try {
    const response = await post("/login/oauth2/signUpOrLogin", {}, { headers });
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


// 사용자 정보 업데이트 (PUT 요청 예시)
export const updateUserInfo = async (data, headers = {}) => {
  try {
    const response = await put('/user/update', data, headers); // PUT 요청 보내기 (사용자 정보 업데이트)
    return response; // 업데이트된 사용자 정보 반환
  } catch (error) {
    console.error('사용자 정보 업데이트에 실패했습니다:', error);
    throw error; // 에러 발생 시 호출한 곳으로 에러 전달
  }
};

// 사용자 삭제 (DELETE 요청 예시)
export const deleteUser = async (userId, headers = {}) => {
  try {
    const response = await del(`/user/${userId}`, headers); // DELETE 요청 보내기 (사용자 삭제)
    return response; // 삭제된 사용자 정보 반환
  } catch (error) {
    console.error('사용자 삭제에 실패했습니다:', error);
    throw error; // 에러 발생 시 호출한 곳으로 에러 전달
  }
};
