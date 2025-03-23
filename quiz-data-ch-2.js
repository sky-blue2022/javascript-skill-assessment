const quizDataCh2 = [
  {
    title: "Statements and Expressions (Single Choice)",
    question: "Which of the following is a statement in JavaScript?",
    type: "single",
    choices: {
      a: "2 + 2;",
      b: '"Hello, world!"',
      c: 'alert("Hello, world!");',
      d: "let x = 10",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — This is an expression that evaluates to a value.",
      b: "Incorrect — This is a literal expression representing a string.",
      c: "Correct — alert() is an instruction that performs an action by displaying a dialog box.",
      d: "Incorrect — This is a variable declaration statement.",
    },
  },
  {
    title: "Variables (Single Choice)",
    question:
      "Which of the following is a valid way to declare a variable that cannot be reassigned after its initial assignment in modern JavaScript?",
    type: "single",
    choices: {
      a: "var PI = 3.14159;",
      b: "let PI = 3.14159;",
      c: "const PI = 3.14159;",
      d: "define PI = 3.14159;",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — var is function-scoped and can be reassigned.",
      b: "Incorrect — let is block-scoped but its value can be updated.",
      c: "Correct — const declares a block-scoped variable whose value cannot be reassigned.",
      d: "Incorrect — define is not a keyword used for variable declaration in JavaScript.",
    },
  },
  {
    title: "Case Sensitivity (Single Choice)",
    question: "In JavaScript, are variable names case-sensitive?",
    type: "single",
    choices: {
      a: "No, uppercase and lowercase letters are treated the same in variable names.",
      b: "Yes, myVariable and myvariable would be considered the same variable.",
      c: "Yes, myVariable and myvariable would be considered different variables.",
      d: "Only for reserved words, variable names are case-insensitive.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — JavaScript is case-sensitive.",
      b: "Incorrect — These are distinct due to case sensitivity.",
      c: "Correct — JavaScript treats myVariable and myvariable as different identifiers.",
      d: "Incorrect — Case sensitivity applies to all identifiers.",
    },
  },
  {
    title: "Case Style for JavaScript (Single Choice)",
    question:
      "What is the standard case style convention for naming variables and functions in JavaScript to enhance readability?",
    type: "single",
    choices: {
      a: "Snake Case (user_name)",
      b: "Kebab Case (user-name)",
      c: "Pascal Case (UserName)",
      d: "Camel Case (userName)",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Snake Case is more common in Python.",
      b: "Incorrect — Kebab Case uses hyphens, which are not valid in JavaScript identifiers.",
      c: "Incorrect — Pascal Case is typically used for class names.",
      d: "Correct — Camel Case is the standard convention in JavaScript.",
    },
  },
  {
    title: "Reserved Words (Single Choice)",
    question:
      "Which of the following words cannot be used as a variable name in JavaScript because it has a special meaning?",
    type: "single",
    choices: {
      a: "myVariable",
      b: "data",
      c: "function",
      d: "count",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — myVariable is valid.",
      b: "Incorrect — data is generally valid.",
      c: "Correct — function is a reserved word.",
      d: "Incorrect — count is valid.",
    },
  },
  {
    title: "Escape Characters (Single Choice)",
    question:
      "Which character is used as the prefix for escape characters in JavaScript strings?",
    type: "single",
    choices: {
      a: "/ (forward slash)",
      b: "' (single quote)",
      c: "\\ (backslash)",
      d: '" (double quote)',
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Forward slash is used in regex and division.",
      b: "Incorrect — Single quote is for string literals.",
      c: "Correct — The backslash signals the start of an escape character.",
      d: "Incorrect — Double quote is also for string literals.",
    },
  },
  {
    title: "Semi-Colons (Single Choice)",
    question:
      "What is the primary purpose of semi-colons (;) in JavaScript code?",
    type: "single",
    choices: {
      a: "To define the scope of variables.",
      b: "To indicate the end of a code block.",
      c: "To separate statements.",
      d: "To create comments in the code.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Scope is defined by curly brackets {}.",
      b: "Incorrect — Code blocks are defined by {}.",
      c: "Correct — Semi-colons separate statements.",
      d: "Incorrect — Comments use // or /* ... */.",
    },
  },
  {
    title: "Spaces and Indentation (Single Choice)",
    question: "How do spaces and indentation primarily affect JavaScript code?",
    type: "single",
    choices: {
      a: "They affect the execution and can cause syntax errors.",
      b: "They have no impact as JavaScript ignores them.",
      c: "They improve code readability and maintainability.",
      d: "They are only needed in strings to represent space characters.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Extra spaces generally do not cause execution errors.",
      b: "Incorrect — JavaScript ignores extra spaces, but they are essential for developers.",
      c: "Correct — Indentation enhances readability and maintainability.",
      d: "Incorrect — While needed in strings, that’s not their main role.",
    },
  },
  {
    title: "Comments (Single Choice)",
    question:
      "What is the main purpose of writing comments in JavaScript code?",
    type: "single",
    choices: {
      a: "To make the code run faster.",
      b: "To define variables and functions.",
      c: "To explain the code for developers.",
      d: "To control execution flow.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Comments do not affect performance.",
      b: "Incorrect — Use let, const, var, and function to define variables/functions.",
      c: "Correct — Comments help explain code and improve collaboration.",
      d: "Incorrect — Flow is controlled with if, else, for, while, etc.",
    },
  },
  {
    title: "Literals and Data Types (Single Choice)",
    question: "Which of the following is a string literal in JavaScript?",
    type: "single",
    choices: {
      a: "123",
      b: "true",
      c: "[]",
      d: '"Hello"',
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — This is a number literal.",
      b: "Incorrect — This is a boolean literal.",
      c: "Incorrect — This is an array literal.",
      d: 'Correct — "Hello" is a string literal.',
    },
  },
  {
    title: "Arrays (Single Choice)",
    question: "How are elements in a JavaScript array typically accessed?",
    type: "single",
    choices: {
      a: "By their name or key.",
      b: "By their order or index, starting from 0.",
      c: "By a special identifier.",
      d: "Array elements can't be accessed directly.",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — That applies to objects.",
      b: "Correct — Array elements are accessed using their index, starting from 0.",
      c: "Incorrect — Arrays don’t assign special identifiers.",
      d: "Incorrect — Elements are directly accessible via index.",
    },
  },
  {
    title: "Template Literal (Single Choice)",
    question:
      "What type of quotes are used to define template literals in JavaScript?",
    type: "single",
    choices: {
      a: "Single quotes (')",
      b: 'Double quotes (")',
      c: "Backticks (`)",
      d: "Angle brackets (< >)",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect — Single quotes define regular strings.",
      b: "Incorrect — Double quotes define regular strings.",
      c: "Correct — Template literals use backticks.",
      d: "Incorrect — Angle brackets are used in HTML/JSX.",
    },
  },
  {
    title: "Brackets (Multiple Choice)",
    question:
      "Which types of brackets are used to define code blocks in JavaScript? (Select all that apply)",
    type: "multiple",
    choices: {
      a: "Parentheses ()",
      b: "Braces {}",
      c: "Square brackets []",
      d: "Angle brackets <>",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — Parentheses are for grouping and function calls.",
      b: "Correct — Braces are used for code blocks.",
      c: "Incorrect — Square brackets are for arrays.",
      d: "Incorrect — Angle brackets are used in HTML/JSX.",
    },
  },
];
