# Code Impact Academy
## JavaScript — Day 05: Functions

### Learning objectives

By the end of this lesson, you should be able to:

- Create and call functions in JavaScript.
- Pass information to functions using parameters and arguments.
- Return values from functions.
- Understand function declarations and function expressions.
- Write arrow functions.
- Use default parameters.
- Understand the basic difference between global and local scope.

> You already know the basic idea of functions from C and C++. This lesson focuses on JavaScript syntax and the ways JavaScript lets us define functions.

---

## 1. What is a function?

A function is a reusable block of code designed to perform a particular task.

Instead of writing the same instructions repeatedly, we can place them inside a function and call that function whenever we need it.

Example:

```javascript
function greet() {
    console.log("Hello!");
}

greet();
greet();
```

Output:

```text
Hello!
Hello!
```

Here:
- `function` is the keyword used to declare a function.
- `greet` is the function name.
- `()` contains the parameter list.
- `{}` contains the function body.
- `greet()` calls (executes) the function.

**Defining a function does not automatically execute it.** The function runs when it is called, unless it is invoked by some other part of the program or environment.

---

## 2. Function parameters and arguments

Functions can receive information from the code that calls them.

- **Parameter:** a variable listed in the function definition.
- **Argument:** the actual value passed when the function is called.

Example:

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("Daniyal");
greet("Fatima");
```

Output:

```text
Hello, Daniyal
Hello, Fatima
```

In this example, `name` is a parameter. `"Daniyal"` and `"Fatima"` are arguments.

### Multiple parameters

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(5, 7);
```

Output:

```text
30
12
```

Arguments are assigned to parameters according to their position.

---

## 3. The `return` statement

The `return` statement sends a value back from a function to the place where it was called.

Example:

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

The function calculates the sum and returns it. The returned value is stored in `result`.

### `return` vs `console.log()`

These two do different jobs:

- `console.log()` displays a value in the console.
- `return` sends a value back to the caller so the program can use it.

Example:

```javascript
function getSquare(number) {
    return number * number;
}

let answer = getSquare(5);

console.log(answer);
console.log(getSquare(4));
```

Output:

```text
25
16
```

### Important points about `return`

- A `return` statement ends the function's execution.
- Statements written after an executed `return` in the same function body are not executed.
- If a function does not return a value explicitly, its result is `undefined`.

Example:

```javascript
function showMessage() {
    console.log("Welcome!");
}

let result = showMessage();

console.log(result);
```

Output:

```text
Welcome!
undefined
```

---

## 4. Function declaration

A function declaration defines a named function using the `function` keyword.

```javascript
function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5));
```

Output:

```text
20
```

A function declaration can generally be called before its position in the code because function declarations are hoisted.

Example:

```javascript
sayHello();

function sayHello() {
    console.log("Hello!");
}
```

Output:

```text
Hello!
```

For now, remember that this behavior applies to function declarations. We will not go deeply into hoisting in this lesson.

---

## 5. Function expression

A function expression creates a function and assigns it to a variable.

```javascript
const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));
```

Output:

```text
30
```

Here:
- `function (a, b) { ... }` is a function expression.
- `add` is the variable holding the function.
- We call it using `add(10, 20)`.

### Function declaration vs function expression

| Function declaration | Function expression |
|---|---|
| Declared using a function statement. | Function is created as an expression and assigned to a variable. |
| Has a function name in its declaration. | Can be anonymous (without its own name). |
| Can generally be called before its declaration in the same scope. | A `const` or `let` variable cannot be accessed before its declaration is initialized. |

Example:

```javascript
// Function declaration
function greet() {
    console.log("Hello!");
}

// Function expression
const welcome = function () {
    console.log("Welcome!");
};

greet();
welcome();
```

---

## 6. Arrow functions

Arrow functions provide a shorter syntax for writing function expressions.

They use the `=>` symbol, known as the arrow.

### Basic syntax

```javascript
const functionName = (parameters) => {
    // function body
};
```

Example:

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

Output:

```text
30
```

### Shorter arrow function syntax

If the function body contains only one expression, you can omit the curly braces and `return` keyword. The expression's result is returned automatically. This is called an **implicit return**.

```javascript
const square = number => number * number;

console.log(square(5));
```

Output:

```text
25
```

A few syntax rules:

