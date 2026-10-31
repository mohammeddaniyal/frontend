# Day 03 — Static Course Details Component
## Student Reference Guide

**Track:** Mini-Component Series  
**Focus:** HTML + CSS  
**Project:** C Programming Course Details  
**Today's main CSS topic:** Flexbox

---

## 1. What are we building?

Today, you'll create a static course details page for a C Programming course.

It will contain three sections:

1. **Course introduction** — course name, level, duration, description, image and an Enroll Now link.
2. **What You'll Learn** — a list of skills students will learn.
3. **Course Curriculum** — modules and their topics.

We are not building a navbar, footer or JavaScript functionality today. We'll connect this component with the other parts of the website later.

## 2. What you'll learn

By the end of this project, you should be able to:

- Structure a page using semantic HTML.
- Place text and an image side by side using Flexbox.
- Create lists and separate content sections.
- Understand the main axis and cross axis.
- Use `justify-content`, `align-items`, `gap` and `flex-direction`.
- Make the layout responsive for smaller screens.

## 3. Set up your project

Create this folder structure:

```text
day-03-course-details/
├── index.html
├── style.css
└── images/
    └── c-programming.jpg
```

Add a suitable C Programming image inside the `images` folder. Make sure the filename and extension match the path you use in your HTML.

---

# Part 1 — Build the HTML

## 4. Create the basic HTML page

Start with this structure in `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C Programming Course | Code Impact</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="course-details">
        <!-- Course introduction will go here -->

        <!-- What you'll learn will go here -->

        <!-- Course curriculum will go here -->
    </main>

</body>
</html>
```

### Understand the important tags

| Tag / attribute | Purpose |
|---|---|
| `<main>` | Contains the main content of the page. |
| `<section>` | Groups related content into a section. |
| `<h1>` | Main heading of this page. |
| `<h2>` | Heading for a major section. |
| `<h3>` | Heading for a smaller subsection, such as a curriculum module. |
| `<ul>` | Creates an unordered (bulleted) list. |
| `<li>` | Represents one item in a list. |
| `alt` | Provides a text alternative for an image. |

## 5. Add the course introduction

Inside `<main>`, add this section:

```html
<section class="course-intro">
    <div class="course-info">
        <span class="course-meta">Beginner · 30 Days</span>

        <h1>C Programming</h1>

        <p>
            Learn the fundamentals of programming with C.
            Build a strong foundation in logic, problem-solving,
            variables, conditions, loops, arrays, and functions.
        </p>

        <a href="#enrollment" class="course-btn">Enroll Now</a>
    </div>

    <div class="course-image">
        <img src="images/c-programming.jpg" alt="C programming course">
    </div>
</section>
```

### What is happening here?

- `.course-intro` is the main section containing the introduction.
- `.course-info` contains the course text and link.
- `.course-image` contains the course image.
- The two `<div>` elements are direct children of `.course-intro`. We'll use their parent to arrange them with Flexbox.
- The `href="#enrollment"` is a placeholder link. It will only work when an element with `id="enrollment"` exists on the page. Replace it with a real destination when one is available.

**Try it:** Save the file and open it in your browser. Before writing CSS, notice that the text and image appear one below the other.

## 6. Add the learning outcomes

Below the course introduction, add:

```html
<section class="learning-section">
    <h2>What You'll Learn</h2>

    <ul class="learning-list">
        <li>Understand programming fundamentals</li>
        <li>Work with variables and data types</li>
        <li>Use conditions and loops</li>
        <li>Understand arrays and strings</li>
        <li>Write and use functions</li>
        <li>Develop problem-solving skills</li>
    </ul>
</section>
```

We use a list because each learning outcome is a separate item. `<ul>` creates the list, and each `<li>` creates one list item.

## 7. Add the course curriculum

Below the learning section, add:

