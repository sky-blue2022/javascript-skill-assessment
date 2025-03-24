const quizDataCh5 = [
  {
    title: "How To Create A Function (Single Choice)",
    question:
      "Which of the following code snippets correctly declares a named function in JavaScript that takes two arguments and returns their sum?",
    type: "single",
    choices: {
      a: "function sum(a, b) { return a + b; }",
      b: "(a, b) => { return a + b; } function total;",
      c: "let add = (a, b) => { return a + b; }",
      d: "const calculateSum = function(a, b) => a + b;",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — This uses the function keyword followed by the name sum to declare a named function that takes two arguments and returns their sum. It's the standard syntax for a function declaration.",
      b: "Incorrect — This is an arrow function not assigned to any variable, followed by a separate function total; statement, which is syntactically incorrect for defining a function.",
      c: "Incorrect — This uses arrow function syntax and assigns an anonymous function to a variable add. While valid, it's a function expression, not a named function declaration using the function keyword.",
      d: "Incorrect — This combines function expression syntax with an arrow function, which is invalid.",
    },
  },
  {
    title: "Functions With Default Parameter (Single Choice)",
    question:
      "What is the purpose of default parameters in JavaScript functions?",
    type: "single",
    choices: {
      a: "To provide fallback values for function parameters when no argument is provided during the function call.",
      b: "To make function parameters read-only within the function body.",
      c: "To define the expected data type of function arguments.",
      d: "To ensure that all function arguments are always provided when the function is called.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — Default parameters assign a value to a parameter if no argument or undefined is passed when the function is invoked.",
      b: "Incorrect — Default parameters do not inherently make function parameters read-only.",
      c: "Incorrect — JavaScript is dynamically typed, and default parameters do not define argument data types.",
      d: "Incorrect — Default parameters provide values when arguments are not provided.",
    },
  },
  {
    title: "Return Values in Functions (Single Choice)",
    question:
      "According to the provided text, what is a key reason why return values are considered crucial in JavaScript functions?",
    type: "single",
    choices: {
      a: "They are used to define the input parameters that a function accepts.",
      b: "They enable functions to produce results that can be utilized in other parts of the program.",
      c: "They primarily serve to display information to the user through the console.",
      d: "They are mandatory for all JavaScript functions to execute correctly.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — Input parameters are defined within the parentheses of a function declaration, not through the return value.",
      b: "Correct — Return values are crucial because they make functions reusable, modular, and flexible.",
      c: "Incorrect — console.log displays information, but return values are about sending data back to the calling code.",
      d: "Incorrect — Functions can execute without an explicit return statement.",
    },
  },
  {
    title: "Variable Scope (Single Choice)",
    question:
      "What is the scope of a variable declared inside a JavaScript function using the let keyword?",
    type: "single",
    choices: {
      a: "Function scope",
      b: "File scope",
      c: "Global scope",
      d: "Block scope",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — While var has function scope, let has block scope.",
      b: "Incorrect — JavaScript doesn't have a built-in file scope like some other languages.",
      c: "Incorrect — Variables declared with let inside a function are not global.",
      d: "Correct — Variables declared with let are block-scoped.",
    },
  },
  {
    title: "Function Hoisting (Single Choice)",
    question:
      "What is the behavior of function declarations in JavaScript with respect to hoisting?",
    type: "single",
    choices: {
      a: "Only the function name is hoisted.",
      b: "Function declarations are not hoisted.",
      c: "Function expressions are hoisted the same way.",
      d: "The entire function declaration is hoisted.",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — With function declarations, both the name and implementation are hoisted.",
      b: "Incorrect — Function declarations are hoisted.",
      c: "Incorrect — Function expressions are hoisted like variables but not initialized.",
      d: "Correct — Function declarations are fully hoisted, meaning they can be called before their definition in the code.",
    },
  },
  {
    title: "this in JavaScript (Single Choice)",
    question:
      "In a regular JavaScript function, what is the default value of the this keyword when the function is called without any specific context in non-strict mode?",
    type: "single",
    choices: {
      a: "undefined",
      b: "The function itself",
      c: "The global object (e.g., window in browsers)",
      d: "The object containing the function definition",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — In strict mode, this is undefined, but this question is about non-strict mode.",
      b: "Incorrect — this refers to the object on which the function is called, not the function itself.",
      c: "Correct — In non-strict mode, this refers to the global object (like window in browsers).",
      d: "Incorrect — While this can refer to an owning object, that’s only when the function is called as a method.",
    },
  },
  {
    title: "Anonymous Function (Single Choice)",
    question:
      "What is a defining characteristic of an anonymous function in JavaScript?",
    type: "single",
    choices: {
      a: "It is a function that is defined without a name",
      b: "It can only be used once in the code",
      c: "It is always defined inside another function",
      d: "It automatically has global scope",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — An anonymous function is a function expression without a name.",
      b: "Incorrect — Anonymous functions can be reused by assigning them to variables.",
      c: "Incorrect — They are often used as callbacks but not always defined inside another function.",
      d: "Incorrect — Scope depends on where the function is defined.",
    },
  },
  {
    title: "Arrow Function (Single Choice)",
    question:
      "What is a key difference in how arrow functions handle the this keyword?",
    type: "single",
    choices: {
      a: "Arrow functions do not have access to this",
      b: "Arrow functions allow explicit binding using call() or apply()",
      c: "Arrow functions have dynamically bound this",
      d: "Arrow functions inherit this from the surrounding scope",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Arrow functions do have access to this, but it’s lexically scoped.",
      b: "Incorrect — call() and apply() don’t change the this of arrow functions.",
      c: "Incorrect — Regular functions have dynamic this; arrow functions do not.",
      d: "Correct — Arrow functions use lexical scoping for this.",
    },
  },
  {
    title: "Higher-Order Function (Single Choice)",
    question:
      "What is a primary characteristic of a higher-order function in JavaScript?",
    type: "single",
    choices: {
      a: "It is defined using arrow function syntax",
      b: "It can only operate on arrays and objects",
      c: "It always returns a primitive data type",
      d: "It can accept functions as arguments or return them",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Arrow function syntax doesn’t define a function as higher-order.",
      b: "Incorrect — Higher-order functions can work with any data types.",
      c: "Incorrect — They can return any value, not just primitives.",
      d: "Correct — A higher-order function takes functions as arguments or returns them.",
    },
  },
];
