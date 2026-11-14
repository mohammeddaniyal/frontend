# Code Impact Academy
## JavaScript — Day 07: Objects

### Learning objectives

By the end of this lesson, you should be able to:

- Explain what a JavaScript object is.
- Create objects using object literals.
- Access, add, update and delete object properties.
- Use dot notation and bracket notation.
- Create and call methods inside objects.
- Understand the basic use of the `this` keyword.
- Work with arrays of objects.
- Iterate over object properties using `for...in`.

---

## 1. What is an object?

An object is a data structure used to store related information as **key-value pairs**.

Consider a student. A student has several pieces of information, such as name, age, course and marks.

We could store these values in separate variables:

```javascript
let studentName = "Aman";
let studentAge = 20;
let studentCourse = "Computer Science";
```

But these values describe one student. An object lets us group them together:

```javascript
let student = {
    name: "Aman",
    age: 20,
    course: "Computer Science"
};
```

Here:

- `student` is the object variable.
- `name`, `age` and `course` are property keys.
- `"Aman"`, `20` and `"Computer Science"` are property values.

An object makes related data easier to organize and work with.

---

## 2. Creating an object

The most common way to create an object is with curly braces `{}`. This is called an **object literal**.

```javascript
let product = {
    name: "Laptop",
    price: 55000,
    brand: "Lenovo",
    inStock: true
};
```

An object can contain different data types, including strings, numbers, booleans, arrays, functions and other objects.

Example:

```javascript
let user = {
    name: "Sara",
    age: 21,
    skills: ["HTML", "CSS", "JavaScript"],
    isActive: true
};
```

---

## 3. Accessing object properties

JavaScript provides two common ways to access an object's properties.

### A. Dot notation

Use a dot followed by the property key.

```javascript
let student = {
    name: "Aman",
    age: 20
};

console.log(student.name);
console.log(student.age);
```

Output:

```text
Aman
20
```

### B. Bracket notation

Use square brackets and provide the property key as a string.

```javascript
let student = {
    name: "Aman",
    age: 20
};

console.log(student["name"]);
console.log(student["age"]);
```

Output:

```text
Aman
20
```

### Dot notation vs bracket notation

| Dot notation | Bracket notation |
|---|---|
| `student.name` | `student["name"]` |
| Property key is written directly. | Property key is written inside brackets. |
| Convenient for known property names. | Useful when the property key is stored in a variable or needs dynamic access. |

Example of dynamic property access:

```javascript
let student = {
    name: "Aman",
    age: 20,
    course: "CSE"
};

let property = "name";

console.log(student[property]);
```

Output:

```text
Aman
```

Here, JavaScript uses the value stored in `property` as the key.

If we wrote `student.property`, JavaScript would look for a property literally named `property`, which is different.

---

## 4. Adding and updating properties

You can add a new property or update an existing one using either dot notation or bracket notation.

### Adding a property

```javascript
let student = {
    name: "Aman",
    age: 20
};

student.course = "CSE";

console.log(student);
```

The `course` property is added to the object.

### Updating a property

```javascript
student.age = 21;

console.log(student.age);
```

Output:

```text
21
```

If the property already exists, its value is replaced. If it does not exist, a new property is created.

---

## 5. Deleting a property

Use the `delete` operator to remove a property from an object.

```javascript
let student = {
    name: "Aman",
    age: 20,
    course: "CSE"
};

delete student.age;

console.log(student);
```

The `age` property is removed.

---

## 6. Object methods

When a function is stored as a property of an object, it is commonly called a **method**.

Example:

```javascript
let student = {
    name: "Aman",
    age: 20,

    greet: function () {
        console.log("Hello!");
    }
};

student.greet();
```

Output:

```text
Hello!
```

You call an object method using the object name, a dot, the method name and parentheses.

### Method shorthand

JavaScript also supports a shorter syntax for defining methods:

```javascript
let student = {
    name: "Aman",

    greet() {
        console.log("Hello!");
    }
};

student.greet();
```

Both examples define a method named `greet`.

---

## 7. The `this` keyword

Inside a regular object method, `this` commonly refers to the object through which the method was called.

It can be used to access other properties of that object.

```javascript
let student = {
    name: "Aman",
    age: 20,

    display() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.display();
```

Output:

```text
Aman
20
```

Here, `this.name` accesses the `name` property of the object, and `this.age` accesses its `age` property.

### Important note

Arrow functions do not have their own `this`. They inherit `this` from the surrounding scope. For this reason, regular method syntax is generally the straightforward choice when an object method needs to use `this`.

For now, remember the basic use of `this` inside regular object methods. Its behavior in different situations will be covered later.

---

## 8. Arrays of objects

In real applications, we often need to store multiple records. For example, a list of students, products or employees.

An array of objects is useful for this.

```javascript
let students = [
    {
        name: "Aman",
        marks: 85
    },
    {
        name: "Sara",
        marks: 92
    },
    {
        name: "Rahul",
        marks: 68
    }
];
```

Each array element is an object.

### Accessing values

Use the array index to select an object, then access its property.

```javascript
console.log(students[0].name);
console.log(students[1].marks);
```

Output:

```text
Aman
92
```

### Updating a value