```html
<section class="curriculum-section">
    <h2>Course Curriculum</h2>

    <div class="curriculum-list">
        <div class="curriculum-item">
            <h3>Module 1: Programming Basics</h3>
            <p>Introduction to programming, algorithms, and flowcharts.</p>
        </div>

        <div class="curriculum-item">
            <h3>Module 2: C Fundamentals</h3>
            <p>Structure of a C program, variables, data types, and operators.</p>
        </div>

        <div class="curriculum-item">
            <h3>Module 3: Control Statements</h3>
            <p>Conditions, decision-making, and loops.</p>
        </div>

        <div class="curriculum-item">
            <h3>Module 4: Arrays and Strings</h3>
            <p>Working with collections of values and character strings.</p>
        </div>

        <div class="curriculum-item">
            <h3>Module 5: Functions</h3>
            <p>Function declaration, definition, calls, and parameters.</p>
        </div>
    </div>
</section>
```

Each module is a separate content block. The `<h3>` element gives the module its heading, and the paragraph describes its topics.

---

# Part 2 — Style the page with CSS

## 8. Start with basic page styling

Open `style.css` and add:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #263238;
    background-color: #f5f8ff;
    line-height: 1.6;
}

.course-details {
    width: 90%;
    max-width: 1100px;
    margin: 40px auto;
}
```

### Understand these properties

| Property | Why we use it |
|---|---|
| `margin: 0` | Removes default outer spacing. |
| `padding: 0` | Removes default inner spacing. |
| `box-sizing: border-box` | Includes padding and border in an element's declared size. |
| `font-family` | Sets the text font. |
| `color` | Sets the text color. |
| `background-color` | Sets the background color. |
| `line-height` | Controls the vertical spacing between lines of text. |
| `width: 90%` | Allows the container to use most of the available width while leaving side space. |
| `max-width: 1100px` | Stops the content from becoming too wide on large screens. |
| `margin: 40px auto` | Adds top/bottom space and centers the container horizontally. |

## 9. Arrange the introduction with Flexbox

### First understand the problem

The course text and image are currently stacked vertically. On a desktop screen, we want them side by side.

We can use **Flexbox** to arrange elements inside a parent container.

Add this CSS:

```css
.course-intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    background-color: #ffffff;
    padding: 40px;
    border-radius: 16px;
    margin-bottom: 30px;
}

.course-info {
    flex: 1;
}

.course-image {
    flex: 1;
}

.course-image img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 12px;
}
```

### Flexbox: parent and children

In our HTML:

```html
<section class="course-intro">
    <div class="course-info">...</div>
    <div class="course-image">...</div>
</section>
```

- `.course-intro` is the **flex container** (parent).
- `.course-info` and `.course-image` are its **flex items** (direct children).
- `display: flex` is applied to the parent, not to each child.

### Understand the main Flexbox properties

| Property | What it does |
|---|---|
| `display: flex` | Makes the element a flex container and arranges its direct children using Flexbox. |
| `flex-direction: row` | Places items in a row. This is the default direction. |
| `flex-direction: column` | Places items in a column. |
| `justify-content` | Aligns or distributes items along the main axis. |
| `align-items` | Aligns items along the cross axis. |
| `gap` | Adds space between flex items. |
| `flex: 1` | Allows a flex item to grow and share available space. |

### Main axis and cross axis

The axes depend on `flex-direction`.

| `flex-direction` | Main axis | Cross axis |
|---|---|---|
| `row` | Horizontal | Vertical |
| `column` | Vertical | Horizontal |

**Important:** `justify-content` does not always mean horizontal alignment, and `align-items` does not always mean vertical alignment. They follow the main and cross axes.

### Understand the image properties

- `width: 100%` makes the image fill the width of its container.
- `height: 280px` gives the image a fixed display height.
- `object-fit: cover` fills the image box while keeping its proportions. Some parts of the image may be cropped.
- `border-radius` rounds the image corners.

**Try it:** Change `align-items: center` to `align-items: flex-start`, then `align-items: flex-end`. Observe how the children move across the cross axis.

## 10. Style the title, paragraph and link

Add:

```css
.course-meta {
    display: inline-block;
    color: #1769ff;
    font-weight: bold;
    margin-bottom: 12px;
}

.course-info h1 {
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 16px;
}

.course-info p {
    margin-bottom: 24px;
}

