console.log("SoFa Extension is running!");

const formElements = {
  title: document.getElementById("titleInput"),
  folder: document.getElementById("folderSelect"),
  tag: document.getElementById("tagInput"),
  summary: document.getElementById("autoSummary"),
  memo: document.getElementById("memoInput"),
};

const skeleton = document.getElementById("skeleton");
const form = document.getElementById("form");

// Mock API 통신 시뮬레이션 (3초 지연)
function loadFormData() {
  // Skeleton UI 표시
  skeleton.style.display = "block";
  form.style.display = "none";

  // 데이터 로드 시뮬레이션
  setTimeout(() => {
    console.log("Data loaded from API");

    // 예제 데이터
    formElements.title.value = "예제 제목";
    formElements.folder.value = "폴더 1";
    formElements.tag.value = "태그 예제";
    formElements.summary.value = "자동 생성된 요약";
    formElements.memo.value = "사용자 메모";

    // Skeleton UI 숨기고 폼 표시
    skeleton.style.display = "none";
    form.style.display = "block";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", loadFormData);

// 폼 업데이트 이벤트 핸들러
document.addEventListener("input", () => {
  console.log("Form data updated:");
  console.log({
    title: formElements.title.value,
    folder: formElements.folder.value,
    tag: formElements.tag.value,
    summary: formElements.summary.value,
    memo: formElements.memo.value,
  });
});
