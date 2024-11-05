console.log("Content script is running");

// 화면에 버튼 추가
function createFloatingButton() {
  const button = document.createElement("button");
  button.innerText = "패널 열기";
  button.style.position = "fixed";
  button.style.right = "10px";
  button.style.top = "50%";
  button.style.transform = "translateY(-50%)";
  button.style.zIndex = "1000";
  button.style.padding = "10px 15px";
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";

  // 버튼 클릭 시 Side Panel 열기 메시지 전송
  button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "openSidePanel" });
  });

  document.body.appendChild(button);
}

createFloatingButton();
