import { tempLogin } from "./services/loginService"; // './' 추가
import store from "reduxAlias/store";
import { setTokens } from "reduxAlias/actions/authActions";

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

const initializeSidePanel = async () => {
  const state = store.getState();
  const { accessToken } = state.auth;

  if (accessToken) {
    console.log("이미 로그인됨, 기존 토큰 사용:", accessToken);
    return;
  }

  const loginData = {
    email: "mg0454@gmail.com",
    name: "성명근",
  };

  try {
    console.log("로그인 시도 중...");
    const response = await tempLogin(loginData);

    if (response.token.accessToken && response.token.refreshToken) {
      store.dispatch(setTokens(response.token.accessToken, response.token.refreshToken));
      console.log("로그인 성공! 토큰 저장 완료");
      console.log("acessToken:", response.token.accessToken);
    } else {
      console.error("로그인 응답에 문제가 있습니다.", response);
    }
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

const loadFormData = async () => {
  setLoadingState(true);

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Mock 데이터 로드

    console.log("Data loaded from API");
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

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOMContentLoaded 이벤트 발생");
  await initializeSidePanel(); // 로그인
  console.log("Side Panel 초기화 완료");
  await loadFormData(); // 데이터 로드
  console.log("Form 데이터 로드 완료");
});
