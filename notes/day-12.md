# Day 12 — Introduction to CSS Grid

## Why Do We Need Grid?
Imagine a course section with six cards arranged in three columns and two rows. Flexbox can create this layout with wrapping and suitable widths, but **CSS Grid gives us a direct way to define rows and columns together**.

## Basic HTML

```html
<div class="courses">
    <div>C Programming</div>
    <div>C++ Programming</div>
    <div>Java</div>
    <div>HTML & CSS</div>
    <div>JavaScript</div>
    <div>Python</div>
</div>
```

The outer `div` is the parent container. The inner `div` elements are its children.

## Create Three Equal Columns

```css
.courses {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
}

.courses div {
    padding: 20px 0;
    background-color: lightblue;
    text-align: center;
}
```

- `display: grid` enables Grid layout.
- `grid-template-columns` defines the column structure and sizes.
- `1fr 1fr 1fr` creates three equal-width columns.
- `gap: 12px` adds space between grid items horizontally and vertically.

## What Does `fr` Mean?
`fr` means a **fractional share of the available space**. It is not a pixel measurement.

```css
grid-template-columns: 1fr 1fr;       /* Two equal columns */
grid-template-columns: 1fr 1fr 1fr;   /* Three equal columns */
grid-template-columns: 2fr 1fr;       /* First gets twice the share */
grid-template-columns: 1fr 2fr;       /* Second gets twice the share */
```

Space is divided according to the ratio after accounting for gaps and other sizing constraints.

## Main Content and Sidebar

```html
<div class="layout">
    <div class="main">Main Content</div>
    <div class="sidebar">Sidebar</div>
</div>
```

```css
.layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 12px;
}

.main { background-color: lightblue; padding: 30px; }
.sidebar { background-color: lightgreen; padding: 30px; }
```

The main content gets two fractional shares while the sidebar gets one.

## Flexbox vs Grid

| Flexbox | CSS Grid |
|---|---|
| Primarily arranges items along one direction | Controls rows and columns together |
| Useful for navigation bars and aligning items | Useful for card grids, galleries, and page layouts |
| Can wrap items onto multiple lines | Can define an explicit grid structure |

Both are useful; Grid does not replace Flexbox.

## Quick Revision

| Property/value | Purpose |
|---|---|
| `display: grid` | Enables Grid layout |
| `grid-template-columns` | Defines column sizes and structure |
| `fr` | Divides available space into fractional shares |
| `gap` | Controls spacing between grid items |

## Practice Exercises
1. Create six course cards in three equal-width columns.
2. Set the gap to `15px`.
3. Change the grid to two columns, then back to three.
4. Create a layout where the sidebar is twice as wide as the main content:

```css
.layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 15px;
}
```

## Completion Checklist
- [ ] Explain why Grid is useful.
- [ ] Use `display: grid`.
- [ ] Define columns with `grid-template-columns`.
- [ ] Understand `fr` and `gap`.
- [ ] Create equal and unequal column layouts.
