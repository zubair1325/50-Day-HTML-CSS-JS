const boxs = document.querySelectorAll(".box h1");

document.addEventListener("keydown", (event) => {
  boxs.forEach((box, idx) => {
    if (idx == 0) {
      box.innerText = event.key;
    } else if (idx == 1) {
      box.innerText = event.keyCode;
    } else if (idx == 2) {
      box.innerText = event.code;
    }
  });
});
