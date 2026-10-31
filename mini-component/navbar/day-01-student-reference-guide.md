# Day 01 — Build a Navigation Bar

## Mini-Component Series

**Project:** Code Impact Academy Navigation Bar  
**Files:** `index.html`, `style.css`, and `logo.png`  
**Technology:** HTML + CSS

---

## What will you build?

In this lesson, you will build a navigation bar for a programming academy.

Your finished navbar will contain:

- A logo and brand name
- Four navigation links
- One active link to show the current page
- A **Join Now** call-to-action link styled like a button
- Hover and keyboard-focus feedback
- A simple layout for smaller screens

You will build it step by step. **Do not paste the complete code at once.** Add one phase, save the files, refresh the browser, and observe what changed.

## Before you start

You should know the basics of HTML elements and attributes, CSS selectors and properties, and how to connect a CSS file to an HTML file.

## Project folder

Create a folder named `day-01-navigation-bar`:

```text
day-01-navigation-bar/
├── index.html
├── style.css
└── logo.png
```

Place your logo image in this folder. The image filename must match the filename used in your HTML.

---

# Phase 1 — Create the HTML structure

First, create the structure. Do not worry about the design yet.

Add this code to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academy Navigation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="navbar">
        <a class="brand" href="#">
            <img src="logo.png" alt="" width="36" height="36">
            <span>Code Impact</span>
        </a>

        <nav class="nav-links" aria-label="Main navigation">
            <a class="active" href="#" aria-current="page">Home</a>
            <a href="#">Courses</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>

        <a class="nav-cta" href="#">Join Now</a>
    </header>
</body>
</html>
```

### Understand the important HTML

| Element / Attribute | Purpose |
|---|---|
| `<header>` | Groups the introductory content of the page. Here, it contains the navbar. |
| `<nav>` | Identifies the main navigation links. |
| `<a>` | Creates a link that can take the visitor to another page or section. |
| `<img>` | Displays the logo image. |
| `src` | Tells the browser where the image file is located. |
| `class` | Gives an element a name that CSS can target. |
| `<span>` | Groups the brand text without creating a separate block by default. |
| `aria-current="page"` | Identifies the link for the page currently being viewed. |

The viewport meta tag helps the page use the device's actual screen width on mobile.

**Important:** `href="#"` is only a placeholder for this exercise. On a real website, replace it with a real page URL or section ID.

### Observe

Create an empty `style.css`, save both files, and open `index.html` in your browser. The page will look plain. That is expected.

**Remember:** HTML creates the structure. CSS controls its layout and appearance.

---

# Phase 2 — Arrange the main navbar items

### The problem

The brand, navigation links, and Join Now link should appear in one horizontal row.

Add this to `style.css`:

```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 28px;
}
```

### Understand the CSS

- `display: flex` places the direct children in a row by default.
- `align-items: center` aligns the children vertically in this row layout.
- `justify-content: space-between` distributes the available space between the children.
- `padding: 16px 28px` adds space inside the navbar: 16px vertically and 28px horizontally.

### Try it

Temporarily remove `justify-content: space-between`. Observe how the layout changes, then add it back.

---

# Phase 3 — Align the logo and brand name

### The problem

The logo and the brand name belong together. They should appear next to each other and align neatly.

Add:

```css
.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #263238;
    font-size: 22px;
    font-weight: bold;
}
```

- `display: flex` places the logo and text in a row.
- `align-items: center` aligns them vertically.
- `gap: 10px` creates space between the logo and the text.
- `font-size` controls the text size.
- `font-weight: bold` makes the text heavier.

If the logo does not appear, check that `logo.png` is in the correct folder and that its filename matches `src`.

---

# Phase 4 — Arrange and space the navigation links

### The problem

The navigation links should appear in a row with consistent spacing.

Add:

```css
.nav-links {
    display: flex;
    gap: 24px;
}
```

- `display: flex` places the links in a row.
- `gap: 24px` creates space between neighbouring links.

**Remember:** Put `gap` on the container whose children need spacing. This is usually simpler than adding margins to every link.

---

# Phase 5 — Style the links

Add:

```css
.navbar a {
    text-decoration: none;
    color: #263238;
    font-family: Arial, sans-serif;
}
```

- `.navbar a` selects links inside the navbar.
- `text-decoration: none` removes the default underline.
- `color` changes the text colour.
- `font-family` selects the typeface.

We are removing the default underline, so we will add other visual feedback for interaction in a later phase.

---

# Phase 6 — Highlight the active link

### The problem

A visitor should be able to identify which page they are currently viewing.

The Home link already has the class `active` in the HTML:

```html
<a class="active" href="#" aria-current="page">Home</a>
```

Add:

```css
.nav-links .active {
    color: #1769ff;
    font-weight: bold;
}
```

- `.nav-links .active` selects an element with the class `active` inside `.nav-links`.
- The blue colour and bold text distinguish the current page.
- `.active` is a class name that we assign in HTML. It is not a CSS pseudo-class.

**Try it:** Move the `active` class from Home to Courses. Refresh the browser and observe which link is highlighted.

---

# Phase 7 — Style Join Now as a button

### The problem

Join Now is a link, but we want it to look like the main action in the navbar.

Add:

```css
.navbar .nav-cta {
    background-color: #1769ff;
    color: white;
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.25s;
}
```

- `background-color` gives the link a coloured background.
- `color: white` makes the text readable against the blue background.
- `padding` adds space inside the link.
- `border-radius` rounds the corners.
- `transition` makes a change to the background colour happen smoothly.

**Link or button?** Use an `<a>` when the element takes the visitor to another page or section. Use a `<button>` for an action, such as submitting a form.

---

# Phase 8 — Add hover and keyboard-focus feedback

### The problem

Visitors should get feedback when they point to a link. People navigating with a keyboard should also be able to see which link is selected.

Add:

```css
.nav-links a {
    transition: color 0.2s;
}

