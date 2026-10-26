# Day 13 — Responsive Design and Media Queries

## What Is Responsive Design?
**Responsive design** means creating websites that adapt to different screen sizes so the content remains readable and usable.

- A laptop may display two columns side by side.
- A mobile phone may display those columns vertically.
- Text, images, and spacing may also need adjustments on smaller screens.

## What Is a Media Query?
A **media query** lets us apply CSS rules only when a specified condition is met.

```css
@media (max-width: 600px) {
    /* CSS rules go here */
}
```

- `@media` starts the media query.
- `max-width: 600px` means the viewport is **600 pixels wide or narrower**.
- The rules inside apply when the condition is true.

A media query changes the styling, not the HTML.

## HTML Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Layout</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="main">
            <h2>Main Content</h2>
            <p>Welcome to Code Impact Academy.</p>
        </div>
        <div class="sidebar">
            <h2>Sidebar</h2>
            <p>Explore our courses.</p>
        </div>
    </div>
</body>
</html>
```

The viewport meta tag helps mobile browsers use the device's actual viewport width.

## Initial CSS: Two Columns

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.main { background-color: lightblue; padding: 30px; }
.sidebar { background-color: lightgreen; padding: 30px; }
```

This creates two equal-width columns. On narrow screens, the columns may become too cramped.

## Make the Layout Responsive
Add this at the end of `style.css`:

```css
@media (max-width: 600px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```

- **Wider than 600px:** the layout has two columns.
- **600px or narrower:** the layout has one column, so the sections appear vertically.

The same HTML works on both screen sizes.

## Understand `max-width`

| Viewport width | Does the query apply? |
|---|---|
| `1200px` | No |
| `800px` | No |
| `601px` | No |
| `600px` | Yes |
| `400px` | Yes |
| `320px` | Yes |

The condition refers to the viewport width, not an individual grid item's width.

## Common Mistake
Incorrect:

```css
(max-width: 600px) {
    /* CSS */
}
```

Correct:

```css
@media (max-width: 600px) {
    .container { grid-template-columns: 1fr; }
}
```

Remember to include the viewport meta tag in the HTML `<head>`.

## Quick Revision

| Concept | Meaning |
|---|---|
| Responsive design | Adapting a website to different screen sizes |
| Media query | Applying CSS when a condition is met |
| `@media` | Starts a media query |
| `max-width` | Matches at or below a specified viewport width |
| `grid-template-columns: 1fr` | Creates one column |

## Practice Exercise
1. Create a two-column Grid layout.
2. Change it to one column when the viewport is `600px` or narrower.
3. Change the breakpoint to `400px`.
4. Resize the browser and explain when the layout changes.

## Completion Checklist
- [ ] Explain responsive design.
- [ ] Understand `@media` and `max-width`.
- [ ] Change a two-column layout to one column.
- [ ] Test the layout at different viewport widths.

*Further topics such as mobile-first design, multiple breakpoints, and responsive images can be explored later.*
