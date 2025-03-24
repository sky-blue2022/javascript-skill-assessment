const quizDataCh6 = [
  {
    title: "Objects (Single Choice)",
    question:
      "What is the fundamental way to store collections of data and functionality in JavaScript?",
    type: "single",
    choices: {
      a: "Objects",
      b: "Functions",
      c: "Variables",
      d: "Arrays",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — Objects are collections of properties, where each property is a key-value pair, used to represent entities and concepts.",
      b: "Incorrect — Functions are blocks of reusable code that perform specific tasks.",
      c: "Incorrect — Variables are used to store single values of different data types.",
      d: "Incorrect — Arrays are used to store ordered lists of items, accessed by index.",
    },
  },
  {
    title: "Methods (Single Choice)",
    question:
      "In JavaScript, what is a function that is associated with an object called?",
    type: "single",
    choices: {
      a: "Property",
      b: "Class",
      c: "Method",
      d: "Attribute",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — A property is a key-value pair that holds data within an object.",
      b: "Incorrect — A class is a blueprint for creating objects.",
      c: "Correct — A method is a function that belongs to an object and defines the object's behavior or tasks.",
      d: "Incorrect — Attribute is a term more commonly used in the context of HTML elements.",
    },
  },
  {
    title: "Array Methods (Single Choice)",
    question:
      "Which of the following is a built-in JavaScript function that allows you to add an element to the end of an array?",
    type: "single",
    choices: {
      a: "add()",
      b: "insert()",
      c: "push()",
      d: "append()",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — add() is not a standard JavaScript array method for adding elements.",
      b: "Incorrect — insert() is not a standard JavaScript array method for adding elements at the end.",
      c: "Correct — push() adds one or more elements to the end of an array and returns the new length of the array.",
      d: "Incorrect — append() is not a standard JavaScript array method for adding elements.",
    },
  },
  {
    title: "Classes (Single Choice)",
    question: "What is the primary purpose of using classes in JavaScript?",
    type: "single",
    choices: {
      a: "To provide a blueprint for creating objects with shared properties and methods.",
      b: "To define the styling of HTML elements.",
      c: "To create global variables.",
      d: "To handle asynchronous operations.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — A class is a template or blueprint for creating objects. It encapsulates data and behavior that can be shared among instances of that class.",
      b: "Incorrect — Styling of HTML elements is primarily done with CSS.",
      c: "Incorrect — Classes are not directly related to creating global variables.",
      d: "Incorrect — Asynchronous operations are handled with Promises or async/await.",
    },
  },
  {
    title: "Immutable and Mutable Data Types (Single Choice)",
    question:
      "Which of the following is an example of an immutable primitive data type in JavaScript?",
    type: "single",
    choices: {
      a: "String",
      b: "Object",
      c: "Array",
      d: "Function",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — Strings are primitive data types that are immutable; any operation that seems to modify a string actually creates a new one.",
      b: "Incorrect — Objects are reference types and are mutable.",
      c: "Incorrect — Arrays are mutable and allow changes to elements.",
      d: "Incorrect — Functions are reference types and can be associated with mutable objects.",
    },
  },
  {
    title: "What Is JSON? (Single Choice)",
    question: "What is the primary use of JSON (JavaScript Object Notation)?",
    type: "single",
    choices: {
      a: "To store and transport data between a server and a web application.",
      b: "To define the structure and content of web pages.",
      c: "To style the appearance of web pages.",
      d: "To execute code on the server-side.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — JSON is a lightweight text-based format widely used for transmitting structured data between systems.",
      b: "Incorrect — HTML defines the structure and content of web pages.",
      c: "Incorrect — CSS is responsible for styling.",
      d: "Incorrect — Server-side code execution is done with technologies like Node.js.",
    },
  },
];