.nav-links a:hover {
    color: #1769ff;
}

.navbar .nav-cta:hover {
    background-color: #0d4fc4;
}

.navbar a:focus-visible {
    outline: 2px solid #1769ff;
    outline-offset: 3px;
}
```

- `:hover` applies while the pointer is over an element.
- `transition` is placed in the normal rule so the change is smooth both when hovering over a link and when moving away.
- `:focus-visible` shows a focus indicator, especially for people using a keyboard.
- `outline` draws a visible line around the focused link.
- `outline-offset` adds space between the outline and the element.

**Try it:** Hover over the links, then press the **Tab** key to move through them. Notice the visible focus outline.

---

# Phase 9 — Make the navbar responsive

### The problem

On a narrow screen, the brand, four navigation links, and Join Now may not fit comfortably in one row. We will allow the navigation links to move to a second row.

Add this code at the **end** of `style.css`:

```css
@media (max-width: 700px) {
    .navbar {
        flex-wrap: wrap;
        gap: 12px;
        padding: 12px 16px;
    }

    .brand {
        margin-right: auto;
        font-size: 20px;
    }

    .nav-cta {
        margin-left: auto;
    }

    .nav-links {
        flex: 1 0 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px 20px;
    }
}
```

### Understand the CSS

- `@media (max-width: 700px)` applies these styles when the screen width is 700px or less.
- `flex-wrap: wrap` allows flex items to move onto another row when needed.
- `gap: 12px` adds space between the navbar's groups.
- `margin-right: auto` helps keep the brand on the left.
- `margin-left: auto` helps keep Join Now on the right.
- `flex: 1 0 100%` makes the navigation links take a full row.
- `justify-content: center` centres the links in that row.
- `gap: 10px 20px` sets the row gap first and the column gap second.

This is a simple responsive navbar. It does not include a hamburger menu.

### Test it

1. Open your page in the browser.
2. Make the browser window narrower than 700px.
3. Check that the links move to a second row.
4. Make the browser wider again.
5. Check that the desktop layout returns.

If the content overflows, inspect the width, gaps, and wrapping.

---

# Final CSS reference

After completing all phases, your `style.css` should look like this:

```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 28px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #263238;
    font-size: 22px;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 24px;
}

.navbar a {
    text-decoration: none;
    color: #263238;
    font-family: Arial, sans-serif;
}

.nav-links .active {
    color: #1769ff;
    font-weight: bold;
}

.navbar .nav-cta {
    background-color: #1769ff;
    color: white;
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.25s;
}

.nav-links a {
    transition: color 0.2s;
}

.nav-links a:hover {
    color: #1769ff;
}

.navbar .nav-cta:hover {
    background-color: #0d4fc4;
}

.navbar a:focus-visible {
    outline: 2px solid #1769ff;
    outline-offset: 3px;
}

@media (max-width: 700px) {
    .navbar {
        flex-wrap: wrap;
        gap: 12px;
        padding: 12px 16px;
    }

    .brand {
        margin-right: auto;
        font-size: 20px;
    }

    .nav-cta {
        margin-left: auto;
    }

    .nav-links {
        flex: 1 0 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px 20px;
    }
}
```

---

# Final checklist

Before you finish, make sure you can check each item:

- [ ] Logo and brand name appear together.
- [ ] Navigation links appear in a row on desktop.
- [ ] Links have consistent spacing.
- [ ] The active link looks different.
- [ ] Join Now looks like a button.
- [ ] Hover effects work.
- [ ] Keyboard focus is visible when using Tab.
- [ ] The navbar adjusts on a narrow screen.
- [ ] There is no horizontal overflow on mobile.

# Practice task — Build your own navbar

Create a navbar for a theme of your choice:

- Restaurant
- Gym
- Personal portfolio
- Shopping website
- Another academy

Your navbar must include:

1. A logo and brand name.
2. At least four navigation links.
3. One active link.
4. One CTA styled like a button.
5. Consistent alignment and spacing.
6. Hover feedback and a smooth transition.
7. A responsive layout.

Submit `index.html`, `style.css`, your logo image, one desktop screenshot, and one narrow-screen screenshot.

## Before moving to Day 02

You should be able to explain these concepts in your own words:

| Concept | Remember |
|---|---|
| `display: flex` | Arranges items in a flexible layout. |
| `align-items` | Aligns items along the cross axis. |
| `justify-content` | Controls distribution along the main axis. |
| `gap` | Adds space between items. |
| `padding` | Adds space inside an element's edge. |
| `.active` | A class used here to identify the current page link. |
| `:hover` | Applies styles while the pointer is over an element. |
| `transition` | Makes property changes happen smoothly. |
| `:focus-visible` | Shows which element has keyboard focus. |
| `@media` | Applies CSS rules at a chosen screen size. |
| `flex-wrap` | Allows flex items to move onto another row. |

**Learning rule:** Don't just copy the CSS. For every property, understand what problem it solves. Change its value, refresh the browser, and observe the result.
