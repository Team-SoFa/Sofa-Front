import { get, post, put, del, tokenGet} from "./apiClient";

// 현재 로그인한 사용자 정보 조회
export const memberGet = async (params = {}) => {
    try {
      const url = await tokenGet('/member', params); // GET 요청 보내기
      return url; // 로그인 URL 반환
    } catch (error) {
      console.error('Google 로그인 URL을 가져오는 데 실패했습니다:', error);
      throw error; // 에러 발생 시 호출한 곳으로 에러 전달
    }
  };