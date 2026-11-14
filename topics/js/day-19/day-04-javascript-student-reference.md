# Code Impact Academy
## JavaScript — Day 04: Loops

### Learning objectives

By the end of this lesson, you should be able to:

- Use loops to repeat a block of JavaScript code.
- Recognize the syntax of `for`, `while`, and `do...while`.
- Control a loop using `break` and `continue`.
- Use `for...of` to iterate over strings and other iterable values.

> You already know the basic idea of loops from C and C++. This lesson focuses mainly on how loops are written and used in JavaScript.

---

## 1. What is a loop?

A loop is a programming structure that executes a block of code repeatedly while a condition is satisfied, or for each item in a sequence.

Without a loop, printing numbers from 1 to 5 would require several `console.log()` statements. A loop lets us write the repeated instruction once.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

## 2. The `for` loop

Use a `for` loop when you know how many times you want to repeat an operation, or when you can express the repetition with a counter.

### Syntax

```javascript
for (initialization; condition; update) {
    // code to repeat
}
```

- **Initialization:** runs once before the loop starts.
- **Condition:** checked before each iteration. The loop continues while it is `true`.
- **Update:** runs after each iteration.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}
```

The variable `i` starts at `1`, increases by `1` after each iteration, and the loop stops when the condition becomes `false`.

---

## 3. The `while` loop

A `while` loop repeats as long as its condition is `true`.

### Syntax

```javascript
while (condition) {
    // code to repeat
}
```

Example:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

**Important:** Make sure something inside the loop eventually makes the condition `false`. Otherwise, you may create an infinite loop.

---

## 4. The `do...while` loop

A `do...while` loop checks its condition after executing the loop body.

This means its body always executes at least once, even if the condition is initially `false`.

### Syntax

```javascript
do {
    // code to repeat
} while (condition);
```

Example:

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Notice the semicolon after the `while (condition)`.

### `while` vs `do...while`

| `while` | `do...while` |
|---|---|
| Checks the condition before the body. | Checks the condition after the body. |
| May execute zero times. | Executes at least once. |

---

## 5. `break` statement

The `break` statement immediately terminates the nearest loop.

Example:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

When `i` becomes `5`, `break` ends the loop.

---

## 6. `continue` statement

The `continue` statement skips the remaining statements in the current iteration and moves to the next iteration.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

When `i` is `3`, that iteration is skipped. The loop itself does not end.

### Difference between `break` and `continue`

- `break` — exits the loop completely.
- `continue` — skips only the current iteration.

---

## 7. Nested loops

A loop written inside another loop is called a nested loop.

The inner loop completes its iterations for each iteration of the outer loop.

Example:

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}
```

Output:

```text
1 1
1 2
2 1
2 2
3 1
3 2
```

Nested loops are useful for working with rows and columns, tables, and pattern-based problems.

---

## 8. The `for...of` loop

JavaScript provides `for...of` to iterate over the values of an iterable, such as an array or a string.

It is especially useful when you want each value without managing an index manually.

### Syntax

```javascript
for (let value of iterable) {
    // use value
}
```

Example with a string:

```javascript
let name = "Daniyal";

for (let character of name) {
    console.log(character);
}
```

Output:

```text
D
a
n
i
y
a
l
```

Example with an array:

```javascript
let languages = ["C", "C++", "JavaScript"];

for (let language of languages) {
    console.log(language);
}
```

Output:

```text
C
C++
JavaScript
```

### Traditional `for` vs `for...of`

Traditional `for` gives you control over an index and the loop condition:

```javascript
let languages = ["C", "C++", "JavaScript"];

for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
```

`for...of` gives you each value directly:

```javascript
let languages = ["C", "C++", "JavaScript"];

for (let language of languages) {
    console.log(language);
}
```

Use a traditional `for` loop when you need the index or more control over the iteration. Use `for...of` when you simply need each value.

> **Remember:** `for...of` iterates over values. `for...in` iterates over enumerable property keys and is commonly introduced while learning objects. We will cover `for...in` with objects later.

---

## 9. Common mistakes

### 1. Forgetting to update the loop variable

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    // i is never updated
}
```

This creates an infinite loop because `i` remains `1`.

### 2. Using the wrong condition

```javascript
for (let i = 1; i < 5; i++) {
    console.log(i);
}
```

This prints `1` to `4`, not `1` to `5`. Use `i <= 5` if you want to include `5`.

### 3. Confusing `break` and `continue`

Remember: `break` ends the loop; `continue` skips the current iteration.

### 4. Using `for...of` as if it provides an index

```javascript
let items = ["Pen", "Book"];

for (let item of items) {
    console.log(item);
}
```

Here, `item` contains the value (`"Pen"`, then `"Book"`), not the index.

---

## 10. Practice exercises

Try solving these without looking at the examples above.

1. Print numbers from `1` to `100` using a `for` loop.
2. Print the multiplication table of a number.
3. Find the sum of all even numbers from `1` to `100`.
4. Use a `while` loop to print numbers from `10` down to `1`.
5. Use `continue` to print numbers from `1` to `10`, skipping `5`.
6. Use `for...of` to print each character of a string.
7. Use nested loops to print a simple right-angle star pattern.

---

## 11. Quick revision

1. What is the purpose of a loop?
2. What are the three parts of a `for` loop?
3. What is the main difference between `while` and `do...while`?
4. What does `break` do?
5. What does `continue` do?
6. What is a nested loop?
7. What kind of values can `for...of` iterate over?
8. What is the difference between a traditional `for` loop and `for...of`?

---

## 12. Homework

1. Write a program to calculate the factorial of a number.
2. Write a program to reverse the digits of a number.
3. Print the multiplication tables from `1` to `10`.
4. Count the number of vowels in a string using `for...of`.
5. Print all numbers between `1` and `50` that are divisible by both `3` and `5`.

---

**End of Day 04 — JavaScript Loops**

*Code Impact Academy*
