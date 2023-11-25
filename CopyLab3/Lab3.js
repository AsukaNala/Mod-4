//(1) Number buttuns =  currentValue += number
//(2)Operator buttuns = display only number += operator
//(3) = calcutaltes
//(4) C = clears display
//(5) 0 =.....

const resultDisplay = document.getElementById("result");
function input(numop) {
  const obj = document.getElementById("result");
  obj.innerText += numop;
}

function calc() {
  resultDisplay.innerText = new Function("return " + resultDisplay.innerText)();
}

function clear() {
  resultDisplay.innerText = "";
}
