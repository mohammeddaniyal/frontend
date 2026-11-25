# Code Impact Academy
## B-02 — DOM Manipulation

### Learning objectives

By the end of this lesson, you should be able to:

- Explain what DOM manipulation means.
- Read and change the text or HTML content of an element.
- Understand the difference between `textContent`, `innerText` and `innerHTML`.
- Read, set and remove HTML attributes.
- Read and update common element properties such as `value`, `src` and `href`.

> **Prerequisite:** B-01 — DOM Selection. Before manipulating an element, you first need to select it.

---

## 1. What is DOM manipulation?

DOM manipulation means using JavaScript to read or change elements and their content in a web page.

For example, imagine this HTML:

```html
<h1 id="title">Welcome</h1>
```

We can select the heading and change its text using JavaScript:

```javascript
let heading = document.getElementById("title");

heading.textContent = "Welcome to JavaScript!";
```

The page now displays:

```text
Welcome to JavaScript!
```

The process is:

1. Select the element.
2. Access the content or attribute you want to work with.
3. Read its current value or assign a new value.

**Remember:** DOM selection finds an element. DOM manipulation reads or changes something about that element.

---

## 2. Reading and changing element content

JavaScript provides different properties for reading or changing the content of an element.

The three important ones are:

- `textContent`
- `innerText`
- `innerHTML`

### A. `textContent`

`textContent` gets or sets the text content of an element and its descendants.

Example — HTML:

```html
<h2 id="heading">Learn JavaScript</h2>
```

Read the text:

```javascript
let heading = document.getElementById("heading");

console.log(heading.textContent);
```

Output:

```text
Learn JavaScript
```

Change the text:

```javascript
heading.textContent = "JavaScript is fun!";
```

The heading now displays:

```text
JavaScript is fun!
```

### B. `innerText`

`innerText` gets or sets the rendered text of an element.

Example:

```html
<p id="message">Welcome to our academy.</p>
```

```javascript
let message = document.getElementById("message");

console.log(message.innerText);

message.innerText = "Start learning today!";
```

For simple visible text, `innerText` and `textContent` often appear to behave the same. Their difference becomes important when an element contains hidden content or when rendered text and layout matter.

### C. `innerHTML`

`innerHTML` gets or sets the HTML markup inside an element.

Example:

```html
<div id="content">
    <h2>Hello!</h2>
    <p>Welcome to JavaScript.</p>
</div>
```

Read the HTML:

```javascript
let content = document.getElementById("content");

console.log(content.innerHTML);
```

The result contains the HTML markup inside the `div`.

You can also replace the content with new HTML:

```javascript
content.innerHTML = "<h2>New heading</h2><p>New paragraph</p>";
```

The browser interprets the assigned string as HTML and creates the corresponding elements.

### `textContent` vs `innerText` vs `innerHTML`

| Property | Reads | When setting a value |
|---|---|---|
| `textContent` | Text content, including text in hidden descendants | Inserts text; HTML-looking characters are treated as text |
| `innerText` | Rendered, visible text | Sets rendered text content |
| `innerHTML` | HTML markup inside the element | Parses the string as HTML and replaces the element's contents |

### Small interactive example

```html
<div id="demo">
    <h2>Hello students!</h2>
    <p>We are learning DOM manipulation.</p>
</div>

<button id="show-text">Show textContent</button>
<button id="show-html">Show innerHTML</button>

<script>
    let demo = document.getElementById("demo");

    document.getElementById("show-text").addEventListener("click", function () {
        console.log(demo.textContent);
    });

    document.getElementById("show-html").addEventListener("click", function () {
        console.log(demo.innerHTML);
    });
</script>
```

Click each button and compare the results in the browser console.

### Important: Be careful with `innerHTML`

When you assign a string to `innerHTML`, the browser parses it as HTML. Never place untrusted user input directly into `innerHTML`. Doing so can create cross-site scripting (XSS) vulnerabilities.

For plain user-provided text, prefer `textContent`.

---

## 3. Working with HTML attributes

HTML attributes provide additional information or settings for an element.

