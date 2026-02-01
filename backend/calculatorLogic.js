const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";
let previous = "";
let operator = null;

const updateDisplay = () => {
  display.textContent = current || "0";
};

const calculate = () => {
  const a = parseFloat(previous);
  const b = parseFloat(current);

  switch (operator) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return b === 0 ? "خطأ" : a / b;
    case "%":
      return a % b;
    default:
      return b;
  }
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.dataset.number !== undefined) {
      if (value === "." && current.includes(".")) return;
      current += value;
      updateDisplay();
      return;
    }

    if (button.dataset.action === "operator") {
      if (!current) return;
      if (previous) {
        current = calculate().toString();
        updateDisplay();
      }
      operator = value;
      previous = current;
      current = "";
      return;
    }

    if (button.dataset.action === "equal") {
      if (!previous || !current) return;
      current = calculate().toString();
      previous = "";
      operator = null;
      updateDisplay();
      return;
    }

    if (button.dataset.action === "clear") {
      current = "";
      previous = "";
      operator = null;
      updateDisplay();
      return;
    }

    if (button.dataset.action === "delete") {
      current = current.slice(0, -1);
      updateDisplay();
    }
  });
});

/* دعم الكيبورد */
document.addEventListener("keydown", e => {
  if (!isNaN(e.key) || e.key === ".") {
    current += e.key;
    updateDisplay();
  }

  if (["+", "-", "*", "/", "%"].includes(e.key)) {
    operator = e.key === "*" ? "×" : e.key === "/" ? "÷" : e.key;
    previous = current;
    current = "";
  }

  if (e.key === "Enter") {
    current = calculate().toString();
    previous = "";
    operator = null;
    updateDisplay();
  }

  if (e.key === "Backspace") {
    current = current.slice(0, -1);
    updateDisplay();
  }

  if (e.key === "Escape") {
    current = "";
    previous = "";
    operator = null;
    updateDisplay();
  }
});