- With one parameter, parentheses can be omitted.
- With zero or two or more parameters, use parentheses.
- With a block body `{}`, use `return` if you want to return a value explicitly.
- With a concise expression body, the expression is returned automatically.

Examples:

```javascript
const greet = () => "Hello!";

const double = number => number * 2;

const add = (a, b) => a + b;
```

### Normal function vs arrow function

```javascript
// Function expression
const multiply = function (a, b) {
    return a * b;
};

// Arrow function
const multiplyArrow = (a, b) => a * b;

console.log(multiply(3, 4));
console.log(multiplyArrow(3, 4));
```

Both return `12`.

> **Note:** Arrow functions are not exactly interchangeable with regular functions. They have different behavior for `this` and cannot be used as constructors with `new`. Those details will be covered when needed.

---

## 7. Default parameters

A default parameter provides a fallback value when an argument is not supplied, or when the supplied argument is `undefined`.

Example:

```javascript
function greet(name = "Student") {
    console.log("Hello, " + name);
}

greet("Daniyal");
greet();
```

Output:

```text
Hello, Daniyal
Hello, Student
```

Here, `"Student"` is used when no argument is provided.

Another example:

```javascript
function calculatePrice(price, tax = 0.05) {
    return price + price * tax;
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.10));
```

Output:

```text
105
110
```

A supplied argument replaces the default value.

---

## 8. Scope: global and local variables

Scope determines where a variable can be accessed in a program.

### Global scope

A variable declared outside a function is generally available to code throughout its accessible scope.

```javascript
let academyName = "Code Impact";

function showAcademy() {
    console.log(academyName);
}

showAcademy();
console.log(academyName);
```

Both statements can access `academyName`.

### Local scope

A variable declared inside a function is available within that function, not outside it.

```javascript
function showMessage() {
    let message = "Welcome to JavaScript!";
    console.log(message);
}

showMessage();

// This would cause an error:
// console.log(message);
```

`message` is local to `showMessage()`.

### Remember

- Variables declared inside a function have function-local scope when declared with `var`, `let`, or `const`.
- Variables declared with `let` and `const` also have block scope.
- Avoid creating unnecessary global variables. Prefer passing values through parameters and returning results.

---

## 9. Common mistakes

### 1. Defining a function but never calling it

```javascript
function greet() {
    console.log("Hello!");
}
```

This defines the function but does not execute it. Call it with `greet()`.

### 2. Confusing parameters and arguments

```javascript
function greet(name) { // name is a parameter
    console.log(name);
}

greet("Daniyal"); // "Daniyal" is an argument
```

### 3. Expecting `console.log()` to return a value

```javascript
function add(a, b) {
    console.log(a + b);
}

let result = add(2, 3);

console.log(result);
```

The first log displays `5`, but `result` is `undefined` because the function does not return the sum.

### 4. Forgetting `return` in an arrow function with a block body

```javascript
const square = number => {
    number * number;
};
```

This function returns `undefined`. Write `return number * number;`, or use the concise form:

```javascript
const square = number => number * number;
```

### 5. Accessing a local variable outside its function

A local variable is not available outside the function where it is declared.

---

## 10. Practice exercises

Try solving these without looking at the solutions.

1. Create a function that accepts two numbers and returns their sum.
2. Create a function that accepts a number and returns whether it is even or odd.
3. Create a function that accepts a number and returns its square.
4. Create a function that accepts a name and returns a greeting message.
5. Create a function that accepts a number and returns its factorial.
6. Rewrite two of your normal functions as arrow functions.
7. Create a function with a default parameter for a user's name.

---

## 11. Quick revision

1. What is a function, and why do we use it?
2. What is the difference between a parameter and an argument?
3. What does the `return` statement do?
4. How is `return` different from `console.log()`?
5. What is a function declaration?
6. What is a function expression?
7. What is an arrow function?
8. What is an implicit return?
9. What are default parameters?
10. What is the difference between global and local scope?

---

## 12. Homework

1. Create a function that accepts three numbers and returns the largest.
2. Create a function that calculates the percentage obtained from marks and total marks.
3. Create a function that accepts a string and returns its length.
4. Convert the largest-number function into an arrow function.
5. Create a function that accepts a price and an optional discount percentage (default `0`) and returns the final price.

---

**End of Day 05 — JavaScript Functions**

*Code Impact Academy*
