const quizDataCh7 = [
  {
    title: "BOM and DOM (Single Choice)",
    question:
      "Which of the following statements accurately distinguishes between the primary responsibilities of the Browser Object Model (BOM) and the Document Object Model (DOM)?",
    type: "single",
    choices: {
      a: "The DOM is an older model used for basic webpage interactions, while the BOM is a more modern approach for handling complex user interfaces and asynchronous operations.",
      b: "The BOM allows JavaScript to interact with the browser environment (e.g., window, history, location), while the DOM enables JavaScript to manipulate the content, structure, and style of the HTML document.",
      c: "Both the BOM and DOM are primarily focused on manipulating the visual presentation of the webpage, with the BOM handling CSS and the DOM handling HTML.",
      d: "The BOM is primarily responsible for managing the content and structure of the HTML document, while the DOM handles browser-specific functionalities like window management and navigation history.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — Their difference lies in what they control, not age or complexity.",
      b: "Correct — BOM gives access to the browser environment, while DOM is used for manipulating the page's content and structure.",
      c: "Incorrect — BOM does not handle CSS.",
      d: "Incorrect — This reverses the actual responsibilities.",
    },
  },
  {
    title: "getElementBy() vs. querySelector() (Single Choice)",
    question:
      "Which of the following is a key difference between the getElementBy*() methods and querySelector()?",
    type: "single",
    choices: {
      a: "getElementBy*() methods use CSS selector syntax, while querySelector() targets elements by specific attributes like ID or class name.",
      b: "getElementBy*() methods return a static NodeList, while querySelector() returns a live HTMLCollection.",
      c: "querySelector() offers more flexibility by allowing the use of CSS selectors, whereas getElementBy*() methods are limited to selecting by ID, class, name, or tag.",
      d: "getElementBy*() methods are generally preferred for selecting single elements, while querySelector() is better for selecting multiple elements.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — That’s the reverse; querySelector() uses CSS selectors.",
      b: "Incorrect — querySelectorAll() returns a static NodeList; getElementBy*() often returns a live HTMLCollection.",
      c: "Correct — querySelector() supports full CSS selectors.",
      d: "Incorrect — Both can be used for single or multiple elements.",
    },
  },
  {
    title: "Event Handler vs. Event Listener (Single Choice)",
    question:
      "What is a primary advantage of using addEventListener() over directly assigning onclick handlers?",
    type: "single",
    choices: {
      a: "Directly assigned event handlers offer more advanced options like controlling event propagation.",
      b: "addEventListener() allows attaching multiple handlers to the same event on a single element, providing more flexibility.",
      c: "Directly assigned event handlers can attach multiple functions to the same event on an element.",
      d: "Event listeners are simpler to implement for basic event handling.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — Event listeners provide better propagation control.",
      b: "Correct — Multiple listeners can be added using addEventListener() without overwriting.",
      c: "Incorrect — Direct assignment overwrites previous handlers.",
      d: "Incorrect — Direct handlers may be simpler but less flexible.",
    },
  },
  {
    title: "Event Object (Single Choice)",
    question:
      "What is the main purpose of the Event Object in JavaScript when an event occurs in the DOM?",
    type: "single",
    choices: {
      a: "To store the CSS styles applied to the target element of the event.",
      b: "To provide detailed information about the event, such as its type and the target element.",
      c: "To prevent the default behavior of the event from occurring.",
      d: "To identify the type of HTML element that triggered the event.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — It does not store style information.",
      b: "Correct — It provides key data like event type and target.",
      c: "Incorrect — preventDefault() is just one method available.",
      d: "Incorrect — The target is part of the object, but that’s not the main purpose.",
    },
  },
  {
    title: "Mouse Events (Single Choice)",
    question:
      "Which JavaScript mouse event is triggered when the user double-clicks an element?",
    type: "single",
    choices: {
      a: "dblclick",
      b: "mousedown",
      c: "mouseover",
      d: "click",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — dblclick is the double-click event.",
      b: "Incorrect — Triggered on mouse button press.",
      c: "Incorrect — Triggered when hovering.",
      d: "Incorrect — A single-click event.",
    },
  },
  {
    title: "Keyboard Events (Single Choice)",
    question:
      "Which JavaScript event is triggered when a user presses down a key on their keyboard?",
    type: "single",
    choices: {
      a: "keydown",
      b: "keyrelease",
      c: "keypress",
      d: "keyup",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — keydown triggers on key press.",
      b: "Incorrect — Not a standard event.",
      c: "Incorrect — keypress is deprecated.",
      d: "Incorrect — keyup fires when the key is released.",
    },
  },
  {
    title: "Focus and Blur Events (Single Choice)",
    question:
      "Which JavaScript event is triggered when an element becomes active and ready for input?",
    type: "single",
    choices: {
      a: "blur",
      b: "inactive",
      c: "focusout",
      d: "focus",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — blur happens when focus is lost.",
      b: "Incorrect — Not a valid event.",
      c: "Incorrect — focusout is more advanced and bubbles.",
      d: "Correct — focus occurs when the element becomes active.",
    },
  },
  {
    title: "Form Events (Single Choice)",
    question:
      "Which JavaScript form event is specifically triggered when a user attempts to submit a form?",
    type: "single",
    choices: {
      a: "submit",
      b: "input",
      c: "change",
      d: "click",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — submit is triggered on form submission.",
      b: "Incorrect — input is for real-time changes.",
      c: "Incorrect — change occurs when the input loses focus.",
      d: "Incorrect — click does not imply form submission.",
    },
  },
  {
    title: "Window Events (Single Choice)",
    question:
      "Which JavaScript window event is commonly used to detect when the browser window has been resized?",
    type: "single",
    choices: {
      a: "load",
      b: "scroll",
      c: "resize",
      d: "unload",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — load occurs when the page finishes loading.",
      b: "Incorrect — scroll triggers on page scroll.",
      c: "Correct — resize fires when the window size changes.",
      d: "Incorrect — unload happens on page exit.",
    },
  },
  {
    title: "Touch Events (Single Choice)",
    question:
      "Which JavaScript touch event is triggered when a finger is removed from a touch screen?",
    type: "single",
    choices: {
      a: "touchmove",
      b: "touchend",
      c: "touchcancel",
      d: "touchstart",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — Triggered when the finger moves.",
      b: "Correct — touchend fires when the finger is lifted.",
      c: "Incorrect — touchcancel occurs when the interaction is interrupted.",
      d: "Incorrect — touchstart is when the finger first touches the screen.",
    },
  },
  {
    title: "Drag and Drop Events (Single Choice)",
    question:
      "Which drag and drop event is fired on the target element(s) when a dragged element is hovering over it?",
    type: "single",
    choices: {
      a: "drop",
      b: "dragover",
      c: "dragend",
      d: "dragstart",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — drop fires when the element is released.",
      b: "Correct — dragover is fired continuously while hovering.",
      c: "Incorrect — dragend happens after the drag operation ends.",
      d: "Incorrect — dragstart initiates the drag.",
    },
  },
  {
    title: "Animation Events (Single Choice)",
    question:
      "Which JavaScript animation event is fired when a CSS animation has completed?",
    type: "single",
    choices: {
      a: "animationiteration",
      b: "animationend",
      c: "animationstart",
      d: "animationcancel",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — Fires on each iteration.",
      b: "Correct — animationend fires when animation completes.",
      c: "Incorrect — Fires when the animation begins.",
      d: "Incorrect — Fires when animation is aborted.",
    },
  },
  {
    title: "JavaScript Custom Events (Single Choice)",
    question:
      "What is the primary way to create and dispatch a custom event in JavaScript?",
    type: "single",
    choices: {
      a: "By creating a new CustomEvent object and using the dispatchEvent() method.",
      b: "By directly calling an event handler function with a custom name.",
      c: "By defining new event types directly in the HTML.",
      d: "By modifying the browser's built-in event objects.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — Use new CustomEvent() and dispatchEvent() to create custom events.",
      b: "Incorrect — Calling a function doesn’t follow the event system.",
      c: "Incorrect — HTML doesn’t support defining new event types.",
      d: "Incorrect — Built-in event objects are not designed to be modified.",
    },
  },
];
