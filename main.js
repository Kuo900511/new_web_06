document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;

  if (bodyId === "firstPage") {
    // 第一頁的邏輯
    console.log("正在執行第一頁的程式碼");
    const nextPageButton = document.getElementById("nextPageButton");
    nextPageButton.addEventListener("click", () => {
      window.location.href = "secondPage.html";
    });
    const closeAdButton = document.getElementById("closeAd");
    const adPopup = document.getElementById("adPopup");
    let isAdClosed = false; // 標誌變數，記錄廣告是否已關閉

    // 點擊關閉按鈕，隱藏廣告並設置標誌為已關閉
    closeAdButton.addEventListener("click", () => {
      adPopup.style.display = "none"; // 隱藏廣告
      isAdClosed = true; // 設置標誌為已關閉
      console.log("廣告已關閉");
    });

    // 監聽滑動事件
    window.addEventListener("scroll", () => {
      // 如果廣告已被關閉，直接返回，不重新顯示
      if (isAdClosed) {
        return;
      }
  
      // 取得當前滾動位置
      const scrollPosition = window.scrollY;
  
      // 如果滾動到某個位置（例如大於 500px），顯示廣告
      if (scrollPosition > 1100) {  //手機版要設成1293
        if (!adPopup.classList.contains("active")) {
            adPopup.style.display = "block"; // 顯示廣告
            setTimeout(() => {
                adPopup.classList.add("active"); // 添加動畫類
            }, 40); // 確保顯示後再開始過渡動畫
            console.log("滾動觸發廣告顯示");
        }
      }
    });

  } else if (bodyId === "secondPage") {
    // 第二頁的邏輯
    console.log("正在執行第二頁的程式碼");
    const lastPageButton = document.getElementById("lastPageButton");
    lastPageButton.addEventListener("click", () => {
     // 跳轉到上一個頁面
      window.location.href = "index.html";
    });
    
  }
});