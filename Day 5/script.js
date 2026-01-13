const background = document.querySelector(".background");
const h1 = document.querySelector(".counter h1");

function intervalFun() {
  let count = 0;
  const intervalId = setInterval(() => {
    h1.innerHTML = `${count}%`;
    background.style.filter = `blur(${100 - count}px)`;
    count++;
    if (count === 101) {
      clearInterval(intervalId);
    }
  }, 15);
}

intervalFun();

let progress = 0;

const interval = setInterval(() => {
  progress += 24;

  h1.style.background = `
    conic-gradient(
      rgba(0, 0, 0, 0.32) ${progress}deg,
      transparent ${progress}deg
    ),
    rgba(0, 0, 0, 0.07)
  `;
  if (progress >= 360) {
    clearInterval(interval);
  }
}, 100);
