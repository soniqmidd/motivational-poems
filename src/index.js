function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Invictus",
    autoStart: true,
    delay: 6,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
