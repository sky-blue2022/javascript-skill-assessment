const quizDataCh9 = [
  {
    title: "JavaScript Libraries and Frameworks (Single Choice)",
    question:
      "What is the primary difference between a JavaScript library and a framework?",
    type: "single",
    choices: {
      a: "Libraries are written in JavaScript, while frameworks are written in other languages.",
      b: "Libraries provide a complete structure for an application, while frameworks offer specific tools for tasks.",
      c: "Frameworks provide a structural guideline for building an application, while libraries offer tools for specific functionalities.",
      d: "Frameworks are only used for front-end development, while libraries are for back-end.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Both libraries and frameworks for JavaScript are typically written in JavaScript.",
      b: "Incorrect – This statement reverses the roles; frameworks provide structure, and libraries offer tools.",
      c: 'Correct – Frameworks offer a foundational structure that dictates how an application is built, providing a "skeleton" to fill in, whereas libraries provide specific, reusable functions to accomplish particular tasks within your own structure.',
      d: "Incorrect – Both libraries and frameworks can be used in various parts of web development, not strictly front-end or back-end.",
    },
  },
  {
    title: "NPM: JavaScript Package Manager (Single Choice)",
    question:
      "What is the main purpose of NPM (Node Package Manager) in JavaScript development?",
    type: "single",
    choices: {
      a: "To primarily manage and run JavaScript code directly in the browser.",
      b: "To solely focus on bundling JavaScript files for production.",
      c: "To manage project dependencies, allowing developers to easily install, share, and update code packages.",
      d: "To mainly provide a platform for writing server-side JavaScript.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – While Node.js allows running JavaScript outside the browser, NPM's primary role is dependency management, not direct browser execution.",
      b: "Incorrect – While bundling can be part of the development process, NPM's core function is managing packages and their dependencies.",
      c: "Correct – NPM simplifies JavaScript development by providing a vast repository of reusable packages and tools to manage project dependencies, ensuring consistency and efficient development.",
      d: "Incorrect – NPM is closely associated with Node.js, which is used for server-side JavaScript, but NPM's function extends to managing packages for various JavaScript environments, including front-end projects.",
    },
  },
  {
    title: "How to Use jQuery (Single Choice)",
    question:
      "What is the core function that serves as the starting point for most jQuery operations?",
    type: "single",
    choices: {
      a: "document.getElementById()",
      b: "function()",
      c: ".addEventListener()",
      d: "$()",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect – document.getElementById() is a native JavaScript method for selecting a single element by its ID.",
      b: "Incorrect – function() is used to define JavaScript functions, not specifically to start jQuery operations.",
      c: "Incorrect – .addEventListener() is a native JavaScript method for attaching event listeners to HTML elements.",
      d: "Correct – The $() function, also known as the jQuery selector, is fundamental to jQuery. It is used to select HTML elements and is the entry point for chaining jQuery methods to manipulate those elements.",
    },
  },
];
