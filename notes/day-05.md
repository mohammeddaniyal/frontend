# Day 5 — CSS Foundations

CSS (Cascading Style Sheets) is used to control the **appearance and presentation** of HTML elements.

HTML defines the structure and content.

CSS controls the appearance of that structure.

---

# 1. CSS Syntax

A CSS rule generally looks like:

```css
selector {
    property: value;
}
```

Example:

```css
p {
    color: blue;
}
```

Here:

* `p` → selector
* `color` → property
* `blue` → value

Think:

```text
Selector
   ↓
Which element?

Property
   ↓
What do I want to change?

Value
   ↓
How should I change it?
```

---

# 2. Ways to Apply CSS

There are three common ways to apply CSS.

## Inline CSS

CSS is written directly inside an HTML element using the `style` attribute.

```html
<h1 style="color: blue;">
    Hello
</h1>
```

The `style` attribute contains CSS declarations.

Inline CSS is useful for quick experiments, but it is generally not preferred for larger projects.

---

## Internal CSS

CSS is written inside a `<style>` element.

```html
<style>
    h1 {
        color: blue;
    }
</style>
```

Internal CSS applies to elements on that HTML page.

---

## External CSS

CSS is written in a separate `.css` file.

HTML:

```html
<link rel="stylesheet" href="style.css">
```

CSS:

```css
h1 {
    color: blue;
}
```

The `<link>` element connects the HTML document to the stylesheet.

* `rel="stylesheet"` → identifies the linked resource as a stylesheet
* `href` → specifies the stylesheet location

For real projects, external CSS is usually the preferred approach.

---

# 3. CSS Selectors

A selector determines which HTML elements a CSS rule targets.

## Element Selector

Targets elements by their HTML element name.

```css
p {
    color: gray;
}
```

This targets matching `<p>` elements.

---

## Class Selector

A class can be assigned to HTML elements.

```html
<p class="description">
    Some text
</p>
```

A class selector starts with `.`:

```css
.description {
    color: gray;
}
```

Multiple elements can use the same class.

```html
<p class="description">First paragraph</p>
<p class="description">Second paragraph</p>
```

Classes are commonly used when we want to style a group of elements.

---

## ID Selector

An ID selector targets an element using its `id`.

HTML:

```html
<h1 id="main-title">
    My Profile
</h1>
```

CSS uses `#` before the ID:

```css
#main-title {
    color: blue;
}
```

Think:

```text
id="main-title"
       ↓
#main-title
```

An ID is intended to identify a specific element.

### Class vs ID

| Class                            | ID                                      |
| -------------------------------- | --------------------------------------- |
| Starts with `.`                  | Starts with `#`                         |
| `.title`                         | `#main-title`                           |
| Can be used on multiple elements | Intended for one specific element       |
| Commonly used for styling groups | Useful for targeting a specific element |

For now:

> **Class → group of elements**
> **ID → specific element**

IDs will also become important later when JavaScript needs to find specific elements.

---

# 4. Essential CSS Properties

For this session, understand these basic properties:

## `color`

Changes text color.

```css
p {
    color: blue;
}
```

## `background-color`

Changes the background color.

```css
div {
    background-color: lightgray;
}
```

## `font-size`

Controls text size.

```css
p {
    font-size: 18px;
}
```

## `font-weight`

Controls text thickness.

```css
p {
    font-weight: bold;
}
```

## `text-align`

Controls text alignment.

```css
h1 {
    text-align: center;
}
```

## `width`

Controls the width of an element.

```css
div {
    width: 300px;
}
```

## `height`

Controls the height of an element.

```css
div {
    height: 200px;
}
```

## `border`

Creates a visible boundary around an element.

```css
div {
    border: 1px solid black;
}
```

For now, understand the basic structure:

```text
border: width style color;
```

Example:

```css
border: 1px solid black;
```

---

# 5. Margin and Padding — Basic Awareness

Margin and padding are important CSS properties.

For now, only understand their basic purpose.

### Padding

Creates space inside an element.

```css
.card {
    padding: 20px;
}
```

### Margin

Creates space outside an element.

```css
.card {
    margin: 20px;
}
```

Their complete behavior will be studied with the **CSS Box Model**.

---

# 6. CSS Priority — Basic Experiment

The same element can receive conflicting styles from different CSS sources.

For example:

External CSS:

```css
.title {
    color: blue;
}
```

Internal CSS:

```css
.title {
    color: green;
}
```

Inline CSS:

```html
<h1 class="title" style="color: red;">
    Hello CSS
</h1>
```

In this simple example, the inline declaration wins.

The important idea is:

> CSS uses cascading rules to determine which declaration wins when styles conflict.

We will study the cascade, specificity, source order, and inheritance in more detail later.

---

# 7. Common CSS Problems

When CSS does not work, check the basics first.

### Is the CSS file connected?

```html
<link rel="stylesheet" href="style.css">
```

Check the filename and path.

### Does the selector match?

HTML:

```html
<p class="description">
    Hello
</p>
```

CSS:

```css
.title {
    color: red;
}
```

The selector does not match the element.

### Is there a property typo?

```css
p {
    colr: red;
}
```

`colr` is not a valid CSS property.

### Is the CSS syntax correct?

Correct:

```css
p {
    color: red;
}
```

CSS declarations follow:

```text
property : value;
```

---

# 8. CSS Mental Model

Think about CSS as answering four questions:

### 1. What should I style?

Use a selector.

```css
.card
```

### 2. What do I want to change?

Choose a property.

```css
background-color
```

### 3. What should it become?

Give it a value.

```css
lightgray
```

Together:

```css
.card {
    background-color: lightgray;
}
```

### 4. Where should the CSS live?

```text
Inline
Internal
External
```

For real projects, external CSS will usually be the main approach.

---

# Important

You do **not** need to memorize hundreds of CSS properties.

The important skill is:

> Look at a visual problem → identify what needs to change → choose the appropriate CSS property → apply it to the correct element.

Additional useful CSS properties and syntax are provided in the **CSS Reference** file for independent learning.
