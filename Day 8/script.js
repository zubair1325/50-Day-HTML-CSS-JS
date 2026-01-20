const labels = document.querySelectorAll(".container label");

labels.forEach((label) => {
  console.log(label.innerText);
  label.innerHTML = label.innerText
    .split("")
    .map(
      (latter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${latter}</span>`,
    )
    .join("");
});
