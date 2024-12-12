/* global chrome */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // Redux 관련 hooks
import { setTokens } from "../redux/actions/authActions"; // 액션 임포트
import Button from "../components/Button/Button";
import Header from "../components/Layout/Header";

import "../components/Layout/HeaderStyle.css";
import "./onBoarding-layout.css";
import {
  tempLogin,
  googleOAuthRedirectUriGet2,
  googleOAuthLoginGet,
} from "../services/oAuthService"; // Google 로그인 서비스 호출
import {
  folderGet,
  folderPost,
  folderDelete,
  folderPut,
} from "../services/folderService";
import {
  linkCardGet,
  linkCardPost,
  linkCardAiPost,
  linkCardAllListGet,
  linkCardFolderListGet,
  linkCardDelete,
  linkCardInfoPatch,
  linkCardEnterPost,
} from "../services/linkCardService";
import { settingGet, settingPatch } from "../services/settingService";
import { memberGet } from "../services/memberService";
import {
  recycleBinGet,
  recycleBinPost,
  recycleBinDel,
} from "../services/recycleBinService";
import { aiTagsAiGet, aiTagsDelete } from "../services/tagSerivce";
import { searchGet, searchTagsGet } from "../services/searchService";

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
  const dispatch = useDispatch(); // dispatch 사용

  // 1. 컴포넌트 내부에서 folderList를 상태로 관리
  const [folderList, setFolderList] = useState([]); // 초기값은 빈 배열로 설정
  const [linkCardListDetail, setLinkCardListDetail] = useState([]); // 초기값은 빈 배열로 설정
  const [linkCardList, setLinkCardList] = useState([]); // 초기값은 빈 배열로 설정
  const [recycleBinList, setRecycleBinList] = useState([]); // 초기값은 빈 배열로 설정
  const [tagList, setTagList] = useState([]); // 초기값은 빈 배열로 설정
  const [tagsId, setTagsId] = useState(["1", "2", "3"]); // 예시 tagsId 배열

  // 임시 로그인 함수 호출 핸들러
  const handleGoogleLogin = async () => {
    try {
      const response = await googleOAuthRedirectUriGet2(); // tempLogin 호출

      console.log("Google Login Response:", response); // 응답을 제대로 확인

      const popup = window.open(response, "_blank", "width=500,height=600");

      const checkPopup = setInterval(() => {
        try {
          if (popup.closed) {
            clearInterval(checkPopup);
            console.log("Popup closed by user.");
          }

          // 리다이렉트된 URL 확인 (도메인이 같아야 함)
          if (popup.location.href.includes("https://linkiving.com")) {
            const currentUrl = popup.location.href;
            console.log("Final URL:", currentUrl);

            // 필요한 정보 추출
            const params = new URLSearchParams(new URL(currentUrl).search);
            const code = params.get("code");
            console.log("code:", code);

            popup.close();
            clearInterval(checkPopup);

            hanldegoogleOAuthLoginGet(code);
          }
        } catch (error) {
          // 다른 도메인일 경우 에러 발생 (CORS 제한)
          console.log("Waiting for redirection...", error);
        }
      }, 500);
    } catch (err) {
      console.log("Login Error:", err);
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  const hanldegoogleOAuthLoginGet = async (data) => {
    try {
      const response = await googleOAuthLoginGet(data);

      console.log("googleOAuthLoginGet response:", response); // 응답 값 확인

      // 응답에서 accessToken, refreshToken 추출
      if (response) {
        console.log(response.token.accessToken, response.token.refreshToken); // 토큰 저장

        dispatch(
          setTokens(response.token.accessToken, response.token.refreshToken)
        ); // 토큰 저장

        console.log("로그인 성공!"); // 성공 메시지 설정
        hanldeMemberGet();

      }
    } catch (err) {
      console.error("googleOAuthLoginGet 실패:", err);
    }
  };

  // 임시 로그인 함수 호출 핸들러
  // const handleGoogleLogin = async () => {
  //   try {
  //     const data = {
  //       email: "mg0454@gmail.com",
  //       name: "성명근",
  //     };

  //     console.log("handleGoogleLogin:", data);

  //     const response = await tempLogin(data); // tempLogin 호출

  //     console.log("Google Login Response:", response); // 응답을 제대로 확인

  //     // 응답에서 accessToken, refreshToken 추출
  //     if (
  //       response &&
  //       response.token.accessToken &&
  //       response.token.refreshToken
  //     ) {
  //       console.log(response.token.accessToken, response.token.refreshToken); // 토큰 저장

  //       dispatch(
  //         setTokens(response.token.accessToken, response.token.refreshToken)
  //       ); // 토큰 저장

  //       console.log("로그인 성공!"); // 성공 메시지 설정
  //       hanldeMemberGet();
  //     } else {
  //       console.log("로그인 응답에 문제가 있습니다."); // 응답이 없거나 이상할 때 처리
  //     }
  //   } catch (err) {
  //     console.log("Login Error:", err);
  //   } finally {
  //     console.log("로딩 종료"); // 로딩 상태 종료
  //   }
  // };

  // 폴더 추가 핸들러
  const hanldeFolderPost = async () => {
    try {
      const data = {
        name: "ㅗㅗㅗ",
      };

      console.log("hanldeFolderPost:", data);

      const response = await folderPost(data);

      console.log("folderPost response:", response); // 응답 값 확인

      if (response && response.folderList) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        setFolderList(response.folderList);
      }
    } catch (err) {
      console.error("폴더 추가 실패:", err);
    }
  };

  // 폴더 조회 핸들러
  const hanldeFolderGet = async () => {
    try {
      const headers = {};
      const response = await folderGet();

      if (response && response.folderList) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        setFolderList(response.folderList);
        console.log(folderList[0].id);
      }
      console.log("폴더 조회 응답:", response);
    } catch (err) {
      console.log("폴더 조회 실패!");
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  // 폴더 삭제 핸들러
  const hanldeFolderDelete = async () => {
    const lastFolder =
      folderList.length > 0 ? folderList[folderList.length - 1] : null;

    if (!lastFolder) {
      console.log("삭제할 폴더가 없습니다."); // 폴더가 없음을 로그로 출력
      return; // early return으로 함수 종료
    }

    console.log(lastFolder.id);

    try {
      const headers = {};
      const response = await folderDelete(headers, lastFolder.id);

      console.log("폴더 삭제 응답:", response);

      // 폴더 삭제 후 폴더 목록 갱신
      hanldeFolderGet();
    } catch (err) {
      console.log(err);
      console.log("폴더 삭제 실패!");
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  // 폴더 수정 핸들러
  const hanldeFolderPut = async () => {
    const lastFolder =
      folderList.length > 0 ? folderList[folderList.length - 1] : null;

    try {
      const data = {
        name: "김데데",
      };
      const response = await folderPut(data, lastFolder.id);
      console.log("folderPut response:", response); // 응답 값 확인
    } catch (err) {
      console.error("폴더 수정 실패:", err);
    }
  };

  // 링크 추가 핸들러
  const hanldeLinkCardPost = async () => {
    try {
      console.log(linkCardListDetail);
      const response = await linkCardPost(linkCardListDetail);
      console.log("linkCardPost response:", response); // 응답 값 확인
    } catch (err) {
      console.error("링크카드 추가 실패:", err);
    }
  };

  // const fetchImageUrlFromPage = async (url) => {
  //   try {
  //     const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
  //     const targetUrl = url;
  //     const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  //     const response = await fetch(proxyUrl + targetUrl, {
  //       origin: API_BASE_URL
  //     });
  //     const html = await response.text(); // HTML 텍스트로 변환

  //     const parser = new DOMParser();
  //     const doc = parser.parseFromString(html, 'text/html');

  //     // <meta> 태그에서 이미지 URL 추출 (OG 이미지 등)
  //     let imageUrl = doc.querySelector('meta[property="og:image"]')?.content;

  //     if (!imageUrl) {
  //       // <img> 태그에서 src 추출
  //       imageUrl = doc.querySelector('img')?.src;
  //     }

  //     if (imageUrl) {
  //       return imageUrl; // 이미지 URL 반환
  //     } else {
  //       throw new Error('이미지를 찾을 수 없습니다.');
  //     }
  //   } catch (error) {
  //     console.error('이미지 URL 추출 실패:', error);
  //     throw error;
  //   }
  // };

  const handleLinkCardAiPost = async () => {
    try {
      // 임의의 URL을 설정
      const url = "https://velog.io/@anhesu11/소프트웨어-공학-내용-정리2";

      // 헤더에 이미지 URL과 URL 추가
      const data = {
        url: url,
      };

      // API 요청 보내기 (예시: linkCardAiPost)
      const response = await linkCardAiPost(data);

      console.log(response);
      if (response) {
        // 응답 데이터를 변환
        // response가 객체일 경우 변환
        const transformedData = {
          title: response.title || "Default Title",
          url: response.url || url, // 응답 데이터의 URL 또는 기본 URL
          folderId: response.folder?.id || "default-folder-id", // 폴더 ID
          tagList:
            response.tags?.map((tag) => ({
              id: tag.id || 0,
              tagType: tag.tagType || "AI/CUSTOM",
            })) || [],
          memo: "Default memo text", // 기본 메모 추가
          summary: response.summary || "Default summary",
        };

        // 상태 업데이트
        setLinkCardListDetail(transformedData); // 배열 형태로 상태에 저장
        console.log("가공된 데이터:", transformedData);
      }
    } catch (err) {
      console.error("링크카드 생성 실패:", err);
    }
  };

  // 링크카드 폴더 조회 핸들러
  const handlelinkCardFolderListGet = async () => {
    try {
      // const lastFolder = folderList.length > 0 ? folderList[folderList.length - 1] : null;

      // const response = await linkCardFolderListGet(
      //   lastFolder.id,
      //   "RECENTLY_SAVED",
      //   "ASCENDING",
      //   0,
      //   10
      // );
      // console.log('링크카드 리스트 조회 응답:', response);
      // if (response) {
      //   console.log(response.data);
      //   setLinkCardList(response.data);
      // }
      const allResponses = await Promise.all(
        folderList.map(async (folder) => {
          const response = await linkCardFolderListGet(
            folder.id, // 현재 폴더 ID 사용
            "RECENTLY_SAVED",
            "ASCENDING",
            0,
            10
          );
          console.log(response);
          return { folderId: folder.id, data: response.data }; // 각 폴더의 데이터 반환
        })
      );

      // 각 폴더의 응답 데이터 확인
      console.log("모든 폴더의 링크카드 조회 응답:", allResponses);

      // 링크카드 리스트 업데이트
      setLinkCardList(allResponses); // 필요에 따라 병합하거나 구조를 조정
    } catch (err) {
      console.log("링크카드 리스트 실패!");
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  // 링크카드 전체 조회 핸들러
  const handlelinkCardAllListGet = async () => {
    try {
      const queryString = tagsId.map((id) => `&tagsId=${id}`).join("");

      // const response = await searchGet(
      //   0,
      //   queryString,
      //   "string",
      //   0,
      //   0,
      //   10,
      //   "RECENTLY_SAVED",
      //   "ASCENDING"
      // );
      const response = await linkCardAllListGet(
        "RECENTLY_SAVED",
        "ASCENDING",
        0,
        10
      );
      console.log("링크카드 리스트 조회 응답:", response);
      if (response) {
        console.log(response.data);
        setLinkCardList(response.data);
      }
    } catch (err) {
      console.log("링크카드 리스트 실패!");
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  // 링크카드 조회 핸들러
  const hanldeLinkCardGet = async (id) => {
    try {
      const lastLinkCard =
        linkCardList.length > 0 ? linkCardList[linkCardList.length - 1] : null;

      const response = await linkCardGet(id);
      console.log("hanldeLinkCardGet:", response);
      if (response) {
        // setLinkCardListDetail(response);
      }
    } catch (err) {
      console.log("hanldeLinkCardGet 실패!");
    } finally {
      console.log("hanldeLinkCardGet 종료"); // 로딩 상태 종료
    }
  };

  // 링크카드 방문 핸들러
  const hanldeLinkCardEnterPost = async () => {
    try {
      const lastLinkCard =
        linkCardList.length > 0 ? linkCardList[linkCardList.length - 1] : null;

      window.open(lastLinkCard.url);

      const response = await linkCardEnterPost(lastLinkCard.id);
      console.log("링크카드 방문:", response);
      if (response) {
        console.log(response);
      }
    } catch (err) {
      console.log("링크카드 리스트 실패!");
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  // 링크카드 삭제 핸들러
  const hanldeLinkCardDelete = async () => {
    const lastLinkCard =
      linkCardList.length > 0 ? linkCardList[linkCardList.length - 1] : null;

    if (!lastLinkCard) {
      console.log("삭제할 링크 카드가 없습니다."); // 폴더가 없음을 로그로 출력
      return; // early return으로 함수 종료
    }

    console.log("lastLinkCard.id", lastLinkCard.id);

    try {
      const headers = {};
      const response = await linkCardDelete(lastLinkCard.id);

      console.log("폴더 삭제 응답:", response);

      // 폴더 삭제 후 폴더 목록 갱신
      hanldeFolderGet();
    } catch (err) {
      console.log(err);
      console.log("폴더 삭제 실패!");
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  // 링크카드 수정 핸들러
  const hanldeLinkCardInfoPatch = async () => {
    const lastLinkCard =
      linkCardList.length > 0 ? linkCardList[linkCardList.length - 1] : null;

    if (!lastLinkCard) {
      console.log("수정할 링크 카드가 없습니다."); // 폴더가 없음을 로그로 출력
      return; // early return으로 함수 종료
    }

    console.log("lastLinkCard.id", lastLinkCard.id);

    try {
      const data = {
        title: "string",
        memo: "string",
        summary: "string",
      };

      const response = await linkCardInfoPatch(lastLinkCard.id, data);

      console.log("폴더 삭제 응답:", response);

      // 폴더 삭제 후 폴더 목록 갱신
      hanldeFolderGet();
    } catch (err) {
      console.log(err);
      console.log("폴더 삭제 실패!");
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  // 링크 추가 핸들러
  const hanldeSettingGet = async () => {
    try {
      const headers = {
        encryptedId: "string",
        isRemindAlarm: false,
        isRecommendAlarm: true,
        isNoticeAlarm: true,
      };
      const response = await settingGet(headers);
      console.log("settingGet response:", response); // 응답 값 확인
    } catch (err) {
      console.error("설정 조회 실패:", err);
    }
  };

  // 링크 추가 핸들러
  const hanldeSettingPatch = async () => {
    try {
      const headers = {};
      const response = await settingPatch(headers);
      console.log("settingPatch response:", response); // 응답 값 확인
    } catch (err) {
      console.error("설정 조회 실패:", err);
    }
  };

  // 멤버 조회 핸들러
  const hanldeMemberGet = async () => {
    try {
      const headers = {};
      const response = await memberGet();

      console.log("멤버 조회 응답:", response);
    } catch (err) {
      console.log("멤버 조회 실패!");
    } finally {
      console.log("로딩 종료"); // 로딩 상태 종료
    }
  };

  // 휴지통 복원 핸들러
  const hanldeRecyclePost = async () => {
    try {
      const lastrecycleBin =
        recycleBinList.length > 0
          ? recycleBinList[recycleBinList.length - 1]
          : null;
      const lastFolder =
        folderList.length > 0 ? folderList[folderList.length - 1] : null;
      console.log(lastFolder.id);
      const data = {
        folderId: lastFolder.id,
      };

      const response = await recycleBinPost(lastrecycleBin.id, data);

      console.log("hanldeRecyclePost 응답:", response);
    } catch (err) {
      console.log("hanldeRecyclePost 실패!");
    } finally {
      console.log("hanldeRecyclePost 종료"); // 로딩 상태 종료
    }
  };

  // 휴지통 삭제 핸들러
  const hanldeRecycleDelete = async () => {
    const lastrecycleBin =
      recycleBinList.length > 0
        ? recycleBinList[recycleBinList.length - 1]
        : null;

    console.log(lastrecycleBin.id);
    try {
      const response = await recycleBinDel(lastrecycleBin.id);

      console.log("hanldeRecycleDelete 응답:", response);
    } catch (err) {
      console.log("hanldeRecycleDelete 실패!");
    } finally {
      console.log("hanldeRecycleDelete 종료"); // 로딩 상태 종료
    }
  };

  // 휴지통 조회 핸들러
  const hanldeRecycleGet = async () => {
    try {
      const response = await recycleBinGet(
        "RECENTLY_DELETE",
        "ASCENDING",
        0,
        10
      );

      if (response) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        setRecycleBinList(response.data);
        console.log(response.data);
      }
      console.log("hanldeRecycleGet 응답:", response);
    } catch (err) {
      console.log("hanldeRecycleGet 실패!");
    } finally {
      console.log("hanldeRecycleGet 종료"); // 로딩 상태 종료
    }
  };

  // 태그 조회 핸들러
  const hanldeTagGet = async () => {
    try {
      const response = await aiTagsAiGet();

      if (response) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        setTagList(response);
        console.log(response);
      }
      console.log("hanldeTagGet 응답:", response);
    } catch (err) {
      console.log("hanldeTagGet 실패!");
    } finally {
      console.log("hanldeTagGet 종료"); // 로딩 상태 종료
    }
  };

  // 태그 삭제 핸들러
  const hanldeTagDelete = async () => {
    const lastTag = tagList.length > 0 ? tagList[tagList.length - 1] : null;

    try {
      const response = await aiTagsDelete(lastTag);

      if (response) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        setTagList(response);
        console.log(response);
      }
      console.log("hanldeTagDelete 응답:", response);
    } catch (err) {
      console.log("hanldeTagDelete 실패!");
    } finally {
      console.log("hanldeTagDelete 종료"); // 로딩 상태 종료
    }
  };

  // 태그 삭제 핸들러
  const handleSearchTagsGet = async () => {
    try {
      const response = await searchTagsGet("test");

      if (response) {
        // 새롭게 받아온 폴더 리스트를 상태에 저장
        console.log(response);
      }
      console.log("hanldeTagDelete 응답:", response);
    } catch (err) {
      console.log("hanldeTagDelete 실패!");
    } finally {
      console.log("hanldeTagDelete 종료"); // 로딩 상태 종료
    }
  };

  const signpageStyle = {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "#F5FBFF",
    paddingTop: "1rem",
    height: "100%",
  };
  const waveStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: "-1",
  };

  return (
    <div className="signpage" style={signpageStyle}>
      <Header />
      <main
        className="sign-main-style"
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "0",
        }}
      >
        <div className="waves">
          <img src="wave1.png" style={waveStyle} />
          <img src="wave2.png" style={waveStyle} />
          <img src="wave3.png" style={waveStyle} />
        </div>
        <img
          style={{ height: "7rem", marginBottom: "2rem", position: "relative" }}
          className="logo"
          src="signpage-logo.png"
          alt="logo"
          onClick={() => window.location.reload()}
        />
        <Button
          imgSrc="google-logo.png"
          label="Google 계정으로 로그인"
          onClick={handleGoogleLogin}
        />
      </main>
    </div>
  );
};

export default SignPage;
