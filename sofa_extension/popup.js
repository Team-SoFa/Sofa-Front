let isIconChanged = false;

document.getElementById("clickButton").addEventListener("click", () => {
  isIconChanged = !isIconChanged;
  chrome.runtime.sendMessage({ action: "toggleIcon", isIconChanged });
});
