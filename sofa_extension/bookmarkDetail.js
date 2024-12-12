document.addEventListener("DOMContentLoaded", () => {
    const bookmarkDetail = document.querySelector(".bookmark-detail");
    const tagsContainer = document.getElementById("tags-container");
  
    const bookmarkTitle = document.getElementById("bookmark-title");
    const titleInput = document.getElementById("title-input");
    const editTitleBtn = document.getElementById("edit-title-btn");
  
    const bookmarkSummary = document.getElementById("bookmark-summary");
    const summaryInput = document.getElementById("summary-input");
    const editSummaryBtn = document.getElementById("edit-summary-btn");
  
    const bookmarkMemo = document.getElementById("bookmark-memo");
    const memoInput = document.getElementById("memo-input");
    const editMemoBtn = document.getElementById("edit-memo-btn");
  
    const tagInput = document.getElementById("tag-input");
  
    let isEditingTitle = false;
    let isEditingSummary = false;
    let isEditingMemo = false;
  
    // Sample data for demonstration
    const tags = ["Documents", "Pictures", "Tutorial"];
    const renderTags = () => {
      tagsContainer.innerHTML = tags
        .map((tag) => `<span class="tag-item">${tag}</span>`)
        .join("");
    };
  
    renderTags();
  
    // Edit Title
    editTitleBtn.addEventListener("click", () => {
      isEditingTitle = !isEditingTitle;
      bookmarkTitle.classList.toggle("hidden", isEditingTitle);
      titleInput.classList.toggle("hidden", !isEditingTitle);
      if (isEditingTitle) {
        titleInput.value = bookmarkTitle.textContent;
      } else {
        bookmarkTitle.textContent = titleInput.value;
      }
    });
  
    // Edit Summary
    editSummaryBtn.addEventListener("click", () => {
      isEditingSummary = !isEditingSummary;
      bookmarkSummary.classList.toggle("hidden", isEditingSummary);
      summaryInput.classList.toggle("hidden", !isEditingSummary);
      if (isEditingSummary) {
        summaryInput.value = bookmarkSummary.textContent;
      } else {
        bookmarkSummary.textContent = summaryInput.value;
      }
    });
  
    // Edit Memo
    editMemoBtn.addEventListener("click", () => {
      isEditingMemo = !isEditingMemo;
      bookmarkMemo.classList.toggle("hidden", isEditingMemo);
      memoInput.classList.toggle("hidden", !isEditingMemo);
      if (isEditingMemo) {
        memoInput.value = bookmarkMemo.textContent;
      } else {
        bookmarkMemo.textContent = memoInput.value;
      }
    });
  
    // Add Tag
    tagInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter" && tagInput.value.trim()) {
        tags.push(tagInput.value.trim());
        tagInput.value = "";
        renderTags();
      }
    });
  });
  