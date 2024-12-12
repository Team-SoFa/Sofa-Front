// Optional: Add logic to dynamically process or handle form data
const formElements = {
  title: document.getElementById("titleInput"),
  folder: document.getElementById("folderSelect"),
  tag: document.getElementById("tagInput"),
  summary: document.getElementById("autoSummary"),
  memo: document.getElementById("memoInput"),
};

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
