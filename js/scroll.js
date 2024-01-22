window.addEventListener("wheel", function (event) {
  var page1 = document.querySelector(".page1");
  var page2 = document.querySelector(".page2");

  if (event.deltaY > 0 && !page2.classList.contains("active")) {
    // 向下滚动并且第二页未显示，则显示第二页
    page2.classList.add("active");
    page1.scrollTop = 0; // 重置第一页的滚动位置
  } else if (event.deltaY < 0 && page2.classList.contains("active")) {
    // 向上滚动并且第二页已显示，则隐藏第二页
    page2.classList.remove("active");
  }
});
