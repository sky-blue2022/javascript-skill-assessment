const quizDataCh10 = [
  {
    title: "Local Storage (Single Choice)",
    question:
      "What is a key characteristic of data stored in Local Storage in a web browser?",
    type: "single",
    choices: {
      a: "It persists even after the browser is closed and reopened.",
      b: "It is only available for the duration of the current browser tab or window.",
      c: "It is automatically sent to the server with every HTTP request.",
      d: "It has a storage limit that is significantly smaller than cookies.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct – Local storage is designed for persistent data even after closing the browser, useful for saving preferences or offline content.",
      b: "Incorrect – That describes session storage, not local storage.",
      c: "Incorrect – Unlike cookies, local storage data is not automatically sent to the server.",
      d: "Incorrect – Local storage typically has a larger capacity (around 5MB) compared to cookies.",
    },
  },
  {
    title: "Session Storage (Single Choice)",
    question:
      "When does the data stored in Session Storage typically get cleared from the browser?",
    type: "single",
    choices: {
      a: "When the current browser tab or window is closed.",
      b: "After a user-defined expiration time set by the website.",
      c: "When the user manually clears their browsing data.",
      d: "When the user logs out of the website.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct – Session storage is cleared when the tab or window is closed, making it suitable for temporary session-specific data.",
      b: "Incorrect – Session storage does not support expiration times like cookies.",
      c: "Incorrect – While true, it’s not the primary mechanism for session storage clearance.",
      d: "Incorrect – Logging out doesn't directly clear session storage unless manually coded to do so.",
    },
  },
  {
    title: "Cookies (Single Choice)",
    question:
      "Which of the following is a primary use case for HTTP cookies in web development?",
    type: "single",
    choices: {
      a: "Remembering user information and maintaining session states.",
      b: "Storing large amounts of user data for offline access.",
      c: "Enhancing website performance by caching static assets.",
      d: "Providing secure storage for sensitive user credentials on the client-side.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct – Cookies are commonly used to store small pieces of session-related data such as login states and user preferences.",
      b: "Incorrect – Cookies are too small (usually 4KB) for this purpose; local storage is more suitable.",
      c: "Incorrect – This is handled by HTTP caching mechanisms, not cookies.",
      d: "Incorrect – Sensitive credentials should not be stored in cookies due to security concerns.",
    },
  },
];
