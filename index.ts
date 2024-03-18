import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter your first number", type: "number", name: "FirstNumber" },
  { message: "enter your second number", type: "number", name: "SecondNumber" },
  {
    message: "select your operaotr",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "division", "multiplication"],
  },
]);

if (answer.operator === "addition") {
  console.log("your value is", answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "subtraction") {
  console.log("your value is", answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "division") {
  console.log("ypur value is", answer.FirstNumber / answer.SecondNumber);
} else if (answer.operator === "multiplication") {
  console.log("ypur value is", answer.FirstNumber * answer.SecondNumber);
}
