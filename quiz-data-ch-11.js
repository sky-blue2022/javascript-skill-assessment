const quizDataCh11 = [
  {
    title: "Node.js and Express.js (Single Choice)",
    question:
      "What is the primary purpose of Node.js in the context of building web applications?",
    type: "single",
    choices: {
      a: "To manage and organize front-end JavaScript code in a modular way.",
      b: "To provide a server-side runtime environment for executing JavaScript code.",
      c: "To handle the styling and visual presentation of the user interface.",
      d: "To store and retrieve data for the web application in a structured format.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect – Node.js is often used to run bundlers, but it’s not its core purpose.",
      b: "Correct – Node.js allows JavaScript to run on the server for building back-end logic and APIs.",
      c: "Incorrect – CSS handles styling, not Node.js.",
      d: "Incorrect – Databases handle storage; Node.js connects to them but doesn’t manage data itself.",
    },
  },
  {
    title: "Database Integration: MongoDB (Single Choice)",
    question:
      "What type of database model does MongoDB primarily utilize for storing data?",
    type: "single",
    choices: {
      a: "Key-value pair model.",
      b: "Relational model with tables and rows.",
      c: "Document-oriented model with JSON-like structures.",
      d: "Graph-based model with nodes and edges.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – MongoDB has some key-value traits but it’s not the core model.",
      b: "Incorrect – Relational models describe SQL databases, not MongoDB.",
      c: "Correct – MongoDB is a NoSQL database that stores data as flexible, JSON-like documents.",
      d: "Incorrect – Graph databases use nodes and edges, not documents.",
    },
  },
  {
    title: "Real-Time Communication with WebSockets (Single Choice)",
    question:
      "What is the primary role of WebSocket technology in web applications?",
    type: "single",
    choices: {
      a: "To primarily define the architectural style for building web service APIs.",
      b: "To primarily manage the storage of user data on the client-side.",
      c: "To enable persistent, bidirectional communication between the client and server, facilitating real-time data exchange.",
      d: "To mainly handle traditional request-response cycles for fetching web page content.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — That relates to REST or GraphQL, not WebSockets.",
      b: "Incorrect — WebSockets are for communication, not storage.",
      c: "Correct — WebSockets keep an open connection for real-time, two-way data exchange.",
      d: "Incorrect — HTTP handles request-response; WebSockets are a persistent alternative.",
    },
  },
  {
    title: "&lt;canvas&gt; HTML Tag and JavaScript (Single Choice)",
    question:
      "What is the primary purpose of the &lt;canvas&gt; HTML tag when used with JavaScript?",
    type: "single",
    choices: {
      a: "To provide a drawing surface where graphics, animations, and interactive elements can be rendered using JavaScript.",
      b: "To handle user input events like clicks and keyboard presses.",
      c: "To structure the layout and content of a web page.",
      d: "To apply styling and visual effects to HTML elements.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct – &lt;canvas&gt; is used with JavaScript for drawing graphics and animations.",
      b: "Incorrect – JS handles input, but canvas itself is a rendering surface.",
      c: "Incorrect – HTML handles layout structure.",
      d: "Incorrect – CSS handles styling.",
    },
  },
  {
    title: "Drawing with JavaScript (Single Choice)",
    question:
      "After adding a &lt;canvas&gt; tag to your HTML, how do you primarily access its drawing capabilities using JavaScript?",
    type: "single",
    choices: {
      a: "By using the getContext() method of the canvas element to obtain a 2D or 3D rendering context.",
      b: "By directly manipulating the HTML &lt;canvas&gt; element's properties for drawing.",
      c: "By automatically linking to a separate CSS file that defines drawing instructions.",
      d: "By using AI code generation tools which directly draw on the canvas without needing a context.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: 'Correct – You must call getContext("2d") or "webgl" to begin drawing on canvas.',
      b: "Incorrect – HTML properties alone won’t let you draw; a rendering context is required.",
      c: "Incorrect – CSS doesn’t define drawing logic, only appearance.",
      d: "Incorrect – Even generated code must still use the rendering context.",
    },
  },
];
