const quizDataCh4 = [
  {
    title: "If Statement (Single Choice)",
    question: "What is the primary purpose of an if statement in JavaScript?",
    type: "single",
    choices: {
      a: "To repeatedly execute a block of code.",
      b: "To define a set of possible values for a variable.",
      c: "To execute a block of code only if a certain condition is true.",
      d: "To declare a new variable.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Repeated execution of code is the purpose of loop statements like for and while .",
      b: "Incorrect — Defining a set of possible values is more related to data structures or the cases in a switch statement.",
      c: "Correct — An if statement allows you to execute a block of code only if a certain condition evaluates to true .",
      d: "Incorrect — Variable declaration is done using keywords like let , const , or var .",
    },
  },
  {
    title: "Switch Statement (Single Choice)",
    question:
      "What is the primary benefit of using a switch statement in JavaScript, especially when dealing with multiple conditions?",
    type: "single",
    choices: {
      a: "It allows for more complex condition evaluation than if statements.",
      b: "It automatically handles asynchronous operations.",
      c: "It provides a cleaner and more readable alternative to lengthy if-else chains when comparing a single variable against multiple possible values.",
      d: "It is more performant than using multiple if-else statements in all scenarios.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — While switch can handle multiple cases, complex logical conditions are generally better suited for if-else with logical operators.",
      b: "Incorrect — switch statements are synchronous control flow structures and do not inherently handle asynchronous operations.",
      c: "Correct — The switch statement offers a cleaner and more organized way to handle multiple conditions, avoiding the complexity of long if-else chains when comparing a single expression against several possible values.",
      d: "Incorrect — Performance can vary, and while switch can be optimized in some cases, it's not guaranteed to be faster than if-else in all situations.",
    },
  },
  {
    title: "While Statement (Single Choice)",
    question:
      "Under what initial condition does a while loop in JavaScript begin its execution?",
    type: "single",
    choices: {
      a: "When a specific number of iterations is set.",
      b: "When the specified condition evaluates to true.",
      c: "When a break statement is not present.",
      d: "After the code block has executed at least once.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — The while loop doesn't require a predetermined number of iterations to start.",
      b: "Correct — A while loop first checks the condition, and if it's true, the code block is executed.",
      c: "Incorrect — The presence of a break statement doesn't determine if the loop starts, but rather when it might terminate prematurely.",
      d: "Incorrect — This describes a do...while loop, which always executes its block at least once before checking the condition.",
    },
  },
  {
    title: "For Statement (Single Choice)",
    question:
      "Which part of a for loop in JavaScript is typically used to set the initial value of a counter variable?",
    type: "single",
    choices: {
      a: "The initialization part.",
      b: "The condition part.",
      c: "The final expression part.",
      d: "The code block.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — The initialization part of a for loop is where you typically declare and initialize the loop counter variable (e.g., let i = 0 ).",
      b: "Incorrect — The condition part specifies the condition that must be true for the loop to continue executing (e.g., i < 5 ).",
      c: "Incorrect — The final expression part is executed after each iteration of the loop and is usually used to increment or decrement the counter (e.g., i++ ).",
      d: "Incorrect — The code block contains the statements that are executed in each iteration of the loop.",
    },
  },
];
