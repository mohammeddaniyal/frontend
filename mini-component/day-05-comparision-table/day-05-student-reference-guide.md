# Day 05 — Course Comparison Table
## Student Reference Guide

**Track:** Mini-Component Series  
**Project:** Code Impact Academy Course Comparison  
**Technology:** HTML5 + CSS3  
**Today's main topics:** HTML tables, `colspan`, `rowspan` and responsive table scrolling

---

## 1. What are we building?

Today, you'll build a course comparison table for Code Impact Academy.

The table compares three programming courses:

- C Programming
- C++ Programming
- Java Programming

We'll compare their level, duration, projects, core topics, practical training and certificate.

**Important:** HTML tables are meant for displaying related information in rows and columns. Do not use tables to build the general layout of a website. For page layouts, use CSS Flexbox or Grid.

## 2. What you'll learn

By the end of this project, you should be able to:

- Create rows and cells using HTML table elements.
- Understand the difference between `<th>` and `<td>`.
- Organize a table using `<thead>`, `<tbody>` and `<tfoot>`.
- Add a table title using `<caption>`.
- Merge cells using `colspan` and `rowspan`.
- Style borders, spacing, backgrounds and text alignment.
- Use `:nth-child()` and `:hover`.
- Make a wide table usable on small screens.

## 3. Set up your project

Create this folder structure:

```text
day-05-course-comparison/
├── index.html
└── style.css
```

---

# Part 1 — Understand and build the HTML table

## 4. Understand the data first

Before writing HTML, look at the information we want to compare:

| Feature | C Programming | C++ Programming | Java Programming |
|---|---|---|---|
| Level | Beginner | Intermediate | Beginner |
| Duration | 30 Days | 45 Days | 60 Days |
| Projects | 2 Projects | 3 Projects | 4 Projects |
| Core Topics | Variables, Loops, Arrays, Functions | OOP, STL, Pointers, DSA | OOP, Collections, JDBC, Java 8 |
| Practical Training | Included | Included | Included |
| Certificate | Yes | Yes | Yes |

Notice the pattern: each row describes one feature, and each course has a value for that feature.

## 5. Create the basic HTML page

Start with this in `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Impact | Course Comparison</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="comparison-section">
        <!-- Section heading -->

        <!-- Course comparison table -->

        <!-- Bottom note -->
    </main>

</body>
</html>
```

## 6. Build a tiny table first

Before creating the full comparison, understand the basic table structure:

```html
<table>
    <tr>
        <th>Course</th>
        <th>Duration</th>
    </tr>

    <tr>
        <td>C Programming</td>
        <td>30 Days</td>
    </tr>
</table>
```

### Understand the table elements

| Element | Purpose |
|---|---|
| `<table>` | Defines the table. |
| `<tr>` | Defines one table row. |
| `<th>` | Defines a heading cell. |
| `<td>` | Defines a regular data cell. |

Think of a table as a grid:

- A **row** goes from left to right.
- A **column** goes from top to bottom.
- A **cell** is one box where a row and column meet.

## 7. Add the section heading

Above the table, inside `<main>`, add:

```html
<div class="section-header">
    <span class="section-label">FIND YOUR PATH</span>

    <h1>Compare Our Courses</h1>

    <p>
        Explore our programming courses and choose
        the right learning path for your future.
    </p>
</div>
```

## 8. Understand the table groups

A larger table can be organized into three main parts:

- `<thead>` — contains the header rows.
- `<tbody>` — contains the main data rows.
- `<tfoot>` — contains footer information or actions.

We can also use `<caption>` to give the table a title.

## 9. Build the table header

Add this table structure below the section heading:

```html
<div class="table-container">
    <table>

        <caption>Programming Course Comparison</caption>

        <thead>
            <tr>
                <th rowspan="2" class="feature-heading">
                    Features
                </th>

                <th colspan="3" class="course-heading">
                    Programming Courses
                </th>
            </tr>

            <tr>
                <th>C Programming</th>
                <th>C++ Programming</th>
                <th>Java Programming</th>
            </tr>
        </thead>

        <!-- Table body will go here -->

        <!-- Table footer will go here -->

    </table>
</div>
```

