const quizDataCh8 = [
  {
    title: "What Are The HTTP Methods? (Single Choice)",
    question:
      "Which HTTP method is primarily used to request data from a server?",
    type: "single",
    choices: {
      a: "DELETE",
      b: "POST",
      c: "GET",
      d: "PUT",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — DELETE is used to remove a resource from the server.",
      b: "Incorrect — POST is used to send data to the server to create something new.",
      c: "Correct — GET is used to retrieve data from a server, like viewing a webpage.",
      d: "Incorrect — PUT is used to update an entire resource on the server.",
    },
  },
  {
    title: "What Is Ajax? (Single Choice)",
    question: "What is the primary benefit of using AJAX in web development?",
    type: "single",
    choices: {
      a: "It is mainly used for synchronous communication with the server.",
      b: "It allows web pages to be styled dynamically using JavaScript.",
      c: "It allows updating parts of a webpage without requiring the entire page to reload.",
      d: "It primarily focuses on transferring XML data between the client and server.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — AJAX stands for Asynchronous JavaScript and XML, meaning communication doesn't block other operations.",
      b: "Incorrect — While JavaScript can style pages dynamically, this is not the defining benefit of AJAX.",
      c: "Correct — AJAX allows specific parts of a page to update without a full reload, improving user experience.",
      d: "Incorrect — Although XML is in the name, AJAX frequently uses JSON.",
    },
  },
  {
    title: "Web APIs (Single Choice)",
    question:
      "According to the provided text, what is a primary function of Web APIs in modern web development?",
    type: "single",
    choices: {
      a: "To enable seamless interaction between applications and services for real-time data exchange.",
      b: "To primarily enhance the visual styling of web pages.",
      c: "To primarily handle user interface elements like buttons and forms on a webpage.",
      d: "To mainly manage the client-side storage of user data within a browser.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — Web APIs are essential for enabling real-time data communication and interaction between apps and services.",
      b: "Incorrect — Visual styling is handled by CSS, not APIs.",
      c: "Incorrect — APIs may provide data to UI elements, but managing them is not their core role.",
      d: "Incorrect — Client-side storage (e.g., LocalStorage) is a separate feature.",
    },
  },
];
