const quizDataCh11 = [
  {
    title: "Node.js and Express.js (Single Choice)",
    question:
      "What is the primary purpose of Node.js in the context of building web applications?",
    type: "single",
    choices: {
      a: "To handle the styling and visual presentation of the user interface.",
      b: "To manage and organize front-end JavaScript code in a modular way.",
      c: "To provide a server-side runtime environment for executing JavaScript code.",
      d: "To store and retrieve data for the web application in a structured format.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – CSS handles the styling and visual presentation, not Node.js.",
      b: "Incorrect – Module bundlers and task runners typically handle front-end code organization, although Node.js is often used to run these tools.",
      c: "Correct – Node.js allows JavaScript to be run on the server, enabling the development of back-end logic and APIs.",
      d: "Incorrect – Databases like MongoDB are used for storing and retrieving data, not Node.js itself. However, Node.js can connect to databases.",
    },
  },
  {
    title: "Database Integration: MongoDB (Single Choice)",
    question:
      "What type of database model does MongoDB primarily utilize for storing data?",
    type: "single",
    choices: {
      a: "Relational model with tables and rows.",
      b: "Graph-based model with nodes and edges.",
      c: "Document-oriented model with JSON-like structures.",
      d: "Key-value pair model.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – This describes relational databases like SQL.",
      b: "Incorrect – This describes graph databases.",
      c: "Correct – MongoDB stores data in flexible, JSON-like documents, which are grouped into collections.",
      d: "Incorrect – While MongoDB has some key-value aspects, its primary model is document-oriented.",
    },
  },
  {
    title: "Developing a Chat Application (Single Choice)",
    question:
      "Which technology is specifically mentioned in the context of enabling real-time communication in the chat application example?",
    type: "single",
    choices: {
      a: "HTTP requests.",
      b: "WebSocket.",
      c: "RESTful APIs.",
      d: "Local Storage.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect – HTTP requests typically involve a request-response cycle and are not ideal for continuous, real-time communication.",
      b: "Correct – The chat application example mentions using socket.io, which implements the WebSocket protocol, allowing for persistent, bidirectional communication between the client and server for real-time messaging.",
      c: "Incorrect – RESTful APIs are an architectural style for web services and don't inherently provide real-time communication.",
      d: "Incorrect – Local Storage is for client-side data persistence and not for real-time communication with the server.",
    },
  },
  {
    title: "Canvas HTML Tag and JavaScript (Single Choice)",
    question:
      "What is the primary purpose of the &lt;canvas&gt; HTML tag when used with JavaScript?",
    type: "single",
    choices: {
      a: "To structure the layout and content of a web page.",
      b: "To apply styling and visual effects to HTML elements.",
      c: "To provide a drawing surface where graphics, animations, and interactive elements can be rendered using JavaScript.",
      d: "To handle user input events like clicks and keyboard presses.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – HTML handles the structure and content of a web page.",
      b: "Incorrect – CSS is used for styling and visual effects.",
      c: "Correct – The <canvas> element creates a bitmap drawing area that JavaScript can manipulate to draw graphics dynamically.",
      d: "Incorrect – While JavaScript handles user input events on the canvas, the canvas tag itself is for rendering graphics.",
    },
  },
  {
    title: "Creating an Online Drawing Tool (Single Choice)",
    question:
      "Which back-end framework is mentioned as being used for the online drawing tool example to handle server-side logic?",
    type: "single",
    choices: {
      a: "React.js",
      b: "Express.js",
      c: "jQuery",
      d: "Angular",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect – React.js is a front-end JavaScript library for building user interfaces.",
      b: 'Correct – The description for building the online drawing tool states, "Use the Express framework to implement the server."',
      c: "Incorrect – jQuery is a JavaScript library focused on DOM manipulation and does not provide back-end framework capabilities.",
      d: "Incorrect – Angular is a comprehensive front-end framework for building web applications.",
    },
  },
];