### Understand `colspan`

`colspan` makes one cell occupy more than one column.

```html
<tr>
    <th colspan="3">Programming Courses</th>
</tr>
```

Here, the heading spans three columns.

Imagine three adjacent seats reserved together for one group. The group occupies the space of all three seats.

### Understand `rowspan`

`rowspan` makes one cell occupy more than one row.

```html
<tr>
    <th rowspan="2">Features</th>
    <th colspan="3">Programming Courses</th>
</tr>

<tr>
    <th>C Programming</th>
    <th>C++ Programming</th>
    <th>Java Programming</th>
</tr>
```

Here, the `Features` heading occupies the height of two rows.

**Important:** A cell using `rowspan` or `colspan` already occupies the space it spans. Do not add extra cells in those occupied positions.

## 10. Add the table body

Replace the table body comment with:

```html
<tbody>
    <tr>
        <th scope="row">Level</th>
        <td>Beginner</td>
        <td>Intermediate</td>
        <td>Beginner</td>
    </tr>

    <tr>
        <th scope="row">Duration</th>
        <td>30 Days</td>
        <td>45 Days</td>
        <td>60 Days</td>
    </tr>

    <tr>
        <th scope="row">Projects</th>
        <td>2 Projects</td>
        <td>3 Projects</td>
        <td>4 Projects</td>
    </tr>

    <tr>
        <th scope="row">Core Topics</th>
        <td>Variables, Loops, Arrays, Functions</td>
        <td>OOP, STL, Pointers, DSA</td>
        <td>OOP, Collections, JDBC, Java 8</td>
    </tr>

    <tr>
        <th scope="row">Practical Training</th>
        <td class="available">✓ Included</td>
        <td class="available">✓ Included</td>
        <td class="available">✓ Included</td>
    </tr>

    <tr>
        <th scope="row">Certificate</th>
        <td class="available">✓ Yes</td>
        <td class="available">✓ Yes</td>
        <td class="available">✓ Yes</td>
    </tr>
</tbody>
```

### Why use `<th scope="row">` for feature names?

The first cell in each body row describes the other values in that row. It is a row heading, so `<th scope="row">` gives it the correct meaning.

## 11. Add the table footer

Replace the table footer comment with:

```html
<tfoot>
    <tr>
        <th scope="row">Choose Course</th>

        <td>
            <a href="#contact" class="course-link">
                Enquire Now
            </a>
        </td>

        <td>
            <a href="#contact" class="course-link">
                Enquire Now
            </a>
        </td>

        <td>
            <a href="#contact" class="course-link">
                Enquire Now
            </a>
        </td>
    </tr>
</tfoot>
```

The links point to `#contact`. They will work when the complete website contains an element with `id="contact"`.

## 12. Add the bottom note

After the table container, but still inside `<main>`, add:

```html
<div class="section-note">
    <p>
        Not sure which course to choose?
        <a href="#contact">Talk to our team</a>
        and find your learning path.
    </p>
</div>
```

---

# Part 2 — Style the table with CSS

## 13. Add the basic reset and page styling

Open `style.css` and add:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f8ff;
    color: #263238;
    line-height: 1.6;
}

.comparison-section {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
}
```

### Understand the important properties

| Property | Purpose |
|---|---|
| `box-sizing: border-box` | Includes padding and border in the declared size. |
| `width: 90%` | Leaves some space at the sides. |
| `max-width: 1200px` | Stops the content becoming too wide. |
| `margin: 0 auto` | Centers the section horizontally. |
| `padding: 80px 0` | Adds space inside the section at the top and bottom. |
| `line-height` | Controls spacing between lines of text. |

## 14. Style the section heading

Add:

```css
.section-header {
    text-align: center;
    margin-bottom: 45px;
}

.section-label {
    display: inline-block;
    color: #1769ff;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
}

.section-header h1 {
    font-size: 40px;
    margin-bottom: 12px;
}

