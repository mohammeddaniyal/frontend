# Code Impact Academy
## B-01 — DOM Selection

### Learning objectives

By the end of this lesson, you should be able to:

- Understand what DOM selection means.
- Select HTML elements using JavaScript.
- Use `getElementById()`, `getElementsByClassName()` and `getElementsByTagName()`.
- Use `querySelector()` and `querySelectorAll()`.
- Understand the basic difference between the selector methods.

---

## 1. What is DOM selection?

When a browser loads an HTML page, it creates a structured representation of that page called the **DOM (Document Object Model)**.

JavaScript can use the DOM to access HTML elements.

**DOM selection** means finding and selecting an HTML element so that JavaScript can work with it.

For example, if we want JavaScript to change a heading, we first need to select that heading.

```html
<h1 id="title">Welcome</h1>
```

```javascript
let heading = document.getElementById("title");
console.log(heading);
```

Here:

- `document` represents the loaded web page.
- `getElementById()` searches for an element by its ID.
- `heading` stores the selected element.

> Selecting an element does not change it. It simply gives JavaScript a reference to that element.

---

## 2. The `document` object

The `document` object is the entry point JavaScript commonly uses to access the page's DOM.

```javascript
console.log(document);
```

You can use `document` to select elements from the HTML page.

```javascript
let heading = document.getElementById("title");
```

---

## 3. `getElementById()`

Selects one element using its `id`.

### HTML

```html
<h1 id="main-title">Hello, students!</h1>
```

### JavaScript

```javascript
let title = document.getElementById("main-title");
console.log(title);
```

**Remember:**
- Pass the ID without the `#` symbol.
- An ID should be unique within the page.
- If no matching element exists, the result is `null`.

### Interactive example

Click the button and inspect the selected heading in the console.

```html
<h2 id="message">DOM is interesting!</h2>
<button id="show-button">Select heading</button>

<script>
    let heading = document.getElementById("message");
    let button = document.getElementById("show-button");

    button.addEventListener("click", function () {
        console.log(heading);
    });
</script>
```

---

## 4. `getElementsByClassName()`

Selects all elements that have the specified class name.

### HTML

```html
<p class="note">First note</p>
<p class="note">Second note</p>
<p class="note">Third note</p>
```

### JavaScript

```javascript
let notes = document.getElementsByClassName("note");

console.log(notes);
console.log(notes[0]);
console.log(notes[1]);
```

**Remember:**
- Pass the class name without the `.` symbol.
- It returns an `HTMLCollection`.
- Use an index to access an individual element.
- The collection is live: it updates when matching elements are added to or removed from the DOM.

### Interactive example

```html
<p class="note">HTML</p>
<p class="note">CSS</p>
<p class="note">JavaScript</p>

<button id="show-notes">Show selected notes</button>

<script>
    let notes = document.getElementsByClassName("note");

    document.getElementById("show-notes").addEventListener("click", function () {
        console.log(notes);
        console.log("First note:", notes[0]);
    });
</script>
```

---

## 5. `getElementsByTagName()`

Selects all elements with the specified HTML tag name.

### HTML

```html
<p>First paragraph</p>
<p>Second paragraph</p>
<h2>A heading</h2>
```

### JavaScript

```javascript
let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);
console.log(paragraphs[0]);
```

**Remember:**
- Pass the tag name, such as `"p"`, `"h1"` or `"button"`.
- It returns an `HTMLCollection`.
- Use an index to access an individual element.
- The collection is live.

### Interactive example

```html
<p>Learn HTML</p>
<p>Learn CSS</p>
<p>Learn JavaScript</p>

<button id="count-paragraphs">Count paragraphs</button>

<script>
    let paragraphs = document.getElementsByTagName("p");

    document.getElementById("count-paragraphs").addEventListener("click", function () {
        console.log("Total paragraphs:", paragraphs.length);
    });
</script>
```

---

## 6. `querySelector()`

Selects the **first element** that matches a CSS selector.

It uses the same selector style you already know from CSS.

### Select by ID

```javascript
let title = document.querySelector("#main-title");
```

### Select by class

```javascript
let card = document.querySelector(".course-card");
```

### Select by tag

```javascript
let heading = document.querySelector("h1");
```

### Select a nested element

```javascript
let button = document.querySelector(".course-card button");
```

**Remember:** Use CSS selector syntax:
- `#` for an ID.
- `.` for a class.
- A tag name for an HTML element.

If no element matches, `querySelector()` returns `null`.

### Interactive example

```html
<h2 class="topic">HTML</h2>
<h2 class="topic">CSS</h2>
<h2 class="topic">JavaScript</h2>

<button id="select-topic">Select first topic</button>

<script>
    document.getElementById("select-topic").addEventListener("click", function () {
        let topic = document.querySelector(".topic");
        console.log(topic);
    });
</script>
```

Even though three elements have the `topic` class, `querySelector()` selects only the first matching element.

---

## 7. `querySelectorAll()`

Selects **all elements** that match a CSS selector.

### HTML

```html
<p class="subject">HTML</p>
<p class="subject">CSS</p>
<p class="subject">JavaScript</p>
```

### JavaScript

```javascript
let subjects = document.querySelectorAll(".subject");

console.log(subjects);
console.log(subjects[0]);
console.log(subjects[1]);
```

It returns a `NodeList`.

You can use `forEach()` to work with each selected element:

