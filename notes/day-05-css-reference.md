# Day 5 — CSS Independent Reference

This file contains useful CSS properties and syntax that you should explore independently.

You do not need to memorize everything.

The goal is to know:

* What a property is used for
* When it might be useful
* How to look it up when you need it

---

# 1. Font Properties

## `font-family`

Controls the typeface used for text.

```css
body {
    font-family: Arial, sans-serif;
}
```

You can provide fallback fonts:

```css
body {
    font-family: "Segoe UI", Arial, sans-serif;
}
```

If the first font is unavailable, the browser can try the next one.

---

## `font-style`

Controls the style of text.

```css
p {
    font-style: italic;
}
```

Common values:

```css
font-style: normal;
font-style: italic;
```

---

## `font-weight`

Controls the thickness of text.

```css
p {
    font-weight: bold;
}
```

Numeric values can also be used:

```css
font-weight: 400;
font-weight: 700;
```

---

# 2. Text Properties

## `text-decoration`

Controls text decoration.

```css
a {
    text-decoration: none;
}
```

Common values:

```css
text-decoration: none;
text-decoration: underline;
```

A common use is removing the default underline from links.

---

## `line-height`

Controls the vertical spacing between lines of text.

```css
p {
    line-height: 1.6;
}
```

It is commonly used to improve paragraph readability.

---

## `text-align`

Common values include:

```css
text-align: left;
text-align: center;
text-align: right;
```

---

# 3. Border Properties

## `border-radius`

Controls how rounded the corners of an element are.

```css
.card {
    border-radius: 10px;
}
```

A larger value produces more rounded corners.

For a circular element, equal width and height can be combined with:

```css
border-radius: 50%;
```

---

## Border Shorthand

Instead of:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

you can write:

```css
border: 1px solid black;
```

The general pattern is:

```text
border: width style color;
```

---

# 4. Margin and Padding Shorthand

Multiple values can be written in a compact form.

## One Value

```css
margin: 20px;
```

All four sides:

```text
top    → 20px
right  → 20px
bottom → 20px
left   → 20px
```

---

## Two Values

```css
margin: 10px 20px;
```

```text
top/bottom → 10px
left/right → 20px
```

---

## Three Values

```css
margin: 10px 20px 30px;
```

```text
top        → 10px
left/right → 20px
bottom     → 30px
```

---

## Four Values

```css
margin: 10px 20px 30px 40px;
```

Order:

```text
top → right → bottom → left
```

The same pattern applies to `padding`.

---

# 5. CSS Units

CSS values can use different units.

## Pixels

```css
font-size: 20px;
width: 300px;
```

`px` represents a CSS pixel.

---

## Percentage

```css
width: 50%;
```

A percentage is generally relative to a relevant containing dimension.

---

## Other Units to Know

You will encounter units such as:

```text
em
rem
vw
vh
```

You do not need to master them immediately.

Learn them when you encounter situations where they are useful.

---

# 6. Useful Background Property

## `background-color`

Changes the background color.

```css
body {
    background-color: #f5f5f5;
}
```

CSS colors can be represented in several ways.

For example:

```css
color: red;
color: #ff0000;
```

You will encounter hexadecimal, RGB, RGBA, HSL, and other color formats as you work with CSS.

---

# 7. Width and Height

```css
width: 300px;
height: 200px;
```

Percentage values can also be used:

```css
width: 50%;
```

Width and height become much more important when working with layouts and the Box Model.

---

# 8. `0` and `0px`

For zero values, both are commonly seen:

```css
margin: 0;
```

and:

```css
margin: 0px;
```

For zero, the unit is generally unnecessary.

---

# 9. CSS Shorthand

Many CSS properties provide shorthand forms.

For example:

```css
border: 1px solid black;
```

instead of:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

Shorthand makes CSS more compact.

You will encounter more shorthand properties as you continue learning CSS.

---

# 10. How to Learn New CSS Properties

You will constantly encounter CSS properties that you have never seen before.

Do not try to memorize all of CSS.

Instead:

1. Identify the visual problem.
2. Search for the CSS property that solves it.
3. Understand what the property controls.
4. Try a small example.
5. Use it in your project.
6. Keep the property in your reference notes if it is useful.

For example:

> "I want rounded corners."

Search for:

```text
CSS rounded corners
```

You will discover:

```css
border-radius
```

Then experiment with:

```css
border-radius: 10px;
```

---

# Independent Practice

Choose a few properties from this file and experiment with them in your own HTML/CSS practice.

Do not just copy the examples.

Change the values and observe what happens.

Try to answer:

* What changes?
* What stays the same?
* What happens when I increase the value?
* What happens when I remove the property?
* Where would this property be useful in a real project?

The goal is to become comfortable **discovering and using CSS**, not memorizing a property list.