.section-header p {
    max-width: 550px;
    margin: 0 auto;
    color: #687780;
    font-size: 16px;
}
```

`text-align: center` centers the text inside the section header. The paragraph uses `max-width` so its lines do not become too long, and `margin: 0 auto` centers that narrower paragraph.

## 15. Style the table container

Add:

```css
.table-container {
    width: 100%;
    overflow-x: auto;

    background-color: #ffffff;
    border-radius: 12px;

    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
}
```

The container gives the table a white surface, rounded corners and a soft shadow.

We'll return to `overflow-x: auto` when we make the table work on small screens.

## 16. Style the table itself

Add:

```css
table {
    width: 100%;
    min-width: 750px;

    border-collapse: collapse;
    text-align: center;
}
```

### Understand `border-collapse`

Adjacent table cells can display separate borders. `border-collapse: collapse` combines adjoining borders into a single border.

Try changing it to:

```css
border-collapse: separate;
```

Observe the difference.

### Understand `text-align`

- `left` — aligns content to the left.
- `center` — aligns content to the center.
- `right` — aligns content to the right.

Our table centers most values. We'll align the feature names to the left separately.

## 17. Style the table caption and header

Add:

```css
caption {
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #263238;
    text-align: left;
}

thead {
    background-color: #1769ff;
    color: #ffffff;
}

thead th {
    padding: 20px 16px;
    font-size: 15px;
    border: 1px solid #3c82ff;
}

.feature-heading {
    width: 20%;
}

.course-heading {
    font-size: 17px;
}
```

- `<caption>` gives the table a title.
- `thead` styles the header area.
- `padding` adds space inside each header cell.
- `border` adds a line around the cells.
- `.feature-heading` controls the width of the first heading column.

## 18. Style the table body

Add:

```css
tbody th,
tbody td {
    padding: 18px 16px;
    border: 1px solid #e5e7eb;
}

tbody th {
    text-align: left;
    background-color: #f5f8ff;
    font-weight: bold;
}

tbody td {
    color: #52616b;
    font-size: 14px;
}
```

The comma lets one rule target both `tbody th` and `tbody td`.

The row headings are left-aligned, while the data cells keep the centered alignment from the table rule.

## 19. Add alternate row colors with `:nth-child()`

When every row has the same background, it can be difficult to follow information across a wide table.

Add:

```css
tbody tr:nth-child(even) {
    background-color: #fafcff;
}
```

`:nth-child(even)` selects even-numbered matching children.

Try this too:

```css
tbody tr:nth-child(odd) {
    background-color: #fafcff;
}
```

`odd` selects the first, third, fifth and other odd-numbered rows.

## 20. Add a row hover effect

Add:

```css
tbody tr:hover {
    background-color: #edf3ff;
}
```

`:hover` applies the style while the pointer is over a row.

## 21. Style the available features

Add:

```css
.available {
    color: #16834a;
    font-weight: bold;
}
```

This class makes the included training and certificate values stand out.

## 22. Style the table footer and enquiry links

Add:

```css
tfoot {
    background-color: #f5f8ff;
}

tfoot th,
tfoot td {
    padding: 20px 14px;
    border: 1px solid #e5e7eb;
}

tfoot th {
    text-align: left;
}

.course-link {
    display: inline-block;

    padding: 9px 16px;

    background-color: #1769ff;
    color: #ffffff;

    border-radius: 6px;
    text-decoration: none;

    font-size: 13px;
    font-weight: bold;

    transition: background-color 0.25s ease;
}

.course-link:hover {
    background-color: #0d4fc4;
}
```

The enquiry links are still anchor elements. CSS makes them look like buttons.

## 23. Style the bottom note

Add:

```css
.section-note {
    text-align: center;
    margin-top: 30px;
    color: #687780;
    font-size: 15px;
}

.section-note a {
    color: #1769ff;
    font-weight: bold;
    text-decoration: none;
}

.section-note a:hover {
    text-decoration: underline;
}
```

---

# Part 3 — Make the table work on small screens

## 24. Understand the mobile problem

A table with one feature column and three course columns may be too wide for a phone.

If we force every column to become very narrow, the text becomes difficult to read.

Instead, we'll keep a minimum table width and allow the table container to scroll horizontally.

We already added:

```css
.table-container {
    overflow-x: auto;
}

