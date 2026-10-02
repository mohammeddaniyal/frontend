# Day 6 — CSS `border-radius`

`border-radius` controls the roundness of an element's corners.

It is commonly used for:

* Rounded cards
* Buttons
* Input fields
* Images
* Profile pictures
* Circular UI elements

---

# 1. Basic Syntax

```css
border-radius: value;
```

Example:

```css
.card {
    border-radius: 10px;
}
```

A larger value generally creates more rounded corners.

Try experimenting with:

```css
border-radius: 5px;
border-radius: 10px;
border-radius: 20px;
border-radius: 30px;
```

---

# 2. Common Values

There is no single fixed set of values for `border-radius`.

You can use CSS length values such as:

```css
border-radius: 5px;
border-radius: 10px;
border-radius: 20px;
```

You can also use percentages:

```css
border-radius: 50%;
```

When using percentages, the result is calculated relative to the element's dimensions.

---

# 3. Creating a Circle

A common application is creating a circular profile image.

For example:

```css
.profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
```

When the width and height are equal, `border-radius: 50%` can create a circle.

This is commonly used for:

```text
Profile pictures
Avatars
Circular icons
```

---

# 4. Individual Corners

The corners can also be controlled individually.

```css
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
```

For example:

```css
.card {
    border-top-left-radius: 20px;
}
```

Only the top-left corner is rounded.

---

# 5. Multiple Corner Values

`border-radius` also supports shorthand values.

### One value

```css
border-radius: 10px;
```

All four corners:

```text
top-left      → 10px
top-right     → 10px
bottom-right  → 10px
bottom-left   → 10px
```

### Two values

```css
border-radius: 10px 20px;
```

The values are applied to opposite corners:

```text
top-left / bottom-right → 10px
top-right / bottom-left → 20px
```

### Three values

```css
border-radius: 10px 20px 30px;
```

The values follow the corner order:

```text
top-left      → 10px
top-right     → 20px
bottom-right  → 30px
bottom-left   → 20px
```

### Four values

```css
border-radius: 10px 20px 30px 40px;
```

Order:

```text
top-left
top-right
bottom-right
bottom-left
```

---

# 6. `border-radius` With Borders

`border-radius` can be used with or without a visible border.

Example:

```css
.card {
    border: 1px solid black;
    border-radius: 12px;
}
```

The border follows the rounded shape.

---

# 7. Useful Search Keywords

You do not need to memorize every possible value or syntax.

When you need to explore more possibilities, use keywords such as:

```text
CSS border-radius
CSS border-radius values
CSS border-radius examples
CSS rounded corners
CSS circular image
CSS individual border radius
CSS border-radius shorthand
```

The goal is to understand the property and know how to discover additional possibilities when needed.

---

# Mental Model

Think:

```text
border-radius
      ↓
controls corner roundness
      ↓
small value → slightly rounded
larger value → more rounded
50% + equal dimensions → circle
```

The important skill is not memorizing every value.

It is recognizing:

> "I want rounded corners or a circular shape → `border-radius`."
