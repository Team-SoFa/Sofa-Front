import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";  // Redux 관련 hooks
import { setTokens } from "../redux/actions/authActions"; // 액션 임포트
import "../components/Layout/HeaderStyle.css";
import "./onBoarding-layout.css";
import Button from "../components/Button/Button";
import { tempLogin } from "../services/loginService"; // Google 로그인 서비스 호출
import { folderGet, folderPost, folderDelete, folderPut} from "../services/folderService";
import { put } from "../services/apiClient";
import { linkCardPost, linkCardAiPost, linkCardListGet } from "../services/linkCardService";
import { settingGet, settingPatch } from "../services/settingService";
import { memberGet } from "../services/memberService";

const ImagePlaceholder = ({ width, height }) => {
  const placeholderStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className="image-placeholder" style={placeholderStyle}>
      이미지 자리 표시지
    </div>
  );
};

const SignPage = () => {
  const dispatch = useDispatch();  // dispatch 사용
  
  // 1. 컴포넌트 내부에서 folderList를 상태로 관리
  const [folderList, setFolderList] = useState([]); // 초기값은 빈 배열로 설정
  const [linkCardListDetail, setLinkCardListDetail] = useState([]); // 초기값은 빈 배열로 설정

  // 임시 로그인 함수 호출 핸들러
  const handleGoogleLogin = async () => {
    try {
      const data = {
        "email": "mg0454@gmail.com",
        "name": "성명근"
      };

      console.log("handleGoogleLogin:", data);

      const response = await tempLogin(data);  // tempLogin 호출
  
      console.log('Google Login Response:', response);  // 응답을 제대로 확인
  
      // 응답에서 accessToken, refreshToken 추출
      if (response && response.accessToken && response.refreshToken) {
        dispatch(setTokens(response.accessToken, response.refreshToken)); // 토큰 저장
        console.log('로그인 성공!');  // 성공 메시지 설정
        hanldeMemberGet();
      } else {
        console.log('로그인 응답에 문제가 있습니다.');  // 응답이 없거나 이상할 때 처리
      }
    } catch (err) {
      console.log('Login Error:', err);
    } finally {
      console.log('로딩 종료');  // 로딩 상태 종료
    }
  };

  // 폴더 추가 핸들러
  const hanldeFolderPost = async () => {
    try {
      const data = {
        "name": "ㅗㅗㅗ"
      };

      console.log("hanldeFolderPost:", data);

      const response = await folderPost(data);

      console.log('folderPost response:', response);  // 응답 값 확인
      
      if (response && response.floderList) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        setFolderList(response.floderList);
      }
    } catch (err) {
      console.error('폴더 추가 실패:', err);
    }
  };

  // 폴더 조회 핸들러
  const hanldeFolderGet = async () => {
    try {
      const headers = {};
      const response = await folderGet();

      if (response && response.floderList) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        setFolderList(response.floderList);  
      }
      console.log('폴더 조회 응답:', response);
    } catch (err) {
      console.log('폴더 조회 실패!');
    } finally {
      console.log('로딩 종료');  // 로딩 상태 종료
    }
  };

  // 폴더 삭제 핸들러
  const hanldeFolderDelete = async () => {
    const lastFolder = folderList.length > 0 ? folderList[folderList.length - 1] : null;

    if (!lastFolder) {
      console.log('삭제할 폴더가 없습니다.');  // 폴더가 없음을 로그로 출력
      return;  // early return으로 함수 종료
    }

    console.log(lastFolder.id);

    try {
      const headers = {};
      const response = await folderDelete(headers, lastFolder.id);

      console.log('폴더 삭제 응답:', response);

      // 폴더 삭제 후 폴더 목록 갱신
      hanldeFolderGet();
    } catch (err) {
      console.log(err);
      console.log('폴더 삭제 실패!');
    } finally {
      console.log('로딩 종료');  // 로딩 상태 종료
    }
  };

  // 폴더 수정 핸들러
  const hanldeFolderPut = async () => {
    const lastFolder = folderList.length > 0 ? folderList[folderList.length - 1] : null;

    try {
      const data = {
        "name": "김데데"
      };
      const response = await folderPut(data, lastFolder.id);
      console.log('folderPut response:', response);  // 응답 값 확인
    } catch (err) {
      console.error('폴더 추가 실패:', err);
    }
  };

  // 링크 추가 핸들러
  const hanldeLinkCardPost = async () => {
    try {
      console.log(linkCardListDetail);
      const response = await linkCardPost(linkCardListDetail);
      console.log('linkCardPost response:', response);  // 응답 값 확인
    
    } catch (err) {
      console.error('폴더 추가 실패:', err);
    }
  };

  const handleLinkCardAiPost = async () => {
    try {
      // 임의의 URL을 설정
      const url = "https://velog.io/@anhesu11/소프트웨어-공학-내용-정리2";
  
      // URL에서 이미지 URL 추출
      const imageUrl = await fetchImageUrlFromPage(url);
  
      // 헤더에 이미지 URL과 URL 추가
      const data = {
        "url": url,
        "imageUrl": imageUrl,
      };
  
      console.log('추출된 이미지 URL:', imageUrl);
  
      // API 요청 보내기 (예시: linkCardAiPost)
      const response = await linkCardAiPost(data);

      if (response) {
        // 응답 데이터를 변환
        // response가 객체일 경우 변환
        const transformedData = {
          title: response.title || "Default Title",
          url: response.url || url, // 응답 데이터의 URL 또는 기본 URL
          folderId: response.folder?.id || "default-folder-id", // 폴더 ID
          tagList: response.tags?.map(tag => ({
            id: tag.id || 0,
            tagType: tag.tagType || "AI/CUSTOM",
          })) || [],
          memo: "Default memo text", // 기본 메모 추가
          summary: response.summary || "Default summary",
        };
      
        // 상태 업데이트
        setLinkCardListDetail([transformedData]); // 배열 형태로 상태에 저장
        console.log('가공된 데이터:', transformedData);
      }
    } catch (err) {
      console.error('링크카드 생성 실패:', err);
    }
  };

    // 링크카드 조회 핸들러
    const hanldeLinkCardListGet = async () => {
      try {
        const lastFolder = folderList.length > 0 ? folderList[folderList.length - 1] : null;

        const response = await linkCardListGet(
          lastFolder.id,
          "RECENTLY_SAVED",
          "ASCENDING",
          0,
          10
        );
        console.log('링크카드 리스트 조회 응답:', response);
      } catch (err) {
        console.log('링크카드 리스트 실패!');
      } finally {
        console.log('로딩 종료');  // 로딩 상태 종료
      }
    };

  // 링크 추가 핸들러
  const hanldeSettingGet = async () => {
    try {
      const headers = {
        "encryptedId": "string",
        "isRemindAlarm": false,
        "isRecommendAlarm": true,
        "isNoticeAlarm": true
      };
      const response = await settingGet(headers);
      console.log('settingGet response:', response);  // 응답 값 확인
    
    } catch (err) {
      console.error('설정 조회 실패:', err);
    }
  };

  // 링크 추가 핸들러
  const hanldeSettingPatch = async () => {
    try {
      const headers = {};
      const response = await settingPatch(headers);
      console.log('settingPatch response:', response);  // 응답 값 확인
    
    } catch (err) {
      console.error('설정 조회 실패:', err);
    }
  };
  
  const fetchImageUrlFromPage = async (url) => {
    try {
      const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
      const targetUrl = url;
  
      const response = await fetch(proxyUrl + targetUrl);
      const html = await response.text(); // HTML 텍스트로 변환
  
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
      // <meta> 태그에서 이미지 URL 추출 (OG 이미지 등)
      let imageUrl = doc.querySelector('meta[property="og:image"]')?.content;
  
      if (!imageUrl) {
        // <img> 태그에서 src 추출
        imageUrl = doc.querySelector('img')?.src;
      }
  
      if (imageUrl) {
        return imageUrl; // 이미지 URL 반환
      } else {
        throw new Error('이미지를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('이미지 URL 추출 실패:', error);
      throw error;
    }
  }; 

  // 폴더 조회 핸들러
  const hanldeMemberGet = async () => {
    try {
      const headers = {};
      const response = await memberGet();

      console.log('멤버 조회 응답:', response);
    } catch (err) {
      console.log('멤버 조회 실패!');
    } finally {
      console.log('로딩 종료');  // 로딩 상태 종료
    }
  };
    
  return (
    <div className="signpage">
      <header className="header">
        <img
          className="logo"
          src="example.png"
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </header>
      <main className="sign-main-style">
        <div className="image-section">
          <ImagePlaceholder width={362} height={320} /> 
        </div>
        <div className="text-section">
          <h1 className="sign-slogan">서비스 메인 슬로건 코멘트</h1>
          <p>서비스 서브 슬로건 및 기타 설명</p>
          <div className="sign-text-button-wrapper">
            <Button
              label="Google 계정으로 로그인"
              onClick={handleGoogleLogin} 
            />
            <Button
              label="폴더추가"
              onClick={hanldeFolderPost}
            />
            <Button
              label="폴더조회"
              onClick={hanldeFolderGet}
            />
            <Button
              label="폴더삭제"
              onClick={hanldeFolderDelete}
            />
            <Button
              label="폴더수정"
              onClick={hanldeFolderPut}
            />
            <Button
              label="링크카드추가"
              onClick={hanldeLinkCardPost}
            />
            <Button
              label="링크카드Ai생성"
              onClick={handleLinkCardAiPost}
            />
            <Button
              label="링크카드리스트조회"
              onClick={hanldeLinkCardListGet}
            />
            <Button
              label="설정조회"
              onClick={hanldeSettingGet}
            />
            <Button
              label="설정변경"
              onClick={hanldeSettingPatch}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignPage;
