
# Day 9 — CSS Flexbox

## 1. What is Flexbox?

Flexbox is a CSS layout system used to arrange and align elements inside a container.

The parent becomes a **flex container** and its direct children become **flex items**.

```css
.container {
    display: flex;
}
```

By default, flex items are arranged in a row.

```text
[Box 1] [Box 2] [Box 3]
```

---

## 2. display: flex

Creates a flex container and enables Flexbox layout for its direct children.

```css
.container {
    display: flex;
}
```

---

## 3. flex-direction

Controls the direction of the main axis.

### Row

```css
.container {
    flex-direction: row;
}
```

Default value.

```text
[1] [2] [3]
```

### Column

```css
.container {
    flex-direction: column;
}
```

```text
[1]
[2]
[3]
```

---

## 4. Main Axis and Cross Axis

The `flex-direction` determines the main axis.

### Row

```text
Main Axis
←────────────→

Cross Axis
     ↕
```

```text
justify-content → Main Axis → left / right
align-items     → Cross Axis → up / down
```

### Column

```text
Cross Axis
←────────────→

Main Axis
     ↕
```

```text
justify-content → Main Axis → up / down
align-items     → Cross Axis → left / right
```

### Important Rule

```text
justify-content → Main Axis
align-items     → Cross Axis
```

---

## 5. justify-content

Controls the alignment of flex items along the **main axis**.

```css
.container {
    justify-content: center;
}
```

Common values:

```css
justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

### Common Values

#### flex-start

Items are placed at the start.

```text
[1] [2] [3]----------------
```

#### center

Items are centered.

```text
------[1] [2] [3]------
```

#### flex-end

Items are placed at the end.

```text
----------------[1] [2] [3]
```

#### space-between

Space is distributed between the items.

```text
[1]--------[2]--------[3]
```

The first item is at the start and the last item is at the end.

#### space-around

Space is placed around each item.

#### space-evenly

Equal space is placed between the items and the edges.

---

## 6. align-items

Controls the alignment of flex items along the **cross axis**.

```css
.container {
    align-items: center;
}
```

Common values:

```css
align-items: flex-start;
align-items: center;
align-items: flex-end;
```

For a row layout:

```text
justify-content → left / right
align-items     → up / down
```

For a column layout:

```text
justify-content → up / down
align-items     → left / right
```

---

## 7. gap

Creates space between flex items.

```css
.container {
    display: flex;
    gap: 20px;
}
```

Result:

```text
[Box 1]  [Box 2]  [Box 3]
```

`gap` is useful when we want consistent spacing between flex items.

### Example

```css
.container {
    display: flex;
    gap: 10px;
}
```

---

## 8. flex-wrap

Controls whether flex items can move onto multiple lines.

### Default

```css
flex-wrap: nowrap;
```

Items try to remain on one line.

### Wrap

```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

Items can move to the next line when there is not enough space.

```text
[1] [2] [3]
[4] [5] [6]
```

Useful for:

- Cards
- Products
- Image galleries
- Buttons
- Tags

---

## 9. Common Flexbox Example

### HTML

```html
<div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
</div>
```

### CSS

```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.box {
    width: 100px;
    height: 100px;
}
```

---

## 10. Flexbox Mental Model

```text
display: flex
      ↓
Create flex container
      ↓
flex-direction
      ↓
Choose main axis
      ↓
justify-content
      ↓
Control main axis
      ↓
align-items
      ↓
Control cross axis
      ↓
gap
      ↓
Space between items
      ↓
flex-wrap
      ↓
Allow multiple lines
```

---

## 11. What We Need to Remember

### `display: flex`

Creates a flex container.

### `flex-direction`

Controls the direction of the main axis.

```css
flex-direction: row;
flex-direction: column;
```

### `justify-content`

Controls alignment along the **main axis**.

### `align-items`

Controls alignment along the **cross axis**.

### `gap`

Creates space between flex items.

### `flex-wrap`

Allows flex items to move onto multiple lines.

### Most Important Rule

```text
flex-direction
      ↓
determines the axes

justify-content → Main Axis
align-items     → Cross Axis
```

---

## 12. Real-World Uses

Flexbox is commonly used for:

- Navigation bars
- Cards
- Buttons
- Product layouts
- Menus
- Small groups of UI elements

The main idea:

> Use Flexbox when a parent needs to control the arrangement and alignment of its direct children.

---

## Day 9 Summary

Flexbox provides an easy way to arrange and align groups of elements.

The main properties covered today are:

```text
display: flex
flex-direction
justify-content
align-items
gap
flex-wrap
```

Remember:

```text
justify-content → Main Axis
align-items     → Cross Axis
```

The direction of the axes depends on `flex-direction`.