Example:

```html
<img id="course-image" src="course.jpg" alt="Course image">
```

Here, `id`, `src` and `alt` are attributes.

JavaScript provides methods to read, add, change and remove attributes.

### A. `getAttribute()`

Reads the value of an attribute.

```html
<img id="course-image" src="course.jpg" alt="Course image">
```

```javascript
let image = document.getElementById("course-image");

console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));
```

Output:

```text
course.jpg
Course image
```

### B. `setAttribute()`

Adds an attribute or changes its value if it already exists.

```javascript
let image = document.getElementById("course-image");

image.setAttribute("src", "javascript-course.jpg");
image.setAttribute("alt", "JavaScript course");
```

The image now has the updated `src` and `alt` attributes.

### C. `removeAttribute()`

Removes an attribute from an element.

```html
<input id="username" type="text" placeholder="Enter your name" disabled>
```

```javascript
let input = document.getElementById("username");

input.removeAttribute("disabled");
```

The `disabled` attribute is removed, so the input is no longer disabled by that attribute.

### D. `hasAttribute()`

Checks whether an element has a particular attribute.

It returns `true` or `false`.

```html
<button id="submit-button" disabled>Submit</button>
```

```javascript
let button = document.getElementById("submit-button");

console.log(button.hasAttribute("disabled")); // true
console.log(button.hasAttribute("type"));     // false
```

### Attribute methods — quick revision

| Method | Purpose |
|---|---|
| `getAttribute()` | Read an attribute's value |
| `setAttribute()` | Add or update an attribute |
| `removeAttribute()` | Remove an attribute |
| `hasAttribute()` | Check whether an attribute exists |

### Small interactive example

```html
<a id="course-link" href="https://example.com">
    Visit course
</a>

<button id="change-link">Change link</button>

<script>
    let link = document.getElementById("course-link");

    console.log(link.getAttribute("href"));

    document.getElementById("change-link").addEventListener("click", function () {
        link.setAttribute("href", "https://developer.mozilla.org/");
        link.textContent = "Visit MDN";
    });
</script>
```

The button changes the link destination and its displayed text.

---

## 4. Working with common element properties

HTML elements also expose JavaScript properties. These are often convenient when working with elements.

### A. `.value`

Used mainly with form controls such as inputs, textareas and select elements.

```html
<input id="username" type="text" value="Aman">
```

Read the current value:

```javascript
let input = document.getElementById("username");

console.log(input.value);
```

Update the value:

```javascript
input.value = "Rahul";
```

The input now displays `Rahul`.

### B. `.src`

Reads or changes the source of an image.

```html
<img id="profile-image" src="profile.jpg" alt="Profile">
```

```javascript
let image = document.getElementById("profile-image");

image.src = "new-profile.jpg";
```

### C. `.href`

Reads or changes the destination of a link.

```html
<a id="website-link" href="https://example.com">Visit website</a>
```

```javascript
let link = document.getElementById("website-link");

link.href = "https://developer.mozilla.org/";
```

### D. `.id`

Reads or changes the ID property of an element.

```html
<h2 id="old-title">Hello!</h2>
```

```javascript
let heading = document.getElementById("old-title");

heading.id = "new-title";
```

### E. `.className`

Reads or replaces the complete class attribute as a string.

```html
<p id="message" class="note active">Welcome!</p>
```

```javascript
let message = document.getElementById("message");

console.log(message.className);

message.className = "success";
```

The element's class list is now just `success`; the previous classes are replaced.

> We will learn a better way to add, remove and toggle individual CSS classes in **B-03 — CSS Manipulation**.

---

## 5. Attribute methods vs element properties

Attributes and properties are related, but they are not always identical.

For example, an input's HTML `value` attribute represents its initial value, while its `.value` property represents its current value.

```html
<input id="name" value="Aman">
```

```javascript
let input = document.getElementById("name");

console.log(input.getAttribute("value")); // Initial HTML attribute
console.log(input.value);                 // Current input value
```

If the user edits the input, `.value` reflects the current text. The original HTML attribute may remain unchanged.

