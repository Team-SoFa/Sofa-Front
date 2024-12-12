let isIconChanged = false;

document.getElementById("clickButton").addEventListener("click", () => {
  isIconChanged = !isIconChanged;
  chrome.runtime.sendMessage({ action: "toggleIcon", isIconChanged });
});

// popup.js
window.opener.postMessage(
  { type: "oauth", code: "your_authorization_code_here" },
  "chrome-extension://your-extension-id" // 확장 프로그램 ID
);
window.close();
