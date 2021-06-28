const arrows = document.querySelectorAll(".movie-list-arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((item, index) => {
  //ایجاد محدودیت به تناسب آیتم های موجود
  const itemLength = movieLists[index].querySelectorAll("img").length;
  let clickCounter = 0;
  //کدها برای عمل کلیک و جابه جایی آیتم ها
  item.addEventListener("click", () => {
    // محدودیت کلیک متناسب با سایز صفحه
    const ratio = Math.floor(window.innerWidth / 290);
    clickCounter++;
    if (itemLength - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[index].style.transform = `translateX(${
        movieLists[index].computedStyleMap().get("transform")[0].x.value + 300
      }px)`;
    } else {
      movieLists[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// Theme Logic

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar-container,.sidebar,.right-menu-icon,.toggle,.movie-list-title,.a"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
