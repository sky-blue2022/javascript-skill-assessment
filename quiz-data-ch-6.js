const quizDataCh6 = [
  {
    title: "Objects (Single Choice)",
    question:
      "What is the fundamental way to store collections of data and functionality in JavaScript?",
    type: "single",
    choices: {
      a: "Arrays",
      b: "Functions",
      c: "Objects",
      d: "Variables",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Arrays are used to store ordered lists of items, accessed by index.",
      b: "Incorrect — Functions are blocks of reusable code that perform specific tasks.",
      c: "Correct — Objects are collections of properties, where each property is a key-value pair, used to represent entities and concepts.",
      d: "Incorrect — Variables are used to store single values of different data types.",
    },
  },
  {
    title: "Methods (Single Choice)",
    question:
      "In JavaScript, what is a function that is associated with an object called?",
    type: "single",
    choices: {
      a: "Property",
      b: "Attribute",
      c: "Method",
      d: "Class",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — A property is a key-value pair that holds data within an object.",
      b: "Incorrect — Attribute is a term more commonly used in the context of HTML elements.",
      c: "Correct — A method is a function that belongs to an object and defines the object's behavior or tasks.",
      d: "Incorrect — A class is a blueprint for creating objects.",
    },
  },
  {
    title: "Array Methods (Single Choice)",
    question:
      "Which of the following is a built-in JavaScript function that allows you to add an element to the end of an array?",
    type: "single",
    choices: {
      a: "append()",
      b: "add()",
      c: "push()",
      d: "insert()",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — append() is not a standard JavaScript array method for adding elements.",
      b: "Incorrect — add() is not a standard JavaScript array method for adding elements.",
      c: "Correct — push() is an array method that adds one or more elements to the end of an array and returns the new length of the array.",
      d: "Incorrect — insert() is not a standard JavaScript array method for adding elements at the end.",
    },
  },
  {
    title: "Classes (Single Choice)",
    question: "What is the primary purpose of using classes in JavaScript?",
    type: "single",
    choices: {
      a: "To create global variables.",
      b: "To define the styling of HTML elements.",
      c: "To provide a blueprint for creating objects with shared properties and methods.",
      d: "To handle asynchronous operations.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Classes are not directly related to creating global variables.",
      b: "Incorrect — Styling of HTML elements is primarily done with CSS.",
      c: "Correct — A class is a template or blueprint for creating objects. It encapsulates data and behavior that can be shared among instances of that class.",
      d: "Incorrect — Asynchronous operations are often handled with Promises or async/await.",
    },
  },
  {
    title: "Immutable and Mutable Data Types (Single Choice)",
    question:
      "Which of the following is an example of an immutable primitive data type in JavaScript?",
    type: "single",
    choices: {
      a: "Object",
      b: "Array",
      c: "String",
      d: "Function",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Objects are reference types and are mutable, meaning their state can be changed after creation.",
      b: "Incorrect — Arrays are reference types and are mutable, allowing modifications to their elements.",
      c: "Correct — Strings are primitive data types in JavaScript that are immutable, meaning their value cannot be changed once created; any operation that seems to modify a string actually creates a new string.",
      d: "Incorrect — Functions are reference types and can be associated with mutable objects.",
    },
  },
  {
    title: "What Is JSON? (Single Choice)",
    question: "What is the primary use of JSON (JavaScript Object Notation)?",
    type: "single",
    choices: {
      a: "To define the structure and content of web pages.",
      b: "To style the appearance of web pages.",
      c: "To store and transport data between a server and a web application.",
      d: "To execute code on the server-side.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — The structure and content of web pages are defined by HTML.",
      b: "Incorrect — The appearance of web pages is primarily styled by CSS.",
      c: "Correct — JSON is a lightweight text-based format widely used for transmitting structured data between a server and a web application or between different components of a system.",
      d: "Incorrect — Server-side code execution is often done with languages like Node.js.",
    },
  },
];