```javascript
students[0].marks = 90;

console.log(students[0].marks);
```

Output:

```text
90
```

### Iterating through an array of objects

Use `for...of` to access each object:

```javascript
for (let student of students) {
    console.log(student.name, student.marks);
}
```

Output:

```text
Aman 90
Sara 92
Rahul 68
```

### Filtering objects

You can use array methods such as `filter()` with arrays of objects:

```javascript
let toppers = students.filter(student => student.marks >= 80);

console.log(toppers);
```

This creates a new array containing the student objects whose marks are at least `80`.

### Finding one object

```javascript
let result = students.find(student => student.name === "Sara");

console.log(result);
```

`find()` returns the first matching object, or `undefined` if no match is found.

---

## 9. The `for...in` loop

The `for...in` loop iterates over the enumerable property keys of an object.

### Syntax

```javascript
for (let key in object) {
    // use key
}
```

Example:

```javascript
let student = {
    name: "Aman",
    age: 20,
    course: "CSE"
};

for (let key in student) {
    console.log(key);
}
```

Output:

```text
name
age
course
```

To access each property's value, use bracket notation:

```javascript
for (let key in student) {
    console.log(key, student[key]);
}
```

Output:

```text
name Aman
age 20
course CSE
```

### `for...of` vs `for...in`

| `for...of` | `for...in` |
|---|---|
| Iterates over values of an iterable. | Iterates over enumerable property keys. |
| Commonly used with arrays and strings. | Commonly used with objects. |
| Example: `for (let value of array)` | Example: `for (let key in object)` |

Remember:
- Use `for...of` when you want values from an array.
- Use `for...in` when you want property keys from an object.

---

## 10. Common mistakes

### 1. Confusing dot and bracket notation

```javascript
let student = {
    name: "Aman"
};

let key = "name";

console.log(student.key);    // undefined
console.log(student[key]);   // Aman
```

`student.key` looks for a property named `key`. `student[key]` uses the value stored in the variable `key`.

### 2. Forgetting quotes around string keys in bracket notation

```javascript
let student = {
    name: "Aman"
};

console.log(student["name"]);
```

When writing a literal string property key in brackets, put it in quotes.

### 3. Forgetting parentheses when calling a method

```javascript
student.greet;   // Refers to the method
student.greet(); // Calls the method
```

### 4. Using an array index as if it were an object property

```javascript
let students = [
    { name: "Aman" },
    { name: "Sara" }
];

console.log(students[0].name); // Aman
```

First select the array element, then access its object property.

### 5. Using an arrow function as a method when relying on `this`

Arrow functions do not create their own `this`. Use a regular method when you need `this` to refer to the object in the usual method-call pattern.

---

## 11. Practice exercises

Try solving these without looking at the examples above.

1. Create a `student` object with `name`, `age`, `course` and `marks` properties.
2. Display the student's name using both dot notation and bracket notation.
3. Add a `city` property and update the student's marks.
4. Delete one property from the object.
5. Create an object with a method named `displayDetails()` that prints the object's information.
6. Use `this` inside the method to access the object's properties.
7. Create an array containing five student objects, each with a name and marks.
8. Use a loop to display every student's name and marks.
9. Use `filter()` to get students with marks greater than `60`.
10. Use `find()` to get the student whose name is `"Sara"` (or another name present in your array).

---

## 12. Quick revision

1. What is an object?
2. What is a key-value pair?
3. How do you create an object using an object literal?
4. What is the difference between dot notation and bracket notation?
5. How do you add, update and delete a property?
6. What is an object method?
7. What does `this` refer to in a regular method call?
8. What is an array of objects?
9. What does `for...in` iterate over?
10. What is the difference between `for...of` and `for...in`?

---

## 13. Homework

1. Create a `product` object with `name`, `price`, `brand` and `inStock` properties.
2. Add a method that displays the product's name and price.
3. Create an array of at least five product objects.
4. Use `for...of` to display all product names.
5. Use `filter()` to get products priced below a value you choose.
6. Use `find()` to locate a product by its name.
7. Use `for...in` to display all keys and values of one product object.

---

## 14. Part A — JavaScript foundations recap

You have now completed the first part of the JavaScript course.

| Day | Topic | Main concepts |
|---|---|---|
| Day 01 | Introduction to JavaScript + DOM | JavaScript's role, browser, DOM basics, selectors, console and script placement |
| Day 02 | Variables, Data Types and Operators | `var`, `let`, `const`, data types, conversion and operators |
| Day 03 | Conditional Statements | `if`, `else`, `switch`, ternary and truthy/falsy values |
| Day 04 | Loops | `for`, `while`, `do...while`, `break`, `continue` and `for...of` |
| Day 05 | Functions | Parameters, arguments, `return`, function expressions and arrow functions |
| Day 06 | Arrays | Indexing, array methods, `forEach()`, `map()`, `filter()` and `find()` |
| Day 07 | Objects | Properties, methods, `this`, arrays of objects and `for...in` |

### What comes next?

In the next part, you will use JavaScript more directly in the browser: selecting HTML elements, responding to events, changing page content and making web pages interactive.

---

**End of Day 07 — JavaScript Objects**

*Code Impact Academy*
