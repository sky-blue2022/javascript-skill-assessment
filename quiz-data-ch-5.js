const quizDataCh5 = [
  {
    title: "How To Create A Function  (Single Choice)",
    question:
      "What is the correct keyword used to declare a function in JavaScript?",
    type: "single",
    choices: {
      a: "method",
      b: "class",
      c: "function",
      d: "variable",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – The keyword method is used within classes to define functions that are properties of the class.",
      b: "Incorrect – The keyword class is used to define object blueprints in JavaScript.",
      c: "Correct – The function keyword is used to declare a function in JavaScript.",
      d: "Incorrect – The keyword variable ( var , let , const ) is used to declare variables, which can hold various data types, including functions.",
    },
  },
  {
    title: "Functions With Default Parameter  (Single Choice)",
    question:
      "What is the purpose of default parameters in JavaScript functions?",
    type: "single",
    choices: {
      a: "To ensure that all function arguments are always provided when the function is called.",
      b: "To define the expected data type of function arguments.",
      c: "To provide fallback values for function parameters when no argument is provided during the function call.",
      d: "To make function parameters read-only within the function body.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Default parameters provide values when arguments are not provided.",
      b: "Incorrect – JavaScript is dynamically typed, and default parameters do not define argument data types.",
      c: "Correct – Default parameters assign a value to a parameter if no argument or undefined is passed when the function is invoked.",
      d: "Incorrect – Default parameters do not inherently make function parameters read-only.",
    },
  },
  {
    title: "Return Values  (Single Choice)",
    question:
      "Which keyword is used in a JavaScript function to send a value back to the code that called the function?",
    type: "single",
    choices: {
      a: "send",
      b: "output",
      c: "return",
      d: "value",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – The keyword send is not used for returning values from JavaScript functions. It might be used in other contexts, like sending data over a network.",
      b: "Incorrect – The keyword output is not a standard JavaScript keyword for returning values from functions. console.log  is used to display output, but not to return a value.",
      c: "Correct – The return keyword is used to specify the value that a function should produce and send back to the caller.",
      d: "Incorrect – The keyword value is not used to return a value from a JavaScript function.",
    },
  },
  {
    title: "Variable Scope  (Single Choice)",
    question:
      "What is the scope of a variable declared inside a JavaScript function using the let keyword?",
    type: "single",
    choices: {
      a: "Global scope",
      b: "Function scope",
      c: "Block scope",
      d: "File scope",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Variables declared with let inside a function are not global.",
      b: "Incorrect – While var has function scope, let has block scope.",
      c: "Correct – Variables declared with let are block-scoped, meaning their accessibility is limited to the block of code where they are defined.",
      d: "Incorrect – JavaScript doesn't have a built-in file scope in the same way some other languages do.",
    },
  },
  {
    title: "Function Hoisting  (Single Choice)",
    question:
      "What is the behavior of function declarations in JavaScript with respect to hoisting?",
    type: "single",
    choices: {
      a: "Function declarations are not hoisted.",
      b: "Only the function name is hoisted.",
      c: "The entire function declaration is hoisted.",
      d: "Function expressions are hoisted the same way.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Function declarations are hoisted.",
      b: "Incorrect – With function declarations, both the name and implementation are hoisted.",
      c: "Correct – Function declarations are fully hoisted, meaning you can call the function before its definition in the code.",
      d: "Incorrect – Function expressions are hoisted like variables, but their value is not initialized until execution.",
    },
  },
  {
    title: "this in JavaScript  (Single Choice)",
    question:
      "What primarily determines the value of the this keyword inside a regular JavaScript function?",
    type: "single",
    choices: {
      a: "The scope in which the function is defined",
      b: "The order in which the script files are loaded",
      c: "How the function is called",
      d: "Whether the function is declared with function or as an arrow function",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – The value of this depends on the call site, not the definition site.",
      b: "Incorrect – The loading order of script files does not directly determine the value of this .",
      c: "Correct – The value of this is determined by how the function is invoked; this is the context of the call.",
      d: "Incorrect – Arrow functions have lexical this , but this question refers to regular functions.",
    },
  },
  {
    title: "Anonymous Function  (Single Choice)",
    question:
      "What is a defining characteristic of an anonymous function in JavaScript?",
    type: "single",
    choices: {
      a: "It can only be used once in the code",
      b: "It is always defined inside another function",
      c: "It is a function that is defined without a name",
      d: "It automatically has global scope",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Anonymous functions can be reused by assigning them to variables.",
      b: "Incorrect – They are often used as callbacks but can be defined in many contexts.",
      c: "Correct – An anonymous function is a function expression without a name.",
      d: "Incorrect – Its scope depends on where and how it is defined, not automatically global.",
    },
  },
  {
    title: "Arrow Function  (Single Choice)",
    question:
      "What is a key difference in how arrow functions handle the this keyword?",
    type: "single",
    choices: {
      a: "Arrow functions have dynamically bound this",
      b: "Arrow functions allow explicit binding using call() or apply()",
      c: "Arrow functions inherit this from the surrounding scope",
      d: "Arrow functions do not have access to this",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Regular functions have dynamic this ; arrow functions do not.",
      b: "Incorrect – call() and apply() do not change the lexical this of arrow functions.",
      c: "Correct – Arrow functions use lexical scoping for this , capturing it from their context.",
      d: "Incorrect – Arrow functions do have access to this , but it’s lexically scoped.",
    },
  },
  {
    title: "Higher-Order Function  (Single Choice)",
    question:
      "What is a primary characteristic of a higher-order function in JavaScript?",
    type: "single",
    choices: {
      a: "It always returns a primitive data type",
      b: "It can only operate on arrays and objects",
      c: "It can accept functions as arguments or return them",
      d: "It is defined using arrow function syntax",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Higher-order functions can return any type, not just primitives.",
      b: "Incorrect – They are not limited to arrays or objects.",
      c: "Correct – A higher-order function takes functions as arguments or returns them.",
      d: "Incorrect – Arrow function syntax doesn’t define a function as higher-order.",
    },
  },
];
