# Day 6 — CSS Box Model

The CSS Box Model describes how the browser treats every HTML element as a rectangular box.

A simplified model is:

![CSS box model diagram showing content, padding, border, and margin](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Box-model.svg/960px-Box-model.svg.png)

*Diagram by Charles Calvert, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Box-model.svg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).*

The four main parts are:

```text
content
padding
border
margin
```

---

# 1. Content

The content is the actual material inside an element.

For example:

```html
<div class="card">
    Hello, I'm Daniyal.
</div>
```

The text is the content.

CSS properties such as `width` and `height` can affect the dimensions of the element.

---

# 2. Border

A border creates a visible boundary around an element.

```css
.card {
    border: 1px solid black;
}
```

The shorthand syntax is:

```text
border: width style color;
```

Example:

```css
border: 2px solid black;
```

Here:

```text
2px   → border width
solid → border style
black → border color
```

## Individual Border Properties

The combined `border` property is shorthand for separate properties.

### Border Width

```css
border-width: 2px;
```

Controls the thickness of the border.

### Border Style

```css
border-style: solid;
```

Common styles include:

```css
border-style: solid;
border-style: dashed;
border-style: dotted;
border-style: double;
border-style: none;
```

### Border Color

```css
border-color: black;
```

Controls the border color.

Therefore:

```css
border: 2px dashed red;
```

is a compact way of specifying:

```css
border-width: 2px;
border-style: dashed;
border-color: red;
```

---

# 3. Padding

Padding creates space **inside** an element, between its content and its border.

```css
.card {
    padding: 20px;
}
```

Think:

> Padding pushes the content away from the border.

---

## Padding Shorthand

### One value

```css
padding: 20px;
```

Applies to all four sides.

```text
top    → 20px
right  → 20px
bottom → 20px
left   → 20px
```

### Two values

```css
padding: 10px 20px;
```

```text
top/bottom → 10px
left/right → 20px
```

### Three values

```css
padding: 10px 20px 30px;
```

```text
top        → 10px
left/right → 20px
bottom     → 30px
```

### Four values

```css
padding: 10px 20px 30px 40px;
```

The order is:

```text
top → right → bottom → left
```

---

## Individual Padding Properties

The four sides can also be controlled separately:

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

The shorthand is simply a convenient way to write these values together.

---

# 4. Margin

Margin creates space **outside** an element.

```css
.card {
    margin: 20px;
}
```

Think:

> Margin creates space between an element and other surrounding elements.

---

## Margin Shorthand

Margin follows the same four-side pattern as padding.

### One value

```css
margin: 20px;
```

```text
top/right/bottom/left → 20px
```

### Two values

```css
margin: 10px 20px;
```

```text
top/bottom → 10px
left/right → 20px
```

### Three values

```css
margin: 10px 20px 30px;
```

```text
top        → 10px
left/right → 20px
bottom     → 30px
```

### Four values

```css
margin: 10px 20px 30px 40px;
```

```text
top → right → bottom → left
```

---

## Individual Margin Properties

```css
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;
```

---

# 5. Padding vs Margin

This distinction is extremely important.

```text
Padding
↓
Space INSIDE the element

Margin
↓
Space OUTSIDE the element
```

For example:

```text
        MARGIN
    ↕           ↕

    ┌───────────────┐
    │    BORDER     │
    │  ┌─────────┐  │
    │  │ PADDING │  │
    │  │ CONTENT │  │
    │  └─────────┘  │
    └───────────────┘

    ↕           ↕
        MARGIN
```

A useful debugging question is:

> "Do I need space inside this box or outside this box?"

Inside → `padding`

Outside → `margin`

```css
width: 300px;
width: 50%;
```

More units will be introduced as they become useful.

---

# 7. Height

`height` controls the height of an element.

```css
.card {
    height: 200px;
}
```

Example:

```css
height: 200px;
```

Width and height become particularly important when combined with padding, border, and `box-sizing`.

---

# 8. CSS Box Model Mental Model

When thinking about an element, think from the inside outward:

```text
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

Or:

```text
CONTENT
inside

PADDING
space inside

BORDER
visible boundary

MARGIN
space outside
```

---

# 9. Practical Debugging

When an element looks wrong, ask:

### Content touching the border?

Try:

```css
padding: 20px;
```

### Two elements are too close?

Try:

```css
margin: 20px;
```

### Need a visible boundary?

Try:

```css
border: 1px solid black;
```

### Need to control the element's dimensions?

Try:

```css
width: 300px;
height: 200px;
```

This problem → property approach is more useful than memorizing definitions.
