const quizDataCh4 = [
  {
    title: "If Statement (Single Choice)",
    question: "What is the primary purpose of an if statement in JavaScript?",
    type: "single",
    choices: {
      a: "To define a set of possible values for a variable.",
      b: "To declare a new variable.",
      c: "To repeatedly execute a block of code.",
      d: "To execute a block of code only if a certain condition is true.",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Defining a set of possible values is more related to data structures or the cases in a switch statement.",
      b: "Incorrect — Variable declaration is done using keywords like let, const, or var.",
      c: "Incorrect — Repeated execution of code is the purpose of loop statements like for and while.",
      d: "Correct — An if statement allows you to execute a block of code only if a certain condition evaluates to true.",
    },
  },
  {
    title: "Switch Statement (Single Choice)",
    question:
      "What is the primary benefit of using a switch statement in JavaScript, especially when dealing with multiple conditions?",
    type: "single",
    choices: {
      a: "It is more performant than using multiple if-else statements in all scenarios.",
      b: "It allows for more complex condition evaluation than if statements.",
      c: "It provides a cleaner and more readable alternative to lengthy if-else chains when comparing a single variable against multiple possible values.",
      d: "It automatically handles asynchronous operations.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Performance can vary, and while switch can be optimized in some cases, it's not guaranteed to be faster than if-else in all situations.",
      b: "Incorrect — While switch can handle multiple cases, complex logical conditions are generally better suited for if-else with logical operators.",
      c: "Correct — The switch statement offers a cleaner and more organized way to handle multiple conditions, avoiding the complexity of long if-else chains when comparing a single expression against several possible values.",
      d: "Incorrect — switch statements are synchronous control flow structures and do not inherently handle asynchronous operations.",
    },
  },
  {
    title: "While Statement (Single Choice)",
    question:
      "Under what initial condition does a while loop in JavaScript begin its execution?",
    type: "single",
    choices: {
      a: "When a break statement is not present.",
      b: "After the code block has executed at least once.",
      c: "When a specific number of iterations is set.",
      d: "When the specified condition evaluates to true.",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — The presence of a break statement doesn't determine if the loop starts, but rather when it might terminate prematurely.",
      b: "Incorrect — This describes a do...while loop, which always executes its block at least once before checking the condition.",
      c: "Incorrect — The while loop doesn't require a predetermined number of iterations to start.",
      d: "Correct — A while loop first checks the condition, and if it's true, the code block is executed.",
    },
  },
  {
    title: "For Statement Syntax (Single Choice)",
    question:
      "Which of the following is the correct basic syntax for a for loop in JavaScript?",
    type: "single",
    choices: {
      a: "for (let i = 0; i < 5; i++) { // code }",
      b: "for { let i = 0; i < 5; i++ } ( // code )",
      c: "for (let i = 0, i < 5, i++) { // code }",
      d: "for (i < 5; let i = 0; i++) { // code }",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — The correct syntax starts with the for keyword, followed by parentheses () containing three expressions separated by semicolons: the initialization (let i = 0), the condition (i < 5), and the final expression (i++). The loop body is enclosed in curly braces {}.",
      b: "Incorrect — The loop header must be enclosed in parentheses (), not curly braces, and must contain the three parts separated by semicolons. Curly braces {} are used for the loop body, not the header.",
      c: "Incorrect — The three parts of the for loop header must be separated by semicolons ;, not commas ,.",
      d: "Incorrect — The parts of the for loop are in the wrong order. Initialization (let i = 0) should come first.",
    },
  },
];
