# Day 5 — CSS Selectors, Box Model & Box Sizing

## 1. CSS Basics

CSS is used to control the appearance and layout of HTML elements.

Basic CSS rule:

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: blue;
}
```

* `h1` → selector
* `color` → property
* `blue` → value

External CSS can be connected using:

```html
<link rel="stylesheet" href="style.css">
```

---

# 2. Basic CSS Selectors

Selectors tell CSS **which HTML elements to style**.

### Element Selector

Selects all elements of a particular type.

```css
p {
    color: blue;
}
```

This selects every `<p>`.

### Class Selector

Selects elements that have a particular class.

HTML:

```html
<p class="important">Hello</p>
```

CSS:

```css
.important {
    color: red;
}
```

A class can be used on multiple elements.

### ID Selector

Selects an element using its ID.

HTML:

```html
<p id="special">Hello</p>
```

CSS:

```css
#special {
    color: green;
}
```

### Universal Selector

`*` selects every HTML element.

```css
* {
    box-sizing: border-box;
}
```

For now, we are using it mainly to apply `box-sizing` to all elements.

---

# 3. The CSS Box Model

Every HTML element is treated as a box.

The box consists of:

```text
Margin
  ↓
Border
  ↓
Padding
  ↓
Content
```

### Content

The actual content of the element.

```html
<p>Hello</p>
```

The text `Hello` is part of the content.

### Padding

Space **inside** the element, around its content.

```css
padding: 20px;
```

### Border

The visible edge around the element.

```css
border: 2px solid black;
```

### Margin

Space **outside** the element.

```css
margin: 20px;
```

A useful mental model:

> Padding creates space inside the box.
> Margin creates space outside the box.

---

# 4. Width and Height

We can control the size of an element using:

```css
width: 300px;
height: 200px;
```

Example:

```css
.card {
    width: 300px;
    height: 200px;
}
```

---

# 5. The Box Sizing Problem

By default, CSS uses:

```css
box-sizing: content-box;
```

With `content-box`, the declared width applies to the **content area**.

For example:

```css
.card {
    width: 300px;
    padding: 30px;
    border: 10px solid black;
}
```

The padding and border are added outside the declared content width.

This can make the outside of the box larger than the width we specified.

---

# 6. `box-sizing: border-box`

We can change how the browser calculates the size:

```css
box-sizing: border-box;
```

Example:

```css
.card {
    box-sizing: border-box;
    width: 300px;
    padding: 30px;
    border: 10px solid black;
}
```

With `border-box`:

> The declared width includes the content, padding and border.

So if we say:

```css
width: 300px;
```

the **whole box is intended to stay 300px wide**.

---

# 7. Applying `border-box` to Everything

Instead of writing:

```css
.card {
    box-sizing: border-box;
}

.form {
    box-sizing: border-box;
}

img {
    box-sizing: border-box;
}
```

we can use the universal selector:

```css
* {
    box-sizing: border-box;
}
```

`*` means:

> Select every element.

---

# Mental Model

Remember the concepts like this:

```text
CSS
 ↓
Select an element
 ↓
Style the element
 ↓
Every element is a box
 ↓
Content
Padding
Border
Margin
 ↓
Width / Height control size
 ↓
box-sizing controls how that size is calculated
```

## Day 5 Key Takeaways

* CSS selectors choose which HTML elements to style.
* Element selector → `p`
* Class selector → `.class-name`
* ID selector → `#id`
* Universal selector → `*`
* Every HTML element is treated as a box.
* Padding is inside.
* Border surrounds the element.
* Margin is outside.
* `width` and `height` control size.
* `border-box` makes the declared width/height include padding and border.