.course-btn {
    display: inline-block;
    background-color: #1769ff;
    color: #ffffff;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.course-btn:hover {
    background-color: #0d4fc4;
}
```

### A few important points

- `font-size` controls text size.
- `font-weight: bold` makes text bold.
- `display: inline-block` lets the link accept padding and dimensions while remaining inline with surrounding content.
- `text-decoration: none` removes the default underline.
- `:hover` applies styles while the pointer is over the link.
- `transition` makes the background-color change gradual.

Remember: this is still an HTML link (`<a>`). CSS only changes how it looks.

## 11. Style the learning and curriculum sections

Both sections need a similar white background, padding and rounded corners. We can style both selectors together:

```css
.learning-section,
.curriculum-section {
    background-color: #ffffff;
    padding: 32px;
    border-radius: 16px;
    margin-bottom: 30px;
}

.learning-section h2,
.curriculum-section h2 {
    font-size: 26px;
    margin-bottom: 20px;
}

.learning-list {
    padding-left: 22px;
}

.learning-list li {
    margin-bottom: 10px;
}
```

The comma lets one CSS rule target multiple selectors.

Now style the curriculum modules:

```css
.curriculum-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.curriculum-item {
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 20px;
    background-color: #ffffff;
}

.curriculum-item h3 {
    font-size: 18px;
    margin-bottom: 6px;
}

.curriculum-item p {
    color: #52616b;
}
```

Here, `flex-direction: column` stacks the curriculum items vertically. `gap: 16px` creates space between them.

Flexbox is useful here for the spacing, but it is not mandatory for every vertical list. Normal block layout with margins could also work.

## 12. Make the page responsive

On a narrow screen, keeping the text and image side by side can make both too small. We want them stacked vertically on smaller screens.

Add this media query at the end of `style.css`:

```css
@media (max-width: 700px) {
    .course-details {
        margin-top: 20px;
    }

    .course-intro {
        flex-direction: column;
        align-items: stretch;
        padding: 24px;
        gap: 24px;
    }

    .course-info h1 {
        font-size: 28px;
    }

    .course-image img {
        height: 220px;
    }

    .learning-section,
    .curriculum-section {
        padding: 24px;
    }
}
```

### What is a media query?

A media query lets us apply CSS only when a condition is true.

In this example:

```css
@media (max-width: 700px) {
    /* CSS for screens 700px wide or smaller */
}
```

At 700px or less:

- The introduction changes from a row to a column.
- The text appears above the image.
- The heading becomes smaller.
- The image height is reduced.
- Section padding is reduced.

The HTML stays the same. Only the CSS layout changes.

---

# Part 3 — Complete code reference

## 13. Complete HTML

Your final `index.html` should look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C Programming Course | Code Impact</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="course-details">

        <section class="course-intro">
            <div class="course-info">
                <span class="course-meta">Beginner · 30 Days</span>
                <h1>C Programming</h1>

                <p>
                    Learn the fundamentals of programming with C.
                    Build a strong foundation in logic, problem-solving,
                    variables, conditions, loops, arrays, and functions.
                </p>

                <a href="#enrollment" class="course-btn">Enroll Now</a>
            </div>

            <div class="course-image">
                <img src="images/c-programming.jpg" alt="C programming course">
            </div>
        </section>

        <section class="learning-section">
            <h2>What You'll Learn</h2>

            <ul class="learning-list">
                <li>Understand programming fundamentals</li>
                <li>Work with variables and data types</li>
                <li>Use conditions and loops</li>
                <li>Understand arrays and strings</li>
                <li>Write and use functions</li>
                <li>Develop problem-solving skills</li>
            </ul>
        </section>

        <section class="curriculum-section">
            <h2>Course Curriculum</h2>

            <div class="curriculum-list">
                <div class="curriculum-item">
                    <h3>Module 1: Programming Basics</h3>
                    <p>Introduction to programming, algorithms, and flowcharts.</p>
                </div>

                <div class="curriculum-item">
                    <h3>Module 2: C Fundamentals</h3>
                    <p>Structure of a C program, variables, data types, and operators.</p>
                </div>

                <div class="curriculum-item">
                    <h3>Module 3: Control Statements</h3>
                    <p>Conditions, decision-making, and loops.</p>
                </div>

                <div class="curriculum-item">
                    <h3>Module 4: Arrays and Strings</h3>
                    <p>Working with collections of values and character strings.</p>
                </div>

                <div class="curriculum-item">
                    <h3>Module 5: Functions</h3>
                    <p>Function declaration, definition, calls, and parameters.</p>
                </div>
            </div>
        </section>

    </main>

</body>
</html>
```

