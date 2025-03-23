const quizDataCh10 = [
  {
    title: "Local Storage (Single Choice)",
    question:
      "What is a key characteristic of data stored in Local Storage in a web browser?",
    type: "single",
    choices: {
      a: "It is automatically sent to the server with every HTTP request.",
      b: "It is only available for the duration of the current browser tab or window.",
      c: "It persists even after the browser is closed and reopened.",
      d: "It has a storage limit that is significantly smaller than cookies.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Unlike cookies, data stored in local storage is not automatically sent to the server with every HTTP request.",
      b: "Incorrect – Data in local storage persists even after the browser is closed, unlike session storage.",
      c: "Correct – Local storage is designed for storing data that needs to persist even after the browser is closed, providing a way to save user preferences or offline data.",
      d: "Incorrect – Local storage typically allows for larger amounts of data to be stored compared to cookies, with a limit of around 5MB, which varies by browser.",
    },
  },
  {
    title: "Session Storage (Single Choice)",
    question:
      "When does the data stored in Session Storage typically get cleared from the browser?",
    type: "single",
    choices: {
      a: "After a user-defined expiration time set by the website.",
      b: "When the user manually clears their browsing data.",
      c: "When the current browser tab or window is closed.",
      d: "When the user logs out of the website.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Session storage does not have a user-defined expiration time in the same way cookies can.",
      b: "Incorrect – While clearing browsing data will remove session storage, it is primarily cleared upon closing the session.",
      c: "Correct – Data stored in session storage is cleared as soon as the browser tab or window is closed, making it suitable for temporary data.",
      d: "Incorrect – Logging out of a website might clear some data, but session storage is tied to the browser tab/window session, not specifically to a website login state.",
    },
  },
  {
    title: "Cookies (Single Choice)",
    question:
      "Which of the following is a primary use case for HTTP cookies in web development?",
    type: "single",
    choices: {
      a: "Storing large amounts of user data for offline access.",
      b: "Enhancing website performance by caching static assets.",
      c: "Remembering user information and maintaining session states.",
      d: "Providing secure storage for sensitive user credentials on the client-side.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect – Cookies have a small size limit (usually 4KB) and are not ideal for large amounts of offline data; local storage is better for this.",
      b: "Incorrect – Caching static assets is typically handled by the browser's HTTP caching mechanisms, not primarily by cookies.",
      c: "Correct – Cookies are used to store small pieces of data to remember information about the user across sessions, such as login states and preferences.",
      d: "Incorrect – While cookies can store information related to authentication, sensitive user credentials should generally not be stored directly in cookies due to potential security risks; secure methods involving server-side sessions are preferred.",
    },
  },
];
