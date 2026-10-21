# Day 10 — CSS Positioning

## What you'll learn

In this lesson, we'll learn how CSS positioning helps control where elements appear on a webpage.

## 1. `static` and `relative`

### `position: static`

`static` is the default positioning of HTML elements. The browser places the element according to the normal page layout. With `static`, `top`, `right`, `bottom`, and `left` do not move the element.

### `position: relative`

`relative` lets us move an element visually from its normal position. The browser still accounts for its original space in the layout.

```css
.box {
    position: relative;
    top: 30px;
    left: 20px;
}
```

- `top: 30px` moves the element down by 30 pixels.
- `left: 20px` moves it right by 20 pixels.

**Example:** [Problem 1 — Relative positioning](../topics/day-10/problem-1-relative.html)

## 2. Fixed positioning

`position: fixed` places an element relative to the browser viewport in this example. It stays in the same screen position when the page scrolls.

```css
.help-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
```

- `bottom: 20px` keeps the button 20 pixels from the bottom edge.
- `right: 20px` keeps it 20 pixels from the right edge.

**Example:** [Problem 2 — Fixed positioning](../topics/day-10/problem-2-fixed.html)

## 3. Sticky positioning

`position: sticky` lets an element scroll normally until it reaches a specified boundary. It then sticks at that boundary while scrolling within its containing area.

```css
.course-heading {
    position: sticky;
    top: 0;
}
```

Here, `top: 0` makes the heading stick to the top edge when it reaches it.

**Example:** [Problem 3 — Sticky positioning](../topics/day-10/problem-3-sticky.html)

## 4. Absolute positioning

`position: absolute` positions an element using offset properties such as `top`, `right`, `bottom`, and `left`. In our example, it is positioned relative to its nearest positioned ancestor.

A common pattern is to give the parent `position: relative` and the child `position: absolute`.

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

In this example, the child is placed 10 pixels from the parent's top and right edges.

**Example:** [Problem 4 — Absolute positioning](../topics/day-10/problem-4-absolute.html)

## 5. `z-index`

When elements overlap, `z-index` helps control which one appears in front of another. In this lesson's example, the overlapping boxes are positioned elements.

```css
.box-1 {
    position: absolute;
    z-index: 2;
}

.box-2 {
    position: absolute;
    z-index: 1;
}
```

Here, Box 1 appears in front of Box 2. `z-index` controls stacking order; it does not move an element around the page.

**Example:** [Problem 5 — z-index](../topics/day-10/problem-5-z-index.html)

## Extra example — Relative vs. absolute

Both `relative` and `absolute` can use offset properties, but they behave differently:

- **Relative:** the element moves visually from its normal position, and its original layout space is still accounted for.
- **Absolute:** the element is removed from normal document flow and positioned relative to its nearest positioned ancestor (or another applicable containing block).

**Example:** [Extra problem — Relative vs. absolute](../topics/day-10/problem-extra-relative-vs-absolute.html)

## Quick revision

| Property | Basic behavior |
|---|---|
| `static` | Default positioning; offset properties do not move the element. |
| `relative` | Moves visually from the normal position while its original layout space remains accounted for. |
| `fixed` | Stays at a set viewport position while scrolling in the usual case. |
| `sticky` | Scrolls normally, then sticks at a specified boundary. |
| `absolute` | Removed from normal flow and positioned relative to its containing block. |
| `z-index` | Controls which overlapping element appears in front, subject to stacking rules. |

## Practice

1. In Problem 1, change the `top` and `left` values and observe the result.
2. In Problem 2, change `bottom` and `right` to reposition the Help button.
3. In Problem 3, try changing `top: 0` to `top: 20px`.
4. In Problem 4, change the child's `top` and `right` values.
5. In Problem 5, change the boxes' `z-index` values.
6. Open the extra example and compare how `relative` and `absolute` affect the layout.
