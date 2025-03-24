const quizDataCh2 = [
  {
    title: "Statements and Expressions (Single Choice)",
    question: "Which of the following is a statement in JavaScript?",
    type: "single",
    choices: {
      a: "let x = 10",
      b: '"Hello, world!"',
      c: "2 + 2;",
      d: 'alert("Hello, world!");',
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — This is a variable declaration statement.",
      b: "Incorrect — This is a literal expression representing a string.",
      c: "Incorrect — This is an expression that evaluates to a value.",
      d: "Correct — alert() is an instruction that performs an action by displaying a dialog box.",
    },
  },
  {
    title: "Variables (Single Choice)",
    question:
      "Which of the following is a valid way to declare a variable that cannot be reassigned after its initial assignment in modern JavaScript?",
    type: "single",
    choices: {
      a: "let PI = 3.14159;",
      b: "const PI = 3.14159;",
      c: "define PI = 3.14159;",
      d: "var PI = 3.14159;",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — let is block-scoped but its value can be updated.",
      b: "Correct — const declares a block-scoped variable whose value cannot be reassigned.",
      c: "Incorrect — define is not a keyword used for variable declaration in JavaScript.",
      d: "Incorrect — var is function-scoped and can be reassigned.",
    },
  },
  {
    title: "Case Sensitivity (Single Choice)",
    question: "In JavaScript, are variable names case-sensitive?",
    type: "single",
    choices: {
      a: "No, uppercase and lowercase letters are treated the same in variable names.",
      b: "Only for reserved words, variable names are case-insensitive.",
      c: "Yes, myVariable and myvariable would be considered the same variable.",
      d: "Yes, myVariable and myvariable would be considered different variables.",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — JavaScript is case-sensitive.",
      b: "Incorrect — Case sensitivity applies to all identifiers.",
      c: "Incorrect — These are distinct due to case sensitivity.",
      d: "Correct — JavaScript treats myVariable and myvariable as different identifiers.",
    },
  },
  {
    title: "Case Style for JavaScript (Single Choice)",
    question:
      "What is the standard case style convention for naming variables and functions in JavaScript to enhance readability?",
    type: "single",
    choices: {
      a: "Pascal Case (UserName)",
      b: "Kebab Case (user-name)",
      c: "Snake Case (user_name)",
      d: "Camel Case (userName)",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Pascal Case is typically used for class names.",
      b: "Incorrect — Kebab Case uses hyphens, which are not valid in JavaScript identifiers.",
      c: "Incorrect — Snake Case is more common in Python.",
      d: "Correct — Camel Case is the standard convention in JavaScript.",
    },
  },
  {
    title: "Reserved Words (Single Choice)",
    question:
      "Which of the following words cannot be used as a variable name in JavaScript because it has a special meaning?",
    type: "single",
    choices: {
      a: "data",
      b: "count",
      c: "function",
      d: "myVariable",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — data is generally valid.",
      b: "Incorrect — count is valid.",
      c: "Correct — function is a reserved word.",
      d: "Incorrect — myVariable is valid.",
    },
  },
  {
    title: "Escape Characters (Single Choice)",
    question:
      "Which character is used as the prefix for escape characters in JavaScript strings?",
    type: "single",
    choices: {
      a: "' (single quote)",
      b: '" (double quote)',
      c: "/ (forward slash)",
      d: "\\ (backslash)",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Single quote is for string literals.",
      b: "Incorrect — Double quote is also for string literals.",
      c: "Incorrect — Forward slash is used in regex and division.",
      d: "Correct — The backslash signals the start of an escape character.",
    },
  },
  {
    title: "Semi-Colons (Single Choice)",
    question:
      "What is the primary purpose of semi-colons (;) in JavaScript code?",
    type: "single",
    choices: {
      a: "To indicate the end of a code block.",
      b: "To create comments in the code.",
      c: "To define the scope of variables.",
      d: "To separate statements.",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Code blocks are defined by {}.",
      b: "Incorrect — Comments use // or /* ... */.",
      c: "Incorrect — Scope is defined by curly brackets {}.",
      d: "Correct — Semi-colons separate statements.",
    },
  },
  {
    title: "Spaces and Indentation (Single Choice)",
    question: "How do spaces and indentation primarily affect JavaScript code?",
    type: "single",
    choices: {
      a: "They have no impact as JavaScript ignores them.",
      b: "They are only needed in strings to represent space characters.",
      c: "They improve code readability and maintainability.",
      d: "They affect the execution and can cause syntax errors.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — JavaScript ignores extra spaces, but they are essential for developers.",
      b: "Incorrect — While needed in strings, that’s not their main role.",
      c: "Correct — Indentation enhances readability and maintainability.",
      d: "Incorrect — Extra spaces generally do not cause execution errors.",
    },
  },
  {
    title: "Comments (Single Choice)",
    question:
      "What is the main purpose of writing comments in JavaScript code?",
    type: "single",
    choices: {
      a: "To control execution flow.",
      b: "To explain the code for developers.",
      c: "To define variables and functions.",
      d: "To make the code run faster.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — Flow is controlled with if, else, for, while, etc.",
      b: "Correct — Comments help explain code and improve collaboration.",
      c: "Incorrect — Use let, const, var, and function to define variables/functions.",
      d: "Incorrect — Comments do not affect performance.",
    },
  },
  {
    title: "Literals and Data Types (Single Choice)",
    question: "Which of the following is a string literal in JavaScript?",
    type: "single",
    choices: {
      a: "[]",
      b: '"Hello"',
      c: "123",
      d: "true",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — This is an array literal.",
      b: 'Correct — "Hello" is a string literal.',
      c: "Incorrect — This is a number literal.",
      d: "Incorrect — This is a boolean literal.",
    },
  },
  {
    title: "Arrays (Single Choice)",
    question: "How are elements in a JavaScript array typically accessed?",
    type: "single",
    choices: {
      a: "By a special identifier.",
      b: "Array elements can't be accessed directly.",
      c: "By their name or key.",
      d: "By their order or index, starting from 0.",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Arrays don’t assign special identifiers.",
      b: "Incorrect — Elements are directly accessible via index.",
      c: "Incorrect — That applies to objects.",
      d: "Correct — Array elements are accessed using their index, starting from 0.",
    },
  },
  {
    title: "Template Literal (Single Choice)",
    question:
      "What type of quotes are used to define template literals in JavaScript?",
    type: "single",
    choices: {
      a: "Backticks (`)",
      b: 'Double quotes (")',
      c: "Angle brackets (< >)",
      d: "Single quotes (')",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — Template literals use backticks.",
      b: "Incorrect — Double quotes define regular strings.",
      c: "Incorrect — Angle brackets are used in HTML/JSX.",
      d: "Incorrect — Single quotes define regular strings.",
    },
  },
  {
    title: "Brackets (Multiple Choice)",
    question:
      "Which types of brackets are used to define code blocks in JavaScript? (Select all that apply)",
    type: "multiple",
    choices: {
      a: "Braces {}",
      b: "Parentheses ()",
      c: "Angle brackets <>",
      d: "Square brackets []",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — Braces are used for code blocks.",
      b: "Incorrect — Parentheses are for grouping and function calls.",
      c: "Incorrect — Angle brackets are used in HTML/JSX.",
      d: "Incorrect — Square brackets are for arrays.",
    },
  },
];
