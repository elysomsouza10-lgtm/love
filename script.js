document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const btnNext = document.getElementById("nextPage");
  const btnPrev = document.getElementById("prevPage");

  let currentPage = 0;

  function updateZIndex() {
    pages.forEach((page, index) => {
      page.style.zIndex = pages.length - index;
    });
  }

  updateZIndex();

  function flip(page) {
    page.classList.add("flipped");

    setTimeout(() => {
      page.classList.add("show-back");
    }, 400);
  }

  function unflip(page) {
    page.classList.remove("show-back");

    setTimeout(() => {
      page.classList.remove("flipped");
    }, 100);
  }

  btnNext.addEventListener("click", () => {
    if (currentPage < pages.length) {
      flip(pages[currentPage]);
      currentPage++;
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      unflip(pages[currentPage]);
    }
  });

  pages.forEach((page, index) => {
    page.addEventListener("click", () => {
      if (index === currentPage) {
        flip(page);
        currentPage++;
      }
    });
  });
});
