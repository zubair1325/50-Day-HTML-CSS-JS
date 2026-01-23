let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
    console.log(btn.innerHTML);

    console.log(btn.parentElement.classList.contains("active"));
    if (btn.parentElement.classList.contains("active")) {
      btn.innerHTML = `<i class="fas fa-times"></i>`;
    } else {
      btn.innerHTML = `<i class="fas fa-chevron-down"></i>`;
    }
  });
});
