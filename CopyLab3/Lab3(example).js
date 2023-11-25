document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementBy;
  Id("display");
  const buttons = document.getElementById("buttons");

  let currentValue = "";
  let currentOperator = "";
  let previousValue = "";

  buttons.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("number")) {
      currentValue += target.textContent;
      display.value = currentValue;
    } else if (target.classList.contains("operator")) {
      if (target.id === "clear") {
        currentValue = "";
        previousValue = "";
        currentOperator = "";
        display.value = "";
      } else if (target.id === " equals") {
        if (currentOperator && previousValue !== "") {
          currentValue = operate(
            parseFloat(previousValue),
            parseFloat(currentValue),
            currentOperator
          );
          display.value = currentValue;
          previousValue = "";
          currentOperator = "";
        } else {
          previousValue = currentValue;
          currentOperator = target.textContent;
          currentValue = "";
        }
      }
    }
  });
});

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        alert("not allowed");
        clearAll();
        return 0;
      }
    default:
      return b;
  }
}

function clearAll() {
  currentValue = "";
  previousValue = "";
  currentOperator = "";
  display.value = "";
}
