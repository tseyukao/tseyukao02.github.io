document.addEventListener("wheel", handleMouseWheel);

function handleMouseWheel(event) {
  event.preventDefault(); // 防止頁面滾動

  if (event.deltaY < 0) {
    // 滾輪向上滾動
    loadPreviousHTMLFile();
  } else {
    // 滾輪向下滾動
    loadNextHTMLFile();
  }
}

function loadPreviousHTMLFile() {
  location.href = "catalogp2.html"; // 前一個 HTML 檔案的路徑
}

function loadNextHTMLFile() {
  location.href = "catalogp3.html"; // 下一個 HTML 檔案的路徑
}
