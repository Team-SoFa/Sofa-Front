console.log("SoFa Extension is running!");

// 메시지 리스너
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in background:", message);

  if (message.action === "toggleIcon") {
    if (message.isIconChanged) {
      chrome.action.setIcon({
        path: {
          "16": "assets/16/logo_png2_16.png",
          "48": "assets/48/logo_png2_48.png",
          "128": "assets/128/logo_png2_128.png",
        },
      });
    } else {
      chrome.action.setIcon({
        path: {
          "16": "assets/16/logo_png1_16.png",
          "48": "assets/48/logo_png1_48.png",
          "128": "assets/128/logo_png1_128.png",
        },
      });
    }
  }

  if (message.action === "openSidePanel") {
    console.log("Checking for existing tokens...");
  
    // Chrome Storage에서 토큰 확인
    chrome.storage.local.get(["accessToken", "refreshToken"], (tokens) => {
      const { accessToken, refreshToken } = tokens;
  
      if (accessToken && refreshToken) {
        // 토큰이 이미 있는 경우
        console.log("Tokens already exist. Skipping popup.");
        sendResponse({ status: "Tokens already exist", tokens });
      } else {
        // 토큰이 없는 경우 팝업 열기
        const loginUrl = "https://linkiving.com/signpage";
        console.log("No tokens found. Opening popup window at:", loginUrl);
  
        try {
          // Windows API를 사용하여 팝업 창 열기
          chrome.windows.create(
            {
              url: loginUrl,
              type: "popup", // 팝업 창으로 열기
              width: 400,
              height: 600,
            },
            (newWindow) => {
              console.log("New popup window opened with ID:", newWindow.id);
  
              const checkInterval = setInterval(() => {
                chrome.tabs.query({ windowId: newWindow.id }, (tabs) => {
                  if (tabs.length === 0) {
                    console.warn("Popup window was closed.");
                    clearInterval(checkInterval);
                    return;
                  }
  
                  // 첫 번째 탭에서 localStorage의 토큰 가져오기
                  chrome.scripting.executeScript(
                    {
                      target: { tabId: tabs[0].id },
                      func: () => {
                        return {
                          accessToken: localStorage.getItem("accessToken"),
                          refreshToken: localStorage.getItem("refreshToken"),
                        };
                      },
                    },
                    (results) => {
                      if (!results || !results[0]?.result) {
                        console.warn("Waiting for tokens...");
                        return;
                      }
  
                      const { accessToken, refreshToken } = results[0].result;
                      if (accessToken && refreshToken) {
                        console.log("Tokens found:", { accessToken, refreshToken });
  
                        // Chrome Storage에 토큰 저장
                        chrome.storage.local.set({ accessToken, refreshToken }, () => {
                          console.log("Tokens saved to Chrome Storage");
                        });
  
                        clearInterval(checkInterval);
  
                        // 팝업 창 닫기
                        chrome.windows.remove(newWindow.id, () => {
                          console.log("Popup window closed after retrieving tokens.");
                        });
                      }
                    }
                  );
                });
              }, 1000);
            }
          );
        } catch (error) {
          console.error("Error opening popup window:", error);
          sendResponse({ status: "Error", error: error.message });
        }
      }
    });
  
    // 비동기 처리를 위해 true 반환
    return true;
  }
  
});

// 확장 프로그램 설치 시 Side Panel 기본 동작 설정
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed: Setting default Side Panel behavior");

  // 아이콘 클릭 시 Side Panel이 열리도록 설정
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
