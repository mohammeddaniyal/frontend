# Day 7 — Block, Inline & Normal Flow

## 1. How HTML Elements Behave

HTML elements don't all behave the same way on a page.

Some elements naturally start on a new line, while others can appear beside surrounding content.

The two important categories are:

- Block elements
- Inline elements

CSS can also change this behavior using the `display` property.

---

# 2. Block Elements

A block element normally:

- Starts on a new line
- Takes the available width
- Causes the next block element to appear below it

Example:

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

Result:

```text
Box 1
Box 2
Box 3
```

Common block-level elements include:

```text
<div>
<p>
<h1> to <h6>
<section>
<header>
<footer>
<main>
<nav>
```

The important idea is:

> **Block elements normally occupy their own line.**

---

# 3. Inline Elements

Inline elements normally:

- Stay within the current line
- Take only the space their content needs
- Allow other inline content to appear beside them

Example:

```html
<span>Item 1</span>
<span>Item 2</span>
<span>Item 3</span>
```

Result:

```text
Item 1 Item 2 Item 3
```

Common inline elements include:

```text
<span>
<a>
<strong>
<em>
```

For example:

```html
<p>
    My name is <span>Daniyal</span> and I am a developer.
</p>
```

The `<span>` remains part of the same line of text.

---

# 4. Block vs Inline

A simple mental model:

```text
Block
↓
Own line

Inline
→
Flows with surrounding content
```

Example:

```html
<div>First</div>
<div>Second</div>

<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>
```

The `div` elements normally stack vertically, while the links can appear on the same line.

---

# 5. Width and Height

Block and inline elements don't behave the same way when dimensions are applied.

For example:

```css
div {
    width: 200px;
    height: 50px;
}
```

A block element can behave as a box with the specified dimensions.

Inline elements don't behave like normal block boxes when `width` and `height` are applied.

The important foundation is:

> **Block elements behave like boxes occupying their own line, while inline elements behave more like content flowing within a line.**

---

# 6. The `display` Property

The `display` property controls how an element participates in the layout.

Basic values for this course:

```css
display: block;
display: inline;
display: inline-block;
```

---

## `display: block`

Makes an element behave as a block-level element.

```css
span {
    display: block;
}
```

The spans will now behave like blocks:

```text
Item 1
Item 2
Item 3
```

---

## `display: inline`

Makes an element behave as an inline element.

```css
div {
    display: inline;
}
```

The elements can now flow beside each other.

---

## `display: inline-block`

`inline-block` combines useful characteristics of both.

The element:

- Can sit beside other inline-level elements
- Can have width and height like a box

Example:

```css
.item {
    display: inline-block;
    width: 150px;
    height: 50px;
}
```

Result can look like:

```text
┌──────────────┐  ┌──────────────┐
│    Item 1    │  │    Item 2    │
└──────────────┘  └──────────────┘
```

Mental model:

```text
block
→ own line

inline
→ flows within a line

inline-block
→ flows inline + behaves like a box
```

---

# 7. Normal Flow

**Normal flow** is the browser's default way of arranging elements when we haven't applied special layout techniques.

For example:

```html
<h1>Heading</h1>

<p>Paragraph</p>

<div>Box 1</div>

<div>Box 2</div>
```

The browser automatically arranges these elements according to their normal behavior.

Block elements generally flow vertically:

```text
↓
↓
↓
```

Inline content generally flows horizontally:

```text
→ → →
```

When there isn't enough horizontal space, inline content can continue onto the next line.

The important idea is:

> **Normal flow is the default layout behavior of the browser.**

---

# 8. `<br>` vs CSS Layout

The `<br>` element creates a line break in content.

Example:

```html
Name
<br>
<input type="text">
```

This can be useful when a line break is actually part of the content.

However, `<br>` should not normally be used to build an entire page layout.

For example, don't solve a form layout by adding many `<br>` elements:

```html
<label>Name</label>
<br>

<input type="text">
<br>

<label>Email</label>
<br>

<input type="email">
```

Instead, use CSS to control the layout.

For example:

```css
label {
    display: block;
}
```

This keeps:

- HTML → structure/content
- CSS → presentation/layout

---

# 9. Practical Example

HTML:

```html
<h2>Navigation</h2>

<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>

<h2>Cards</h2>

<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

CSS:

```css
.card {
    width: 150px;
    height: 50px;
    background-color: lightgray;
    margin: 5px;
}
```

The cards naturally appear one below another because `div` is a block element.

The links naturally appear beside each other because `a` is an inline element.

---

# 10. When Should You Use `display`?

Use `display` when you need to change how an element participates in the layout.

For example:

```css
label {
    display: block;
}
```

This can make each label occupy its own line.

Or:

```css
.item {
    display: inline-block;
}
```

This can allow multiple boxes to sit beside each other while still having controlled dimensions.

Later, more powerful layout systems such as **Flexbox** and **Grid** will provide better solutions for complex layouts.

---

# Day 7 Summary

### Block

```css
display: block;
```

- Starts on a new line
- Behaves like a block/box
- Can have width and height

### Inline

```css
display: inline;
```

- Flows with surrounding content
- Doesn't normally behave like a full box with explicit width and height

### Inline-block

```css
display: inline-block;
```

- Can sit beside other elements
- Can have width and height

### Normal Flow

> The browser's default way of arranging elements.

### Most important mental model

> **HTML elements have default layout behavior. CSS can change that behavior when necessary.**

And remember:

> **Don't use `<br>` as a replacement for CSS layout.**