For now, remember:

- Use `getAttribute()` and `setAttribute()` when you specifically need to work with HTML attributes.
- Use properties such as `.value`, `.src` and `.href` when working with the element's current state or commonly exposed values.

---

## 6. Mini practical — Update a course card

Consider this existing HTML:

```html
<div class="course-card">
    <img id="course-image" src="c-course.jpg" alt="C course">

    <h2 id="course-title">C Programming</h2>

    <p id="course-description">
        Learn programming fundamentals.
    </p>

    <a id="course-link" href="c-course.html">
        View course
    </a>
</div>
```

Select the elements and update their content and attributes:

```javascript
let image = document.getElementById("course-image");
let title = document.getElementById("course-title");
let description = document.getElementById("course-description");
let link = document.getElementById("course-link");

title.textContent = "JavaScript Basics";

description.textContent = "Learn the fundamentals of JavaScript.";

image.setAttribute("src", "javascript-course.jpg");
image.setAttribute("alt", "JavaScript course");

link.href = "javascript-course.html";
link.textContent = "Explore JavaScript";
```

This example combines element selection, content manipulation and attribute/property updates.

---

## 7. Common mistakes

### 1. Confusing `textContent` and `innerHTML`

```javascript
let box = document.getElementById("box");

box.textContent = "<strong>Hello</strong>";
```

This displays the angle-bracket text. It does not create a bold element.

To insert HTML markup:

```javascript
box.innerHTML = "<strong>Hello</strong>";
```

Only use `innerHTML` with trusted or safely handled content.

### 2. Replacing HTML when you only need to change text

```javascript
heading.innerHTML = "New heading";
```

This works, but if you only need to insert text, prefer:

```javascript
heading.textContent = "New heading";
```

### 3. Forgetting that `innerHTML` replaces existing content

```javascript
box.innerHTML = "<p>New content</p>";
```

This replaces everything previously inside `box`.

### 4. Using `setAttribute()` with the wrong arguments

```javascript
// Incorrect
image.setAttribute("new-image.jpg");

// Correct
image.setAttribute("src", "new-image.jpg");
```

The first argument is the attribute name; the second is its value.

### 5. Confusing `.value` with `.textContent`

For an input, read the user's entered text using `.value`:

```javascript
let input = document.getElementById("username");

console.log(input.value);
```

An input does not use `textContent` to represent the text currently typed into it.

### 6. Replacing all classes accidentally

```javascript
element.className = "active";
```

This replaces the complete class string. We will learn how to manage individual classes with `classList` in B-03.

---

## 8. Practice exercises

Create a small HTML page and complete these exercises.

1. Create a heading and change its text using `textContent`.
2. Read the text of a paragraph using `innerText`.
3. Create a `div` and insert a heading and paragraph using `innerHTML`.
4. Create an image and change its `src` and `alt` attributes.
5. Create a link and update its `href` using `setAttribute()`.
6. Create a disabled button and remove its `disabled` attribute.
7. Create an input and display its current `.value` in the console.
8. Create a paragraph with two classes and inspect its `.className`.

---

## 9. Quick revision

1. What is DOM manipulation?
2. How is DOM manipulation different from DOM selection?
3. What is the difference between `textContent` and `innerHTML`?
4. What does `innerText` represent?
5. What is the purpose of `getAttribute()`?
6. What is the difference between `setAttribute()` and `removeAttribute()`?
7. What does `hasAttribute()` return?
8. How do you read the current value of an input?
9. What is the difference between an input's `value` attribute and `.value` property?
10. Why should untrusted user input not be inserted directly using `innerHTML`?

---

## 10. Next concept — B-03 CSS Manipulation

You now know how to select elements and change their content, attributes and common properties.

In the next lesson, you will learn how JavaScript can change an element's appearance by working with CSS classes.

Topics include:

- `element.style`
- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `classList.contains()`

These concepts will help us implement the interactive mobile menu in our existing Responsive Navbar.

---

**End of B-02 — DOM Manipulation**

*Code Impact Academy*
