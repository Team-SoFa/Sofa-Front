console.log("SoFa Extension is running!");

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("Message received:", message); // 메시지 수신 확인
  
//   if (message.action === "openPopup") {
//     // 팝업 열기
//     chrome.action.openPopup();
//   }
  
//   if (message.action === "toggleIcon") {
//     if (message.isIconChanged) {
//       // 변경할 아이콘
//       chrome.action.setIcon({
//         path: {
//           "16": "assets/logo216.png",
//           "48": "assets/logo248.png",
//           "128": "assets/logo2128.png"
//         }
//       });
//     } else {
//       // 기본 아이콘
//       chrome.action.setIcon({
//         path: {
//           "16": "assets/logo16.png",
//           "48": "assets/logo48.png",
//           "128": "assets/logo128.png"
//         }
//       });
//     }
//   }
  
//   if (message.action === "openSidePanel") {
//     chrome.windows.getCurrent((window) => {
//       chrome.sidePanel.open({ windowId: window.id }).catch((error) => {
//         console.error("Error opening side panel:", error);
//       });
//     });
//   }
// });

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
  
  
  
// 확장 프로그램 설치 시 Side Panel 기본 동작 설정
chrome.runtime.onInstalled.addListener(() => {
  // 아이콘 클릭 시 Side Panel이 열리도록 설정
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