```javascript
let subjects = document.querySelectorAll(".subject");

subjects.forEach(function (subject) {
    console.log(subject);
});
```

### Interactive example

```html
<p class="subject">HTML</p>
<p class="subject">CSS</p>
<p class="subject">JavaScript</p>

<button id="show-subjects">Show all subjects</button>

<script>
    let subjects = document.querySelectorAll(".subject");

    document.getElementById("show-subjects").addEventListener("click", function () {
        subjects.forEach(function (subject) {
            console.log(subject);
        });
    });
</script>
```

---

## 8. Understanding the returned collections

Some selection methods return a collection because they can match multiple elements.

| Method | Returns |
|---|---|
| `getElementById()` | One element, or `null` |
| `getElementsByClassName()` | Live `HTMLCollection` |
| `getElementsByTagName()` | Live `HTMLCollection` |
| `querySelector()` | First matching element, or `null` |
| `querySelectorAll()` | Static `NodeList` |

### What does live and static mean?

- **Live collection:** Automatically reflects matching changes in the DOM.
- **Static collection:** Represents the elements that matched when the selection was made. It does not automatically update when the DOM later changes.

For this lesson, remember the basic difference. We do not need to study collection behavior in depth yet.

---

## 9. Quick comparison

| What do you want to select? | Method | Example |
|---|---|---|
| One element by ID | `getElementById()` | `document.getElementById("title")` |
| Elements by class | `getElementsByClassName()` | `document.getElementsByClassName("card")` |
| Elements by tag | `getElementsByTagName()` | `document.getElementsByTagName("p")` |
| First CSS selector match | `querySelector()` | `document.querySelector(".card")` |
| All CSS selector matches | `querySelectorAll()` | `document.querySelectorAll(".card")` |

### Which method should you use?

- Use `getElementById()` when selecting one element by its ID.
- Use `querySelector()` when selecting one element with CSS selector syntax.
- Use `querySelectorAll()` when selecting all elements matching a CSS selector.
- The other two methods are useful to recognize and understand, especially in existing code.

---

## 10. Mini practical — Select elements from a course card

Imagine we have this HTML:

```html
<div class="course-card">
    <h2 class="course-title">JavaScript Basics</h2>
    <p class="course-description">Learn the fundamentals of JavaScript.</p>
    <button class="course-button">View Course</button>
</div>
```

Select the elements:

```javascript
let card = document.querySelector(".course-card");
let title = document.querySelector(".course-title");
let description = document.querySelector(".course-description");
let button = document.querySelector(".course-button");

console.log(card);
console.log(title);
console.log(description);
console.log(button);
```

Notice that we are only selecting the elements. We are not changing their content or behavior yet.

---

## 11. Common mistakes

### 1. Including `#` in `getElementById()`

```javascript
// Incorrect
document.getElementById("#title");

// Correct
document.getElementById("title");
```

### 2. Forgetting the `.` in a class CSS selector

```javascript
// Incorrect if you intend to select a class
document.querySelector("course-card");

// Correct
document.querySelector(".course-card");
```

### 3. Expecting `querySelector()` to select every match

```javascript
let cards = document.querySelector(".card");
```

This selects only the first matching card. Use `querySelectorAll()` to select all matching cards.

### 4. Accessing an element that was not found

```javascript
let title = document.getElementById("wrong-id");

console.log(title); // null
```

Check that the ID or selector matches the HTML.

### 5. Running JavaScript before the HTML element exists

If the script runs before the browser has parsed the element, the selection may return `null`.

A simple solution is to place the script just before the closing `</body>` tag:

```html
<body>
    <h1 id="title">Hello!</h1>
    <script src="script.js"></script>
</body>
```

Another common solution is to use `defer` with an external script:

```html
<head>
    <script src="script.js" defer></script>
</head>
```

---

## 12. Practice exercises

Use a small HTML page to complete these exercises.

1. Create an `h1` with the ID `main-heading`. Select it using `getElementById()`.
2. Create three paragraphs with the same class. Select them using `getElementsByClassName()`.
3. Select all buttons using `getElementsByTagName()`.
4. Create three elements with the class `box`. Use `querySelector()` and check which element is selected.
5. Use `querySelectorAll()` to select all elements with the class `box`.
6. Select the button inside a card using a nested CSS selector.
7. Use `forEach()` to print all selected elements from `querySelectorAll()`.

---

## 13. Quick revision

1. What is the DOM?
2. What does DOM selection mean?
3. What is the purpose of the `document` object?
4. What is the difference between `getElementById()` and `querySelector()`?
5. What is the difference between `querySelector()` and `querySelectorAll()`?
6. Which methods return an `HTMLCollection`?
7. What is the basic difference between an `HTMLCollection` and a `NodeList`?
8. What does a selector method return when it cannot find a matching element?

---

## 14. Next practical — Responsive Navbar

Now that you know how to select HTML elements, you can prepare an existing component for JavaScript interaction.

In the Responsive Navbar practical, you will:

1. Inspect the existing navbar HTML.
2. Identify the menu button, navigation container and navigation links.
3. Select those elements using DOM selection methods.
4. Store the selected elements in variables.
5. Use `console.log()` to verify that the correct elements were selected.

We will add the actual menu interaction after learning browser events and CSS class manipulation.

---

**End of B-01 — DOM Selection**

*Code Impact Academy*
