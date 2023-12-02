// 3 Display the generated poem
function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("user-instructions");
  // 1 build the API URL
  let apiKey = "a04oea55bac37b7e42f762c43b8c6dft";
  let context =
    "You are a romantic poems expert that loves to write short poems. Your mission is to generate a 4 lined poem in basic HTML and seperate each line wth a <br />. Make sure to follow the user instructions. Do not include a title to the poemFormElement. Sign the poem with 'SheCodes AI' inside a <strong> element at of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  // 2 Make a call to the API using axios

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
