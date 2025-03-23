const quizDataCh7 = [
  {
    title: "BOM and DOM (Single Choice)",
    question:
      "What are the two primary models that JavaScript uses to interact with a webpage and the browser?",
    type: "single",
    choices: {
      a: "CSS and HTML",
      b: "BOM (Browser Object Model) and DOM (Document Object Model)",
      c: "Events and Listeners",
      d: "Variables and Functions",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — CSS is for styling, and HTML is for the structure of web pages, not JavaScript interaction models.",
      b: "Correct  — The BOM allows JavaScript to interact with browser-specific elements like the window, and the DOM represents the HTML and CSS structure, enabling manipulation of elements.",
      c: "Incorrect — Events and listeners are mechanisms for responding to user interactions, not the primary structural models.",
      d: "Incorrect — Variables store data, and functions are blocks of reusable code, neither of which are the main models for webpage/browser interaction.",
    },
  },
  {
    title: "getElementBy() vs. querySelector() (Single Choice)",
    question:
      "Which of the following is a key difference between the getElementBy*() methods and querySelector() in JavaScript for selecting DOM elements?",
    type: "single",
    choices: {
      a: "getElementBy*() methods return a static NodeList, while querySelector() returns a live HTMLCollection.",
      b: "getElementBy*() methods use CSS selector syntax, while querySelector() targets elements by specific attributes like ID or class name.",
      c: "querySelector() offers more flexibility by allowing the use of CSS selectors, whereas getElementBy*() methods are limited to selecting by ID, class, name, or tag.",
      d: "getElementBy*() methods are generally preferred for selecting single elements, while querySelector() is better for selecting multiple elements.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — getElementBy*() methods often return a live HTMLCollection, and querySelectorAll() returns a static NodeList.",
      b: "Incorrect — querySelector() uses CSS selector syntax, while getElementBy*() methods target elements by specific attributes.",
      c: "Correct  — querySelector() supports a wide range of CSS selectors, providing more powerful and flexible element selection compared to the specific getElementBy*() methods.",
      d: "Incorrect — getElementById() is efficient for single elements by ID, and querySelector() can also be used for single or multiple elements.",
    },
  },
  {
    title: "Event Handler and Event Listener (Single Choice)",
    question:
      "What is a primary advantage of using addEventListener() (event listener) over directly assigning event handlers (e.g., onclick) in JavaScript?",
    type: "single",
    choices: {
      a: "Event listeners are simpler to implement for basic event handling.",
      b: "Directly assigned event handlers can attach multiple functions to the same event on an element.",
      c: "Event listeners allow attaching multiple handlers to the same event on a single element, providing more flexibility.",
      d: "Directly assigned event handlers offer more advanced options like controlling event propagation.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Directly assigned event handlers can be simpler for very basic cases, but event listeners offer more capabilities.",
      b: "Incorrect — Directly assigning an event handler will overwrite any previously assigned handler for that event on the element.",
      c: "Correct  — addEventListener() allows you to attach multiple functions to the same event on the same element without overwriting existing handlers.",
      d: "Incorrect — Event listeners provide more control over event propagation through methods like stopPropagation().",
    },
  },
  {
    title: "Event Object (Single Choice)",
    question:
      "What is the main purpose of the Event Object in JavaScript when an event occurs in the DOM?",
    type: "single",
    choices: {
      a: "To identify the type of HTML element that triggered the event.",
      b: "To store the CSS styles applied to the target element of the event.",
      c: "To provide detailed information about the event, such as its type and the target element.",
      d: "To prevent the default behavior of the event from occurring.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — While the target element is part of the Event Object, its primary purpose isn't just identifying the element type.",
      b: "Incorrect — The Event Object does not store CSS styles.",
      c: "Correct  — The Event Object acts as a messenger, carrying information about the specific event that occurred.",
      d: "Incorrect — preventDefault() is a method of the Event Object used for this purpose, but it's not the object's main purpose.",
    },
  },
  {
    title: "Mouse Events (Single Choice)",
    question:
      "Which JavaScript mouse event is triggered when the user double-clicks an element?",
    type: "single",
    choices: {
      a: "mouseover",
      b: "mousedown",
      c: "click",
      d: "dblclick",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — mouseover is triggered when the mouse pointer is moved onto an element.",
      b: "Incorrect — mousedown is triggered when a mouse button is pressed down on an element.",
      c: "Incorrect — click is triggered when a mouse button is pressed and released on an element.",
      d: "Correct  — dblclick is the mouse event that fires when a user quickly clicks an element twice.",
    },
  },
  {
    title: "Keyboard Events (Single Choice)",
    question:
      "Which property of the JavaScript Keyboard Event object provides the physical key code pressed, regardless of the keyboard layout?",
    type: "single",
    choices: {
      a: "event.key",
      b: "event.code",
      c: "event.keyCode",
      d: "event.charCode",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — event.key provides a human-readable string of the key pressed.",
      b: "Correct  — event.code returns a string representing the physical key on the keyboard that was pressed.",
      c: "Incorrect — event.keyCode is largely deprecated and browser-dependent.",
      d: "Incorrect — event.charCode represents the Unicode value of the character typed, which is different from the physical key.",
    },
  },
  {
    title: "Focus and Blur Events (Single Choice)",
    question:
      "What is the key difference between the focus and focusin events in JavaScript?",
    type: "single",
    choices: {
      a: "focus is triggered when an element loses focus, while focusin is triggered when it gains focus.",
      b: "focus can be used with any HTML element, whereas focusin is limited to form elements.",
      c: "focus bubbles up the DOM tree, while focusin does not.",
      d: "focusin bubbles up the DOM tree, whereas focus does not.",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — focus is triggered when an element gains focus, and blur (or focusout) is when it loses focus.",
      b: "Incorrect — Both can be used with various focusable HTML elements.",
      c: "Incorrect — focus does not bubble.",
      d: "Correct  — focusin is similar to focus but it bubbles up the DOM tree, allowing you to handle focus events on parent elements.",
    },
  },
  {
    title: "Form Events (Single Choice)",
    question:
      "Which JavaScript form event is triggered when a user changes the value of an input element?",
    type: "single",
    choices: {
      a: "submit",
      b: "click",
      c: "input (or change for some elements)",
      d: "focus",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — submit is triggered when a form is submitted.",
      b: "Incorrect — click is triggered when an element is clicked.",
      c: "Correct  — The input event is triggered when the value of an input element changes. The change event is also used for checkboxes, radios, and selects.",
      d: "Incorrect — focus is triggered when an element gains focus.",
    },
  },
  {
    title: "Window Events (Single Choice)",
    question:
      "Which JavaScript window event is commonly used to detect when the browser window has been resized?",
    type: "single",
    choices: {
      a: "scroll",
      b: "resize",
      c: "load",
      d: "unload",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — scroll is triggered when the user scrolls the page.",
      b: "Correct  — The resize event fires when the browser window has been resized.",
      c: "Incorrect — load is triggered when the page has fully loaded.",
      d: "Incorrect — unload is triggered when the user navigates away from the page.",
    },
  },
  {
    title: "Touch Events (Single Choice)",
    question:
      "Which JavaScript touch event is triggered when a finger is removed from a touch screen?",
    type: "single",
    choices: {
      a: "touchstart",
      b: "touchmove",
      c: "touchend",
      d: "touchcancel",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — touchstart is triggered when a touch point is placed on the touch surface.",
      b: "Incorrect — touchmove is triggered when a touch point is moved along the touch surface.",
      c: "Correct  — touchend is triggered when a touch point is removed from the touch surface.",
      d: "Incorrect — touchcancel is triggered when the touch interaction is interrupted.",
    },
  },
  {
    title: "Drag and Drop Events (Single Choice)",
    question:
      "Which JavaScript drag and drop event is fired on the target element(s) when a dragged element is hovering over it?",
    type: "single",
    choices: {
      a: "dragstart",
      b: "dragend",
      c: "dragover",
      d: "drop",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — dragstart is fired when the user starts to drag an element.",
      b: "Incorrect — dragend is fired when the drag operation is finished.",
      c: "Correct  — dragover is fired continuously while a dragged element is over a drop target.",
      d: "Incorrect — drop is fired when the dragged element is released over a drop target.",
    },
  },
  {
    title: "Animation Events (Single Choice)",
    question:
      "Which JavaScript animation event is fired when a CSS animation has completed?",
    type: "single",
    choices: {
      a: "animationstart",
      b: "animationend",
      c: "animationiteration",
      d: "animationcancel",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — animationstart is fired when the CSS animation starts.",
      b: "Correct  — animationend is fired when the CSS animation has finished playing.",
      c: "Incorrect — animationiteration is fired when an iteration of a CSS animation completes.",
      d: "Incorrect — animationcancel is fired when the CSS animation is aborted.",
    },
  },
  {
    title: "JavaScript Custom Events (Single Choice)",
    question:
      "What is the primary way to create and dispatch a custom event in JavaScript?",
    type: "single",
    choices: {
      a: "By directly calling an event handler function with a custom name.",
      b: "By modifying the browser's built-in event objects.",
      c: "By creating a new CustomEvent object and using the dispatchEvent() method.",
      d: "By defining new event types directly in the HTML.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Directly calling a function doesn't trigger the standard event flow.",
      b: "Incorrect — Modifying built-in event objects is generally not the approach for custom events.",
      c: "Correct  — You create a custom event using  new CustomEvent()  and then trigger it on a specific element using  dispatchEvent() , allowing custom data to be passed along.",
      d: "Incorrect — Event types are defined in JavaScript and the browser, not directly in HTML.",
    },
  },
];