## 14. Complete CSS

Your final `style.css` should look like this:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #263238;
    background-color: #f5f8ff;
    line-height: 1.6;
}

.course-details {
    width: 90%;
    max-width: 1100px;
    margin: 40px auto;
}

/* Course introduction */
.course-intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 16px;
    margin-bottom: 30px;
}

.course-info {
    flex: 1;
}

.course-meta {
    display: inline-block;
    color: #1769ff;
    font-weight: bold;
    margin-bottom: 12px;
}

.course-info h1 {
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 16px;
}

.course-info p {
    margin-bottom: 24px;
}

.course-btn {
    display: inline-block;
    background-color: #1769ff;
    color: #ffffff;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.course-btn:hover {
    background-color: #0d4fc4;
}

/* Course image */
.course-image {
    flex: 1;
}

.course-image img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 12px;
}

/* Shared section styling */
.learning-section,
.curriculum-section {
    background-color: #ffffff;
    padding: 32px;
    border-radius: 16px;
    margin-bottom: 30px;
}

.learning-section h2,
.curriculum-section h2 {
    font-size: 26px;
    margin-bottom: 20px;
}

/* Learning outcomes */
.learning-list {
    padding-left: 22px;
}

.learning-list li {
    margin-bottom: 10px;
}

/* Curriculum */
.curriculum-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.curriculum-item {
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 20px;
    background-color: #ffffff;
}

.curriculum-item h3 {
    font-size: 18px;
    margin-bottom: 6px;
}

.curriculum-item p {
    color: #52616b;
}

/* Responsive layout */
@media (max-width: 700px) {
    .course-details {
        margin-top: 20px;
    }

    .course-intro {
        flex-direction: column;
        align-items: stretch;
        padding: 24px;
        gap: 24px;
    }

    .course-info h1 {
        font-size: 28px;
    }

    .course-image img {
        height: 220px;
    }

    .learning-section,
    .curriculum-section {
        padding: 24px;
    }
}
```

---

# Part 4 — Practice and revision

## 15. Try these changes yourself

- [ ] Change the course title to Java Programming.
- [ ] Change the course level and duration.
- [ ] Replace the image with a relevant course image.
- [ ] Add two more learning outcomes.
- [ ] Add one more curriculum module.
- [ ] Change `flex-direction: row` to `column` and observe the result.
- [ ] Try `justify-content: center`, `space-between` and `flex-start`.
- [ ] Try `align-items: flex-start`, `center` and `flex-end`.
- [ ] Test the page at desktop and mobile widths.

## 16. Homework

Build a static details page for **Python Programming**.

Your page must include:

- A course introduction with title, level, duration, description, image and CTA.
- At least five learning outcomes.
- At least four curriculum modules.
- A desktop Flexbox layout.
- A responsive mobile layout.
- The same color palette used in Days 01 and 02.

Write your own HTML and CSS. Don't just copy the C Programming page and change the text.

## 17. Questions to check your understanding

1. What is the purpose of the `<main>` tag?
2. Why do we use `<section>`?
3. What is the difference between `<h1>`, `<h2>` and `<h3>`?
4. Why did we use a list for learning outcomes?
5. Which element is the flex container in our introduction?
6. Which elements become its flex items?
7. What is the main axis?
8. What is the cross axis?
9. Does `justify-content` always work horizontally?
10. What changes when we use `flex-direction: column`?
11. Why do we need a media query?
12. What does `object-fit: cover` do?
13. What is the difference between margin and padding?

## 18. Remember these key ideas

- **HTML** gives the page its structure and meaning.
- **CSS** controls how that structure looks and is arranged.
- **Flexbox** is useful for arranging items along one direction.
- **CSS Grid**, which you used on Day 02, is often useful for two-dimensional row-and-column layouts. These are common use cases, not strict rules.
- Flexbox is applied to a parent; its direct children become flex items.
- The main and cross axes depend on `flex-direction`.
- A media query lets the same HTML adapt to different screen sizes.
- This page is static: its course content is written directly in HTML. We are not using JavaScript or `<template>` in this lesson.

---

**Day 03 goal:** Build and understand one static course details component. Later, the Day 01 navbar can be placed above it, and Day 02 course cards can link to individual course detail pages.
