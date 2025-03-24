const quizDataCh3 = [
  {
    title: "Arithmetic Operators (Single Choice)",
    question:
      "Which arithmetic operator returns the remainder of a division operation?",
    type: "single",
    choices: {
      a: "/",
      b: "%",
      c: "**",
      d: "*",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — The / operator performs division.",
      b: "Correct — The % operator (modulus) returns the remainder of a division operation.",
      c: "Incorrect — The ** operator performs exponentiation.",
      d: "Incorrect — The * operator performs multiplication.",
    },
  },
  {
    title: "Increment and Decrement Operators (Single Choice)",
    question:
      "What is the primary function of the increment (++) operator in JavaScript?",
    type: "single",
    choices: {
      a: "To add 1 to a numeric value.",
      b: "To multiply a numeric value by 1.",
      c: "To divide a numeric value by 1.",
      d: "To subtract 1 from a numeric value.",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — The increment (++) operator adds 1 to a numeric value.",
      b: "Incorrect — There isn't a specific operator to multiply by 1 that's highlighted as a primary function like increment.",
      c: "Incorrect — There isn't a specific increment operator designed for division by 1.",
      d: "Incorrect — The decrement (--) operator subtracts 1.",
    },
  },
  {
    title: "Assignment Operators (Single Choice)",
    question: "Which assignment operator combines addition with assignment?",
    type: "single",
    choices: {
      a: "+=",
      b: "-=",
      c: "*=",
      d: "=",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — The += operator adds the right operand to the left operand and assigns the result to the left operand.",
      b: "Incorrect — The -= operator combines subtraction with assignment.",
      c: "Incorrect — The *= operator combines multiplication with assignment.",
      d: "Incorrect — The = operator is the basic assignment operator.",
    },
  },
  {
    title: "Comparison Operators (Single Choice)",
    question:
      "Which comparison operator checks if two values are equal in value but not necessarily in type?",
    type: "single",
    choices: {
      a: "==",
      b: "!==",
      c: "===",
      d: ">",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — The == operator checks if two values are equal in value, performing type coercion if necessary.",
      b: "Incorrect — The !== operator checks if two values are not strictly equal.",
      c: "Incorrect — The === operator checks for strict equality (value and type).",
      d: "Incorrect — The > operator checks if the left value is greater than the right value.",
    },
  },
  {
    title: "Conditional Operators (Single Choice)",
    question: "What is the syntax of the conditional (ternary) operator?",
    type: "single",
    choices: {
      a: "condition then valueIfTrue else valueIfFalse",
      b: "condition ? valueIfTrue : valueIfFalse",
      c: "valueIfTrue if condition else valueIfFalse",
      d: "if (condition) { valueIfTrue } else { valueIfFalse }",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — This is not the correct JavaScript syntax for a conditional operator.",
      b: "Correct — The syntax for the conditional (ternary) operator is condition ? valueIfTrue : valueIfFalse.",
      c: "Incorrect — This is not valid JavaScript syntax.",
      d: "Incorrect — This is a standard if-else statement, not a ternary operator.",
    },
  },
  {
    title: "Logical Operators (Single Choice)",
    question:
      "Which logical operator returns true only if both operands are true?",
    type: "single",
    choices: {
      a: "??",
      b: "&&",
      c: "||",
      d: "!",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — The ?? operator returns the right-hand side operand when the left is null or undefined.",
      b: "Correct — The && (AND) operator returns true if both conditions are true.",
      c: "Incorrect — The || (OR) operator returns true if at least one operand is true.",
      d: "Incorrect — The ! (NOT) operator returns the opposite boolean value.",
    },
  },
  {
    title: "Logical Assignment Operators (Single Choice)",
    question:
      "Which logical assignment operator assigns the right-hand side value to the left-hand side variable only if the left-hand side variable is falsy?",
    type: "single",
    choices: {
      a: "||=",
      b: "=",
      c: "??=",
      d: "&&=",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — The ||= (Logical OR assignment) operator assigns if the left-hand side is falsy.",
      b: "Incorrect — = is the basic assignment operator.",
      c: "Incorrect — ??= assigns if the left-hand side is null or undefined.",
      d: "Incorrect — &&= assigns if the left-hand side is truthy.",
    },
  },
  {
    title: "Nullish Coalescing Operator (Single Choice)",
    question:
      "What does the nullish coalescing operator (??) return if the left-hand side operand is not null or undefined?",
    type: "single",
    choices: {
      a: "The right-hand side operand",
      b: "The left-hand side operand",
      c: "null",
      d: "undefined",
    },
    correctAnswers: ["b"],
    explanations: {
      a: "Incorrect — It returns the right-hand side only if the left is null or undefined.",
      b: "Correct — The ?? operator returns the left-hand side if it's not null or undefined.",
      c: "Incorrect — It does not automatically return null.",
      d: "Incorrect — Same as above; it returns undefined only if the left-hand side is undefined and the logic allows for it.",
    },
  },
  {
    title: "Optional Chaining (Single Choice)",
    question:
      "What does the optional chaining operator (?.) return if it attempts to access a property on a null or undefined object?",
    type: "single",
    choices: {
      a: "Returns undefined",
      b: "Returns null",
      c: "Throws an error",
      d: "Returns the property's default value (if defined)",
    },
    correctAnswers: ["a"],
    explanations: {
      a: "Correct — The optional chaining operator returns undefined if the object is null or undefined.",
      b: "Incorrect — It specifically returns undefined, not null.",
      c: "Incorrect — It is designed to prevent runtime errors.",
      d: "Incorrect — It doesn’t automatically provide default values.",
    },
  },
  {
    title: "Three Dots in JavaScript (Single Choice)",
    question:
      "What are the two primary uses of the three dots (...) in JavaScript as discussed in Chapter 3?",
    type: "single",
    choices: {
      a: "Declaring variables and defining function scope",
      b: "Performing arithmetic operations and logical comparisons",
      c: "Defining multiline strings and creating comments",
      d: "The spread syntax and rest parameter",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect — Variable declaration uses let, const, or var.",
      b: "Incorrect — Arithmetic and logical operations use specific operators, not ....",
      c: "Incorrect — Multiline strings use backticks, and comments use // or /* */.",
      d: "Correct — The three dots (...) are used for spread syntax and rest parameters.",
    },
  },
];
