let next = document.querySelector(".next");
let perv = document.querySelector(".perv");

let lineThrough = document.querySelector(".line-through");
let nums = document.querySelectorAll(".num");

let currentWidth = 0;
let count = 0;

next.addEventListener("click", () => {
  if (count < 3) {
    currentWidth += 11;
    count++;
    if (count == 3) {
      next.classList.remove("color-change");
    }
  }
  perv.classList.add("color-change");

  lineThrough.style.width = `${currentWidth}vw`;
  updateCircle();
});
perv.addEventListener("click", () => {
  if (count > 0) {
    currentWidth -= 11;
    count--;
    if (count == 0) {
      perv.classList.remove("color-change");
    }
  }
  next.classList.add("color-change");
  lineThrough.style.width = `${currentWidth}vw`;
  updateCircle();
});

function updateCircle() {
  for (let i = 1; i <nums.length; i++) {
    if (i <= count) {
      nums[i].classList.add("active");
    } else {
      nums[i].classList.remove("active");
    }
  }
}
