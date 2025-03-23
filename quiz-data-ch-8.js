const quizDataCh8 = [
  {
    title: "What Are The HTTP Methods? (Single Choice)",
    question:
      "Which HTTP method is primarily used to request data from a server?",
    type: "single",
    choices: {
      a: "POST",
      b: "PUT",
      c: "GET",
      d: "DELETE",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — POST is used to send data to the server to create something new.",
      b: "Incorrect — PUT is used to update an entire resource on the server.",
      c: "Correct — GET is used to retrieve data from a server, like viewing a webpage.",
      d: "Incorrect — DELETE is used to remove a resource from the server.",
    },
  },
  {
    title: "What Is Ajax? (Single Choice)",
    question: "What is the primary benefit of using AJAX in web development?",
    type: "single",
    choices: {
      a: "It allows web pages to be styled dynamically using JavaScript.",
      b: "It primarily focuses on transferring XML data between the client and server.",
      c: "It allows updating parts of a webpage without requiring the entire page to reload.",
      d: "It is mainly used for synchronous communication with the server.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — While JavaScript can style pages dynamically, this is not the defining benefit of AJAX.",
      b: "Incorrect — While XML is in the name, AJAX can transfer data in various formats, with JSON being common.",
      c: "Correct — AJAX (Asynchronous JavaScript and XML) enables seamless data exchanges, allowing websites to update specific parts without a full page reload, improving user experience.",
      d: "Incorrect — AJAX stands for Asynchronous JavaScript and XML, meaning communication doesn't block other operations.",
    },
  },
  {
    title: "Implementing Web APIs (Single Choice)",
    question:
      "When implementing a Web API, what is a common first step after finding a suitable free API?",
    type: "single",
    choices: {
      a: "Immediately writing JavaScript code to fetch data.",
      b: "Registering for an API key if required by the API provider.",
      c: "Directly using the API's URL in your HTML file.",
      d: "Analyzing the API's CSS to match your website's style.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — Many APIs require authentication via an API key before you can make requests.",
      b: "Correct — A common first step with many free APIs is to sign up on the provider's website and generate a unique API key to authenticate your requests.",
      c: "Incorrect — APIs are typically accessed using JavaScript's fetch or similar methods, not directly in HTML.",
      d: "Incorrect — APIs primarily deal with data exchange; their CSS is not relevant to your website's styling.",
    },
  },
];
