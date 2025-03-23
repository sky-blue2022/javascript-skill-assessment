const quizDataCh1 = [
  {
    title: "Role of JavaScript (Single Choice)",
    question:
      "What is widely considered the primary role of JavaScript in the context of web pages?",
    type: "single",
    choices: {
      a: "To define the structural elements of a webpage",
      b: "To manage the styling and visual presentation of a webpage",
      c: "To enable interactivity and dynamic functionality on a webpage",
      d: "To handle server-side data storage and retrieval",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – HTML is primarily responsible for the structure of web pages.",
      b: "Incorrect – CSS is used for styling the visual presentation of web pages.",
      c: "Correct – JavaScript powers interactive and dynamic features, bringing life to static HTML and CSS.",
      d: "Incorrect – While JavaScript can be used server-side with Node.js, its fundamental role in web pages is client-side interactivity.",
    },
  },
  {
    title: "Client-Side Nature (Single Choice)",
    question:
      "Where does JavaScript primarily operate when enhancing a standard website?",
    type: "single",
    choices: {
      a: "On the web server, handling database interactions",
      b: "Within the browser on the user's device, as a client-side language",
      c: "In external software applications, independent of the browser",
      d: "Directly within the HTML code without browser interpretation",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect – While Node.js allows server-side JavaScript, the question is about enhancing a standard website.",
      b: "Correct – JavaScript operates primarily in the browser, making it a client-side language that enables real-time interactions directly on a user’s device.",
      c: "Incorrect – JavaScript is specifically designed for web development and browser interaction.",
      d: "Incorrect – JavaScript code needs to be interpreted and executed by the browser.",
    },
  },
  {
    title: "Relationship with HTML and CSS (Single Choice)",
    question:
      "How does JavaScript typically interact with HTML and CSS in web development?",
    type: "single",
    choices: {
      a: "JavaScript replaces HTML for structuring content and CSS for styling",
      b: "JavaScript is independent and does not interact with HTML or CSS",
      c: "JavaScript enhances static HTML and CSS by adding interactivity and dynamic features",
      d: "JavaScript is used to create the initial structure of a webpage, which is then styled by HTML and CSS",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – HTML defines structure, CSS handles styling, and JavaScript adds behavior.",
      b: "Incorrect – A core function of JavaScript in web development is to manipulate HTML and CSS.",
      c: "Correct – JavaScript complements HTML and CSS by adding functionality, making web pages more dynamic and engaging.",
      d: "Incorrect – HTML is the foundation for the structure, and JavaScript then manipulates it.",
    },
  },
];
