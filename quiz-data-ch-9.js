const quizDataCh9 = [
  {
    title: "JavaScript Libraries and Frameworks (Single Choice)",
    question:
      "What is the primary difference between a JavaScript library and a framework?",
    type: "single",
    choices: {
      a: "Frameworks provide a structural guideline for building an application, while libraries offer tools for specific functionalities.",
      b: "Frameworks are only used for front-end development, while libraries are for back-end.",
      c: "Libraries provide a complete structure for an application, while frameworks offer specific tools for tasks.",
      d: "Libraries are written in JavaScript, while frameworks are written in other languages.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct – Frameworks offer a foundational structure that dictates how an application is built, whereas libraries provide specific, reusable functions to accomplish particular tasks.",
      b: "Incorrect – Both can be used in both front-end and back-end development.",
      c: "Incorrect – This reverses the correct roles.",
      d: "Incorrect – Both are typically written in JavaScript.",
    },
  },
  {
    title: "NPM: JavaScript Package Manager (Single Choice)",
    question:
      "What is the main purpose of NPM (Node Package Manager) in JavaScript development?",
    type: "single",
    choices: {
      a: "To manage project dependencies, allowing developers to easily install, share, and update code packages.",
      b: "To solely focus on bundling JavaScript files for production.",
      c: "To primarily manage and run JavaScript code directly in the browser.",
      d: "To mainly provide a platform for writing server-side JavaScript.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct – NPM simplifies development by offering tools for managing project dependencies and access to reusable packages.",
      b: "Incorrect – While bundling is part of development, NPM’s core role is package management.",
      c: "Incorrect – NPM doesn’t directly manage browser execution.",
      d: "Incorrect – NPM supports server-side tools but also manages front-end dependencies.",
    },
  },
  {
    title: "How to Use jQuery (Single Choice)",
    question:
      "What is the core function that serves as the starting point for most jQuery operations?",
    type: "single",
    choices: {
      a: "$()",
      b: "function()",
      c: ".addEventListener()",
      d: "document.getElementById()",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct – $() is the jQuery selector and the core entry point for DOM manipulation and event handling in jQuery.",
      b: "Incorrect – function() is for defining functions in general JavaScript.",
      c: "Incorrect – .addEventListener() is a native JS method, not jQuery-specific.",
      d: "Incorrect – document.getElementById() is a native method for selecting by ID.",
    },
  },
];
