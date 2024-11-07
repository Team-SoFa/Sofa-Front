// background.js
console.log("SoFa Extension is running!");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received:", message); // 메시지 수신 확인
    if (message.action === "openPopup") {
      chrome.action.openPopup();
    }
  });
  

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleIcon") {
      if (message.isIconChanged) {
        // 변경할 아이콘
        chrome.action.setIcon({
          path: {
            "16": "assets/16/logo_png2_16.png",
            "48": "assets/48/logo_png2_48.png",
            "128": "assets/128/logo_png2_128.png"
          }
        });
      } else {
        // 기본 아이콘
        chrome.action.setIcon({
          path: {
            "16": "assets/16/logo_png1_16.png",
            "48": "assets/48/logo_png1_48.png",
            "128": "assets/128/logo_png1_128.png"
          }
        });
      }
    }
  });
  
  
  