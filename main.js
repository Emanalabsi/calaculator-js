let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll("button");

let calc = [];
let accumlate;

function calculation(button) {
  const val = button.textContent;

  if (val === "Clear") {
    screen.textContent = ".";
    calc = [];
  } else if (val === "=") {
    screen.textContent = eval(accumlate);
  } else {
    calc.push(val);
    accumlate = calc.join("");
    screen.textContent = accumlate;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculation(button))
);
