# Day 8 — Cascade, Specificity & Inheritance

## 1. Why Does CSS Sometimes Behave Unexpectedly?

Sometimes multiple CSS rules target the same element.

For example:

```css
p {
    color: blue;
}

p {
    color: red;
}
```

Both rules target the same `<p>`.

So which color should the browser use?

This is where the **CSS cascade** comes into play.

---

# 2. Cascade

The **cascade** is the process the browser uses to decide which CSS rule should be applied when multiple rules target the same element.

For our foundation, we mainly need to understand:

- Specificity
- Source order

---

# 3. Source Order

When two rules have the **same selector strength**, the later rule can win.

Example:

```css
p {
    color: blue;
}

p {
    color: red;
}
```

Both selectors are `p`.

The second rule comes later, so the paragraph becomes:

```text
red
```

If we reverse them:

```css
p {
    color: red;
}

p {
    color: blue;
}
```

The paragraph becomes:

```text
blue
```

### Mental model

> When competing rules have equal strength, the later rule can win.

---

# 4. Specificity

Sometimes the selectors are not equally specific.

For example:

```css
p {
    color: blue;
}

.important {
    color: red;
}
```

HTML:

```html
<p class="important">
    Hello, I'm Daniyal.
</p>
```

The text becomes red.

Why?

Because a **class selector is more specific than an element selector**.

For our foundation, remember this basic order:

```text
Element
   ↓
Class
   ↓
ID
```

So:

```css
p { }
```

is less specific than:

```css
.important { }
```

which is less specific than:

```css
#message { }
```

---

# 5. Simple Specificity Experiment

HTML:

```html
<p id="message" class="important">
    Which color will I be?
</p>
```

CSS:

```css
p {
    color: blue;
}

.important {
    color: red;
}

#message {
    color: green;
}
```

The text becomes green because the ID selector is more specific.

The basic mental model is:

```text
element < class < ID
```

This isn't meant to be a complete CSS specificity system. It is simply enough to understand common CSS conflicts.

---

# 6. Practical CSS Debugging

When CSS doesn't behave as expected, don't immediately add more CSS.

Ask:

### 1. Which rules are targeting this element?

### 2. Are two or more rules conflicting?

### 3. Which selector is more specific?

### 4. If they have equal specificity, which rule comes later?

This is extremely useful when working with existing CSS or AI-generated CSS.

---

# 7. Inheritance

Some CSS properties can be inherited from a parent element by its children.

Example:

```html
<div class="parent">

    <h2>My Profile</h2>

    <p>I enjoy programming.</p>

</div>
```

CSS:

```css
.parent {
    color: blue;
    font-family: Arial, sans-serif;
}
```

The text inside the heading and paragraph can inherit these properties from `.parent`.

So instead of writing:

```css
h2 {
    color: blue;
}

p {
    color: blue;
}
```

we can sometimes define the text property on the parent:

```css
.parent {
    color: blue;
}
```

---

# 8. Not Everything Inherits

Inheritance does **not** mean every CSS property automatically passes from parent to child.

For example, properties such as:

```css
color
font-family
```

can commonly be inherited.

But properties such as:

```css
margin
padding
border
```

do not simply get passed down to children.

The important idea is:

> **Some CSS properties inherit from parents; others do not.**

You don't need to memorize every inheritable property at this stage.

---

# 9. Why Inheritance Is Useful

Consider:

```css
body {
    font-family: Arial, sans-serif;
    color: #222;
}
```

Instead of specifying the same font and text color on every element, many child elements can naturally inherit those values.

This keeps CSS simpler and reduces repetition.

---

# 10. What We Need to Remember

### Cascade

> The browser decides which rule should apply when multiple rules target an element.

### Source order

> When competing rules have equal strength, the later rule can win.

### Specificity

Basic order:

```text
element < class < ID
```

### Inheritance

> Some CSS properties can pass from a parent to its children.

---

# Day 8 Practical Exercise

Create a small HTML page and experiment with:

### Exercise 1 — Source order

```css
p {
    color: blue;
}

p {
    color: red;
}
```

Predict the result before running it.

---

### Exercise 2 — Specificity

```css
p {
    color: blue;
}

.text {
    color: red;
}
```

Use:

```html
<p class="text">Hello</p>
```

Predict which rule wins.

---

### Exercise 3 — Class vs ID

```css
.text {
    color: red;
}

#message {
    color: green;
}
```

Use:

```html
<p id="message" class="text">
    Hello
</p>
```

Predict which rule wins.

---

### Exercise 4 — Inheritance

Create a parent `<div>` and place a heading and paragraph inside it.

Give the parent:

```css
color: blue;
font-family: Arial;
```

Observe what the children inherit.

---

# Homework / Mini Research

Research these independently:

1. What is CSS inheritance?
2. Name three CSS properties that commonly inherit.
3. What is `!important`?
4. Why should `!important` not be used casually?
5. Create three CSS conflicts and predict which rule will win before running them.

---

# Day 8 Summary

The main purpose of this day is **not memorizing CSS rules**.

It is learning how to think when CSS conflicts occur:

```text
Multiple rules
      ↓
Which rule applies?
      ↓
Check specificity
      ↓
Check source order
      ↓
Check inheritance
```

> **If you understand why a CSS rule wins, you can debug CSS instead of randomly changing properties.**