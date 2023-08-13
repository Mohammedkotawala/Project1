let result = document.getElementById("result");

function appendCharacter(char) {
  if (result.textContent === "0") {
    result.textContent = char;
  } else {
    result.textContent += char;
  }
}

function clearResult() {
  result.textContent = "0";
}

function calculate() {
  try {
    result.textContent = eval(result.textContent);
  } catch (error) {
    result.textContent = "Error";
  }
}
