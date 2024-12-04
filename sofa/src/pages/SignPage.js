import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";  // Redux 관련 hooks
import { setTokens } from "../redux/actions/authActions"; // 액션 임포트
import "../components/Layout/HeaderStyle.css";
import "./onBoarding-layout.css";
import Button from "../components/Button/Button";
import { tempLogin } from "../services/loginService"; // Google 로그인 서비스 호출
import { folderGet, folderPost, folderDelete, folderPut} from "../services/folderService";
import { put } from "../services/apiClient";
import { linkCardPost } from "../services/linkCardService";
import { settingGet, settingPatch } from "../services/settingService";

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
  
  // 임시 로그인 함수 호출 핸들러
  const handleGoogleLogin = async () => {
    try {
      const headers = {
        "email": "mg0454@gmail.com",
        "name": "성명근"
      };
      const response = await tempLogin(headers);  // tempLogin 호출
  
      console.log('Google Login Response:', response);  // 응답을 제대로 확인
  
      // 응답에서 accessToken, refreshToken 추출
      if (response && response.accessToken && response.refreshToken) {
        dispatch(setTokens(response.accessToken, response.refreshToken)); // 토큰 저장
        console.log('로그인 성공!');  // 성공 메시지 설정
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
      const headers = {
        "name": encodeURIComponent("아무개")
      };
      const response = await folderPost(headers);
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
      const headers = {
        "name": "김데데"
      };
      const response = await folderPut(headers, lastFolder.id);
      console.log('folderPut response:', response);  // 응답 값 확인
    } catch (err) {
      console.error('폴더 추가 실패:', err);
    }
  };

  // 링크 추가 핸들러
  const hanldeLinkCardPost = async () => {
    try {
      const headers = {
        "title": "아무개",
        "url": "www.naver.com",
        "folderId": "TmxeMycIzgLMj_Ao3dDcfg==",
        "tagList": [
          {
            "id": 0,
            "tagType": "CUSTOM"
          }
        ],
        "memo": "개똥벌레",
        "summary": "개똥벌레"
      };
      const response = await linkCardPost(headers);
      console.log('linkCardPost response:', response);  // 응답 값 확인
    
    } catch (err) {
      console.error('폴더 추가 실패:', err);
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
