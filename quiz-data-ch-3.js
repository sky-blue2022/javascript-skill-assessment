const quizDataCh3 = [
  {
    title: "Arithmetic Operators (Single Choice)",
    question:
      "Which arithmetic operator returns the remainder of a division operation?",
    type: "single",
    choices: {
      a: "*",
      b: "/",
      c: "**",
      d: "%",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect (The * operator performs multiplication.)",
      b: "Incorrect (The / operator performs division.)",
      c: "Incorrect (The ** operator performs exponentiation.)",
      d: "Correct (The % operator (modulus) returns the remainder of a division operation.)",
    },
  },
  {
    title: "Increment and Decrement Operators (Single Choice)",
    question:
      "What is the primary function of the increment (++) operator in JavaScript?",
    type: "single",
    choices: {
      a: "To subtract 1 from a numeric value.",
      b: "To multiply a numeric value by 1.",
      c: "To add 1 to a numeric value.",
      d: "To divide a numeric value by 1.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect (The decrement (--) operator subtracts 1.)",
      b: "Incorrect (There isn't a specific operator to multiply by 1 that's highlighted as a primary function like increment.)",
      c: "Correct (The increment (++) operator adds 1 to a numeric value.)",
      d: "Incorrect (There isn't a specific increment operator designed for division by 1.)",
    },
  },
  {
    title: "Assignment Operators (Single Choice)",
    question: "Which assignment operator combines addition with assignment?",
    type: "single",
    choices: {
      a: "=",
      b: "-=",
      c: "*=",
      d: "+=",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect (The = operator is the basic assignment operator.)",
      b: "Incorrect (The -= operator combines subtraction with assignment.)",
      c: "Incorrect (The *= operator combines multiplication with assignment.)",
      d: "Correct (The += operator adds the right operand to the left operand and assigns the result to the left operand.)",
    },
  },
  {
    title: "Comparison Operators (Single Choice)",
    question:
      "Which comparison operator checks if two values are equal in value but not necessarily in type?",
    type: "single",
    choices: {
      a: "===",
      b: "!==",
      c: ">",
      d: "==",
    },
    correctAnswers: ["d"],
    explanations: {
      a: "Incorrect (The === operator checks for strict equality, meaning both value and type must be the same.)",
      b: "Incorrect (The !== operator checks if two values are not strictly equal.)",
      c: "Incorrect (The > operator checks if the left value is greater than the right value.)",
      d: "Correct (The == operator checks if two values are equal in value, performing type coercion if necessary.)",
    },
  },
  {
    title: "Conditional Operators (Single Choice)",
    question: "What is the syntax of the conditional (ternary) operator?",
    type: "single",
    choices: {
      a: "if (condition) { valueIfTrue } else { valueIfFalse }",
      b: "condition then valueIfTrue else valueIfFalse",
      c: "condition ? valueIfTrue : valueIfFalse",
      d: "valueIfTrue if condition else valueIfFalse",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect (This is the syntax for a standard if-else statement.)",
      b: "Incorrect (This is not the correct JavaScript syntax for a conditional operator.)",
      c: "Correct (The syntax for the conditional (ternary) operator is  condition ? valueIfTrue : valueIfFalse .)",
      d: "Incorrect (This is not the correct JavaScript syntax for a conditional operator.)",
    },
  },
  {
    title: "Logical Operators (Single Choice)",
    question:
      "Which logical operator returns true only if both operands are true?",
    type: "single",
    choices: {
      a: "||",
      b: "!",
      c: "&&",
      d: "??",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect (The || (OR) operator returns true if at least one operand is true.)",
      b: "Incorrect (The ! (NOT) operator returns the opposite boolean value of its operand.)",
      c: "Correct (The && (AND) operator returns true if both conditions are true.)",
      d: "Incorrect (The ?? (Nullish Coalescing) operator returns the right-hand side operand when its left-hand side operand is null or undefined.)",
    },
  },
  {
    title: "Logical Assignment Operators (Single Choice)",
    question:
      "Which logical assignment operator assigns the right-hand side value to the left-hand side variable only if the left-hand side variable is falsy?",
    type: "single",
    choices: {
      a: "&&=",
      b: "??=",
      c: "||=",
      d: "=",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect (The &&= (Logical AND assignment) operator assigns the right-hand side value if the left-hand side is truthy.)",
      b: "Incorrect (The ??= (Nullish coalescing assignment) operator assigns the right-hand side value if the left-hand side is null or undefined.)",
      c: "Correct (The ||= (Logical OR assignment) operator assigns the right-hand side value if the left-hand side is falsy.)",
      d: "Incorrect (The = is the basic assignment operator.)",
    },
  },
  {
    title: "Nullish Coalescing Operator (Single Choice)",
    question:
      "What does the nullish coalescing operator (??) return if the left-hand side operand is not null or undefined?",
    type: "single",
    choices: {
      a: "undefined",
      b: "null",
      c: "The left-hand side operand",
      d: "The right-hand side operand",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect (It returns undefined only if the left-hand side is undefined and there's no right-hand side or the right-hand side evaluates to it in some cases.)",
      b: "Incorrect (It returns null only if the left-hand side is null and there's no right-hand side or the right-hand side evaluates to it in some cases.)",
      c: "Correct (The nullish coalescing operator (??) returns the left-hand side operand if it is not null or undefined.)",
      d: "Incorrect (It returns the right-hand side operand only if the left-hand side operand is null or undefined.)",
    },
  },
  {
    title: "Optional Chaining (Single Choice)",
    question:
      "What does the optional chaining operator (?.) return if it attempts to access a property on a null or undefined object?",
    type: "single",
    choices: {
      a: "Throws an error.",
      b: "Returns the property's default value (if defined).",
      c: "Returns undefined.",
      d: "Returns null.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect (The optional chaining operator is designed to prevent errors.)",
      b: "Incorrect (The operator itself does not define or return default values directly; this would typically be handled with other operators or logic.)",
      c: "Correct (The optional chaining operator (?.) returns undefined if the object is null or undefined.)",
      d: "Incorrect (It specifically returns undefined, not null, in this scenario.)",
    },
  },
  {
    title: "Three Dots in JavaScript (Single Choice)",
    question:
      "What are the two primary uses of the three dots (...) in JavaScript as discussed in Chapter 3?",
    type: "single",
    choices: {
      a: "Defining multiline strings and creating comments.",
      b: "Declaring variables and defining function scope.",
      c: "The spread syntax and rest parameter.",
      d: "Performing arithmetic operations and logical comparisons.",
    },
    correctAnswers: ["c"],
    explanations: {
      a: "Incorrect (Multiline strings are primarily handled by template literals using backticks, and comments use // or /* */.)",
      b: "Incorrect (Variable declaration uses let, const, or var, and function scope is defined by where variables are declared.)",
      c: "Correct (The three dots (...) in JavaScript are used for spread syntax and rest parameters.)",
      d: "Incorrect (Arithmetic operations use operators like +, -, *, /, and logical comparisons use ==, !=, >, <, etc.)",
    },
  },
];
