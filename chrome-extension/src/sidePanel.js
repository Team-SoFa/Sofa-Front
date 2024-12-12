import store from "reduxAlias/store";
import { setTokens } from "reduxAlias/actions/authActions";
import { memberGet } from "./services/memberService";
import { linkCardGet, linkCardPost, linkCardAiPost, linkCardAllListGet, linkCardFolderListGet, linkCardDelete, linkCardInfoPatch, linkCardEnterPost } from "./services/linkCardService";
import { oAuth2RefreshPost } from "./services/oAuthService";

chrome.runtime.sendMessage({ action: "openSidePanel" });

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

const handleLinkCardAiPost = async () => {
  try {
    // 현재 활성 탭의 URL 가져오기
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const encodedUrl = tabs[0]?.url; // 인코딩된 URL

    if (!encodedUrl) {
      console.error("활성 탭 URL을 가져올 수 없습니다.");
      return;
    }

    const url = decodeURIComponent(encodedUrl); // 디코딩된 URL
    console.log("Decoded URL:", url);

    // 헤더에 URL 추가
    const data = {
      url: url, // 디코딩된 URL 사용
    };

    // API 요청 보내기
    const response = await linkCardAiPost(data);

    console.log(response);
    if (response) {
      // 응답 데이터를 변환
      const transformedData = {
        title: response.title || "Default Title",
        url: response.url || url, // 디코딩된 URL 사용
        folderId: response.folder?.id || "default-folder-id", // 폴더 ID
        tagList: response.tags?.map(tag => ({
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

// Form Elements
const formElements = {
  title: document.getElementById("titleInput"),
  folder: document.getElementById("folderSelect"),
  tag: document.getElementById("tagInput"),
  summary: document.getElementById("autoSummary"),
  memo: document.getElementById("memoInput"),
};

const skeleton = document.getElementById("skeleton");
const form = document.getElementById("form");

let isLoading = true;

// UI 상태 토글
const toggleUI = () => {
  if (isLoading) {
    skeleton.style.display = "block";
    form.style.display = "none";
  } else {
    skeleton.style.display = "none";
    form.style.display = "block";
  }
};

const setLoadingState = (loading) => {
  isLoading = loading;
  toggleUI();
};

// Chrome Storage에서 저장된 토큰 가져오기
const initializeSidePanel = async () => {
  try {
    console.log("Chrome Storage에서 토큰 확인 중...");

    chrome.storage.local.get(["accessToken", "refreshToken"], (tokens) => {
      const { accessToken, refreshToken } = tokens;

      if (accessToken && refreshToken) {
        console.log("토큰 발견:", { accessToken, refreshToken });
        // Redux Store에 토큰 설정
        store.dispatch(setTokens(accessToken, refreshToken));
        console.log("Redux Store에 토큰 저장 완료");

        const response = oAuth2RefreshPost();
        response.then(data=>{
          store.dispatch(setTokens(data.accessToken,data.refreshToken));

          console.log("토큰 재저장 완료")
        });
        
        // 토큰이 있는 경우 멤버 조회 바로 호출 
        hanldeMemberGet();
        handleLinkCardAiPost();
      } else {
        console.warn("Chrome Storage에 저장된 토큰이 없습니다.");
      }
    });
  } catch (error) {
    console.error("Chrome Storage에서 토큰 가져오기 실패:", error);
  }
};

// Mock 데이터 로드
const loadFormData = async () => {
  setLoadingState(true);

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Mock 데이터 로드
    console.log("Data loaded from API");

    // Form 데이터 채우기
    formElements.title.value = "예제 제목";
    formElements.folder.value = "폴더 1";
    formElements.tag.value = "태그 예제";
    formElements.summary.value = "자동 생성된 요약";
    formElements.memo.value = "사용자 메모";
  } catch (error) {
    console.error("데이터 로드 실패:", error);
  } finally {
    setLoadingState(false);
  }
};

// 초기화 로직
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOMContentLoaded 이벤트 발생");
  await initializeSidePanel(); // Chrome Storage에서 저장된 토큰 가져오기
  console.log("Side Panel 초기화 완료");
  await loadFormData(); // 데이터 로드
  console.log("Form 데이터 로드 완료");
});
