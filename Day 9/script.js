const btns = document.querySelectorAll("button");
let currAudio = null;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    turnOffPerv();
    currAudio = new Audio(`sound/${btn.innerText}.mp3`);
    currAudio.play();
  });
});

function turnOffPerv() {
  if (currAudio) {
    currAudio.pause();
    currAudio.currentTime = 0;
    currAudio = null;
  }
}
