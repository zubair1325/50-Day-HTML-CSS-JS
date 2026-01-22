const h3 = document.querySelector("h3");
const btn = document.querySelector("button");
getRandomJoke();

btn.addEventListener("click", getRandomJoke);

function getRandomJoke(params) {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      h3.innerText = data.joke;
    });
}
