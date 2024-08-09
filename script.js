const handleClick = async () => {
  const inputValue = document.querySelector(".inputValue").value;
  if (!inputValue || inputValue == "") {
    alert("Please Enter any word to Search");
    return;
  }
  document.querySelector(".fa.fa-spinner.fa-spin").style.display = "block";
  document.querySelector(".search").style.display = "none";
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + inputValue;
  try {
    const response = await fetch(url);
    const result = await response.text();
    const responseObject = JSON.parse(result);
    document.querySelector(".section2").style.display = "block";
    document.querySelector(".value").innerText = inputValue;
    document.querySelector(".partOfSpeech").innerText =
      responseObject[0].meanings[0].partOfSpeech;
    document.querySelector(".definition").innerText =
      responseObject[0].meanings[0].definitions[0].definition;
    if (responseObject[0].meanings[0].definitions[0].example) {
      document.querySelector(".exampleLabel").style.display = "block";
      document.querySelector(".example").style.display = "block";
      document.querySelector(".example").innerText =
        responseObject[0].meanings[0].definitions[0].example;
    } else {
      document.querySelector(".exampleLabel").style.display = "none";
      document.querySelector(".example").style.display = "none";
    }
  } catch (error) {
    console.log(error);
    alert("Please Check Your Spelling! Try Again!");
    document.querySelector(".section2").style.display = "none";
  }
  document.querySelector(".fa.fa-spinner.fa-spin").style.display = "none";
  document.querySelector(".search").style.display = "block";
};

inputElement.addEventListener("input", function () {
  const inputValue = document.querySelector(".inputValue").value;
  if (/[^a-zA-Z0-9]/.test(inputValue)) {
    alert("Only Alphanumeric characters are allowed.");
    inputElement.value = inputValue.replace(/[^a-zA-Z0-9]/g, "");
  }
});