table {
    min-width: 750px;
}
```

This means:

- The table will not shrink below 750 pixels.
- If it is wider than the available container, horizontal scrolling becomes available.
- The rest of the page does not need to scroll sideways with it.

Now add a small-screen media query:

```css
@media (max-width: 600px) {
    .comparison-section {
        padding: 55px 0;
    }

    .section-header h1 {
        font-size: 30px;
    }

    .section-header p {
        font-size: 14px;
    }

    .table-container {
        border-radius: 8px;
    }
}
```

A media query applies CSS only when its condition matches. Here, these adjustments apply at viewport widths of 600 pixels or less.

---

# Part 4 — Complete code reference

## 25. Complete HTML

Your final `index.html` should look like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Code Impact | Course Comparison</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <main class="comparison-section">

        <div class="section-header">
            <span class="section-label">
                FIND YOUR PATH
            </span>

            <h1>Compare Our Courses</h1>

            <p>
                Explore our programming courses and choose
                the right learning path for your future.
            </p>
        </div>

        <div class="table-container">

            <table>

                <caption>
                    Programming Course Comparison
                </caption>

                <thead>
                    <tr>
                        <th rowspan="2" class="feature-heading">
                            Features
                        </th>

                        <th colspan="3" class="course-heading">
                            Programming Courses
                        </th>
                    </tr>

                    <tr>
                        <th>C Programming</th>
                        <th>C++ Programming</th>
                        <th>Java Programming</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">Level</th>
                        <td>Beginner</td>
                        <td>Intermediate</td>
                        <td>Beginner</td>
                    </tr>

                    <tr>
                        <th scope="row">Duration</th>
                        <td>30 Days</td>
                        <td>45 Days</td>
                        <td>60 Days</td>
                    </tr>

                    <tr>
                        <th scope="row">Projects</th>
                        <td>2 Projects</td>
                        <td>3 Projects</td>
                        <td>4 Projects</td>
                    </tr>

                    <tr>
                        <th scope="row">Core Topics</th>
                        <td>Variables, Loops, Arrays, Functions</td>
                        <td>OOP, STL, Pointers, DSA</td>
                        <td>OOP, Collections, JDBC, Java 8</td>
                    </tr>

                    <tr>
                        <th scope="row">Practical Training</th>
                        <td class="available">✓ Included</td>
                        <td class="available">✓ Included</td>
                        <td class="available">✓ Included</td>
                    </tr>

                    <tr>
                        <th scope="row">Certificate</th>
                        <td class="available">✓ Yes</td>
                        <td class="available">✓ Yes</td>
                        <td class="available">✓ Yes</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <th scope="row">Choose Course</th>

                        <td>
                            <a href="#contact" class="course-link">
                                Enquire Now
                            </a>
                        </td>

                        <td>
                            <a href="#contact" class="course-link">
                                Enquire Now
                            </a>
                        </td>

                        <td>
                            <a href="#contact" class="course-link">
                                Enquire Now
                            </a>
                        </td>
                    </tr>
                </tfoot>

            </table>

        </div>

        <div class="section-note">
            <p>
                Not sure which course to choose?
                <a href="#contact">Talk to our team</a>
                and find your learning path.
            </p>
        </div>

    </main>

</body>

</html>
```

## 26. Complete CSS

Your final `style.css` should look like this:

