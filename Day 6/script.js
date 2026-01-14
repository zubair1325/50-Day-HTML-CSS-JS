const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
  const currBoxPosition = (window.innerHeight / 5) * 4;
  const triggerFromTop = (window.innerHeight / 5) * -0.8;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < currBoxPosition && boxTop > triggerFromTop) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
