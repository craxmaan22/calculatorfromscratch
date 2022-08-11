// Business Logic
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
 return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

//User interface Lagic

function forUsCal(event) {
  event.preventDefault();
  const num1 = parseInt(document.querySelector("input#number1").value);
  const num2 = parseInt(document.querySelector("input#number2").value);
  const operator = document.querySelector("input[name = 'operator']:checked").value;
  // console.log("number1: " + number1);
  // console.log("number2: " + number2 );
  // console.log("Operator:", operator);

  let result;
  if (operator === "add") {
    result = add(num1, num2);
  } else if (operator === "subtract") {
    result = subtract(num1, num2);
  } else if (operator ==="multiply") {
    result = multiply(num1, num2);
  } else if (operator === "divide") {
    result = divide(num1, num2);
  } 
  document.getElementById("output").innerText = result;

  console.log("check");
}

window.addEventListener("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", forUsCal);
});