```css
/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f8ff;
    color: #263238;
    line-height: 1.6;
}

/* Main Section */
.comparison-section {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
}

/* Section Heading */
.section-header {
    text-align: center;
    margin-bottom: 45px;
}

.section-label {
    display: inline-block;
    color: #1769ff;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
}

.section-header h1 {
    font-size: 40px;
    margin-bottom: 12px;
}

.section-header p {
    max-width: 550px;
    margin: 0 auto;
    color: #687780;
    font-size: 16px;
}

/* Table Container */
.table-container {
    width: 100%;
    overflow-x: auto;

    background-color: #ffffff;
    border-radius: 12px;

    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
}

/* Table */
table {
    width: 100%;
    min-width: 750px;

    border-collapse: collapse;
    text-align: center;
}

/* Caption */
caption {
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #263238;
    text-align: left;
}

/* Table Header */
thead {
    background-color: #1769ff;
    color: #ffffff;
}

thead th {
    padding: 20px 16px;
    font-size: 15px;
    border: 1px solid #3c82ff;
}

.feature-heading {
    width: 20%;
}

.course-heading {
    font-size: 17px;
}

/* Table Body */
tbody th,
tbody td {
    padding: 18px 16px;
    border: 1px solid #e5e7eb;
}

tbody th {
    text-align: left;
    background-color: #f5f8ff;
    font-weight: bold;
}

tbody td {
    color: #52616b;
    font-size: 14px;
}

/* Alternate Row Background */
tbody tr:nth-child(even) {
    background-color: #fafcff;
}

/* Hover Effect */
tbody tr:hover {
    background-color: #edf3ff;
}

/* Available Features */
.available {
    color: #16834a;
    font-weight: bold;
}

/* Table Footer */
tfoot {
    background-color: #f5f8ff;
}

tfoot th,
tfoot td {
    padding: 20px 14px;
    border: 1px solid #e5e7eb;
}

tfoot th {
    text-align: left;
}

/* Enquire Button */
.course-link {
    display: inline-block;
    padding: 9px 16px;

    background-color: #1769ff;
    color: #ffffff;

    border-radius: 6px;
    text-decoration: none;

    font-size: 13px;
    font-weight: bold;

    transition: background-color 0.25s ease;
}

.course-link:hover {
    background-color: #0d4fc4;
}

/* Bottom Note */
.section-note {
    text-align: center;
    margin-top: 30px;
    color: #687780;
    font-size: 15px;
}

.section-note a {
    color: #1769ff;
    font-weight: bold;
    text-decoration: none;
}

.section-note a:hover {
    text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 600px) {
    .comparison-section {
        padding: 55px 0;
    }

    .section-header h1 {
        font-size: 30px;
    }

    .section-header p {
        font-size: 14px;
    }

    .table-container {
        border-radius: 8px;
    }
}
```

---

# Part 5 — Practice and revision

## 27. Try these changes yourself

- [ ] Add a Python Programming column.
- [ ] Update the header's `colspan` to match the number of courses.
- [ ] Add Python values to every body row and the footer.
- [ ] Add rows for Fees, Class Mode, Prerequisites and Training Hours.
- [ ] Change the header color.
- [ ] Increase or decrease cell padding.
- [ ] Try `:nth-child(odd)` instead of `:nth-child(even)`.
- [ ] Test the table on a narrow screen and verify horizontal scrolling.

## 28. Homework

Extend the comparison table by adding a Python Programming course.

Requirements:

- Add the new course heading.
- Update `colspan` so the group heading spans all course columns.
- Add Python values to each comparison row.
- Add its enquiry link in the footer.
- Add at least two more feature rows.
- Keep the table readable on mobile screens.

Write and test the updated table yourself. Don't only change the heading; every row must have the correct number of cells.

## 29. Questions to check your understanding

1. What is an HTML table used for?
2. What is the difference between a row and a column?
3. What is the purpose of `<tr>`?
4. What is the difference between `<th>` and `<td>`?
5. Why do we use `<thead>`, `<tbody>` and `<tfoot>`?
6. What does `<caption>` do?
7. What is `colspan`?
8. What is `rowspan`?
9. What does `border-collapse` do?
10. What is the difference between margin and padding?
11. What does `:nth-child(even)` select?
12. What does `:hover` do?
13. Why do we use `overflow-x: auto` for a wide table?

## 30. Remember these key ideas

- `<table>` creates the table.
- `<tr>` creates a row.
- `<th>` creates a heading cell.
- `<td>` creates a data cell.
- `<thead>`, `<tbody>` and `<tfoot>` organize the table.
- `colspan` makes a cell span multiple columns.
- `rowspan` makes a cell span multiple rows.
- CSS controls the table's appearance.
- A scrollable wrapper helps wide tables work on small screens.
- Tables are for tabular data, not general page layouts.

---

**Day 05 goal:** Understand how structured data is represented using HTML tables, then style it and make it usable on smaller screens.
