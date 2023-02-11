let inputText = document.querySelector("#text-area");
let button = document.querySelector("#btn-translate");
let output_text = document.querySelector(".output-area");

let serverURL = "https://api.funtranslations.com/translate/yoda.json";

function translatedTextUrl(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("There is an issue with the server");
}

button.addEventListener("click", function () {
  let txt_input = inputText.value;
  
  fetch(translatedTextUrl(txt_input))
    .then((response) => response.json())
    .then((json) => {
        let translatedText = json.contents.translated;
        output_text.innerText = translatedText;
    })
    .catch(errorHandler);
});
