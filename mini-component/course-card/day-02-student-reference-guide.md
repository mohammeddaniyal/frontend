# Day 02 — Build Course Cards with CSS Grid

## Mini-Component Series

**Project:** Code Impact Academy Course Cards  
**Files:** `index.html`, `style.css`, `c-programming-course.png`, and `level-up.png`  
**Technology:** HTML + CSS

---

## What will you build?

You will build a course card for a programming academy. Then you will create more cards and arrange them in a responsive grid.

Your finished component will include:

- A course image
- Course title and description
- Course duration and difficulty level
- An **Explore Course** link styled like a button
- Rounded corners and a subtle shadow
- A small hover effect
- A responsive grid that changes from three columns to two and then one

**Build one card first.** Understand its structure and styling before creating the grid.

## Before you start

You should know:

- Basic HTML elements and attributes
- CSS selectors and properties
- Flexbox basics from Day 01
- How to connect a CSS file to an HTML file

## Project folder

Create a folder named `day-02-course-card`:

```text
day-02-course-card/
├── index.html
├── style.css
├── c-programming-course.png
└── level-up.png
```

Keep both images in this folder. If you put them inside another folder, update their `src` paths in the HTML.

---

# Phase 1 — Create the HTML structure

First, create one course card using HTML. Do not worry about its appearance yet.

Add this code to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Cards - Code Impact</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <section class="courses">
        <h1>Our Courses</h1>

        <div class="courses-grid">

            <div class="course-card">

                <img
                    src="c-programming-course.png"
                    alt="C programming course"
                    class="course-image"
                >

                <div class="course-content">

                    <h2>C Programming</h2>

                    <p class="course-description">
                        Learn programming fundamentals from scratch
                        and build a strong foundation.
                    </p>

                    <div class="course-meta">

                        <div class="meta-item">
                            <span class="meta-icon text-icon" aria-hidden="true">⏲</span>
                            <span>Duration: 30 Days</span>
                        </div>

                        <div class="meta-item">
                            <span class="meta-icon image-icon" aria-hidden="true">
                                <img src="level-up.png" alt="" width="20" height="20">
                            </span>
                            <span>Level: Beginner</span>
                        </div>

                    </div>

                    <a href="#" class="course-btn">Explore Course</a>

                </div>
            </div>

        </div>
    </section>

</body>
</html>
```

### Understand the important HTML

| Element / Attribute | Purpose |
|---|---|
| `<section>` | Groups related content. Here, it contains the courses area. |
| `.courses-grid` | Container that will arrange the course cards later. |
| `.course-card` | Represents one complete course card. |
| `.course-image` | Displays the course image. |
| `.course-content` | Groups the text and link separately from the image. |
| `.course-meta` | Groups the course information rows. |
| `.meta-item` | Represents one information row, such as duration or level. |
| `<span>` | Groups an inline icon or short piece of text. |
| `aria-hidden="true"` | Hides a decorative icon from assistive technology. |
| `alt` | Provides alternative text for an image. |

The first icon, `⏲`, is a text symbol called a Unicode character. Its appearance may vary slightly between devices and fonts.

The second icon is a PNG image. It is placed inside a `<span>` so both types of icons can be aligned in a similar way.

The PNG uses `alt=""` because the text beside it already explains the meaning: “Level: Beginner”. In this example, the icon is decorative.

**Important:** `href="#"` is a placeholder. Later, replace it with the actual course details page URL.

### Observe

Create an empty `style.css`, save both files, and open `index.html` in your browser.

The card will look plain. That is expected. We will improve one part at a time.

---

# Phase 2 — Create the card boundary

### The problem

The image and course information are currently part of the page without a visible card boundary. Let's give them a shared surface.

Add this to `style.css`:

```css
.course-card {
    width: 300px;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}
```

### Understand the CSS

- `width: 300px` gives this single card a starting width.
- `background-color: white` gives the card a white background.
- `border` adds a thin light-grey line around it.
- `border-radius: 10px` rounds the card corners.
- `box-shadow` adds a subtle shadow behind the card.
- `overflow: hidden` clips anything that extends beyond the card's rounded edges. This helps the image follow the rounded top corners.

### Understand `box-shadow`

```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
```

The values mean:

1. `0` — horizontal shadow offset. The shadow does not move left or right.
2. `4px` — vertical shadow offset. The shadow sits slightly below the card.
3. `12px` — blur radius. A larger value makes the shadow softer.
4. `rgba(0, 0, 0, 0.08)` — black with low opacity.

`0.08` means 8% opacity, so the shadow is subtle.

### Try it

Temporarily remove `box-shadow`, refresh the browser, and compare the card. Then add the property back.

---

# Phase 3 — Size the course image

### The problem

The image should fill the card's width without becoming stretched or distorted.

Add:

```css
.course-image {
    display: block;
    width: 100%;
    height: auto;
}
```

### Understand the CSS

- `width: 100%` makes the image fill the available width of its parent.
- `height: auto` lets the browser calculate the height from the image's proportions. This prevents distortion.
- `display: block` removes the small baseline gap that can appear below an inline image.

We are using `height: auto` because we want to show the complete image at its natural proportions.

**Note:** `object-fit: cover` is useful when an image has a fixed height and you want a consistent image rectangle, but it may crop the edges. We do not need it for this version.

---

# Phase 4 — Add spacing and style the text

### The problem

The text is too close to the card edges. The title and description also need different visual emphasis.

Add:

```css
.course-content {
    padding: 16px;
}

.course-content h2 {
    font-size: 20px;
    margin: 0 0 8px;
}

.course-description {
    color: #555555;
    line-height: 1.5;
    margin: 0 0 16px;
}
```

### Understand the CSS

- `padding: 16px` adds space inside the content area, keeping the text away from the card edges.
- `font-size: 20px` makes the course title more prominent.
- `margin: 0 0 8px` removes the heading's default margins and adds 8px below it.
- `color: #555555` makes the description softer than the main text.
- `line-height: 1.5` makes the line spacing 1.5 times the font size, improving readability.
- `margin: 0 0 16px` adds space after the description.

### Understand margin shorthand

```css
margin: 0 0 16px;
```

When there are three values, CSS reads them as:

```text
margin: top  left/right  bottom;
margin: 0    0          16px;
```

### Remember the difference

- **Padding:** space inside an element's boundary.
- **Margin:** space outside an element, separating it from other content.

### Try it

Change the padding and margin values separately. Observe which spaces change.

---

# Phase 5 — Align the course details and icons

### The problem

The duration and level information should appear as two separate rows. In each row, the icon and text should be aligned neatly.

Add:

```css
.course-meta {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 18px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
}

.meta-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #1769ff;
    font-size: 22px;
    line-height: 1;
    flex-shrink: 0;
}

.image-icon img {
    display: block;
    width: 20px;
    height: 20px;
    object-fit: contain;
}
```

### Understand `.course-meta`

- `display: flex` creates a Flexbox container.
- `flex-direction: column` stacks the two information rows vertically.
- `gap: 10px` adds space between those rows.
- `margin-bottom: 18px` leaves space before the Explore Course link.

### Understand `.meta-item`

- `display: flex` places the icon and its text in a row.
- `align-items: center` aligns them vertically in the middle.
- `gap: 8px` adds space between the icon and text.
- `font-size: 14px` keeps the details smaller than the course title.

### Understand `.meta-icon`

- `display: inline-flex` makes the icon wrapper an inline-level Flexbox container.
- `align-items: center` centres its contents vertically.
- `justify-content: center` centres its contents horizontally.
- `color` sets the colour of the text icon.
- `font-size: 22px` makes the text symbol visible.
- `line-height: 1` reduces extra line spacing around the symbol.
- `flex-shrink: 0` prevents the icon wrapper from becoming narrower if the row gets crowded.

### What does `flex-shrink: 0` mean?

Flex items can shrink by default when there is not enough space. We want the icon to keep its intended size, so we prevent it from shrinking. The text can use the remaining space.

### Why style the PNG separately?

The PNG is an image, not a font character. These rules set its size and keep the complete image inside a 20px square without cropping it.

Both icons use the `.meta-icon` wrapper for alignment. `.image-icon img` targets only the PNG inside its wrapper.

---

# Phase 6 — Style the Explore Course link

### The problem

The Explore Course link should look like a button and fill the available content width.

Add:

```css
.course-btn {
    display: block;
    background-color: #1769ff;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 10px 14px;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.2s;
}

.course-btn:hover {
    background-color: #0d4fc4;
}
```

### Understand the CSS

- `display: block` makes the link fill the available content width.
- `background-color` gives it the same blue used in Day 01.
- `color: white` makes the text readable against the blue background.
- `text-align: center` centres the text.
- `text-decoration: none` removes the underline.
- `padding` adds space inside the link.
- `border-radius` rounds the corners.
- `font-weight: bold` emphasizes the action.
- `transition` makes the background colour change smoothly.
- `:hover` applies the darker blue while the pointer is over the link.

**Remember:** Use an anchor (`<a>`) for navigation. Use a `<button>` for an action such as submitting a form.

---

# Phase 7 — Add a card hover effect

### The problem

We want the card to lift slightly when someone points to it.

Add:

```css
.course-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
```

You already have a `.course-card` rule from Phase 2. Add the `transition` property to that existing rule, or keep this additional rule if you prefer to build phase by phase.

### Understand the CSS

- `transform` changes an element's visual position or shape without changing its normal layout space.
- `translateY(-4px)` moves the card up by 4 pixels.
- The card's original space remains in the layout, so nearby cards are not pushed around.
- `box-shadow` gives the card a stronger shadow while it is hovered.
- `transition` makes the movement and shadow change smoothly.
- `ease` makes the transition start and finish gently.

The transition lists two properties:

```css
transition: transform 0.2s ease, box-shadow 0.2s ease;
```

- `transform 0.2s ease` animates the movement.
- `box-shadow 0.2s ease` animates the shadow.

Put `transition` in the normal `.course-card` rule, not only in `:hover`. This lets the animation work both when the pointer enters and when it leaves.

**Optional polish:** First make the card correct and readable. Add the hover effect after you understand the main layout.

---

# Phase 8 — Create a grid of course cards

### The problem

One card is useful, but an academy website needs to display several courses together.

First, duplicate the complete `.course-card` element twice inside `.courses-grid`. You should now have three cards.

For practice, you can change the second and third cards to different courses. Update their image, title, description, duration, level, and link.

Now add this CSS:

```css
.courses-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}
```

### Understand `display: grid`

`display: grid` turns `.courses-grid` into a Grid container. Its direct children—the course cards—become grid items.

### Understand `grid-template-columns`

```css
grid-template-columns: repeat(3, 1fr);
```

Break it down:

- `grid-template-columns` defines the number and width of columns.
- `repeat(3, ...)` repeats the column definition three times.
- `1fr` means one fraction, or one share, of the available space.

This:

```css
grid-template-columns: repeat(3, 1fr);
```

is equivalent to:

```css
grid-template-columns: 1fr 1fr 1fr;
```

The three columns receive equal shares of the available grid width after the gaps are accounted for.

### Understand `gap`

`gap: 24px` adds 24px between the grid rows and columns.

### Understand `max-width`

`max-width: 1200px` prevents the grid from becoming wider than 1200px.

### Understand `margin: 0 auto`

- `margin` controls space outside an element.
- `0` sets the top and bottom margins to zero.
- `auto` lets the browser calculate the left and right margins.
- When the grid is narrower than its parent, the remaining horizontal space is shared between the two margins, centring the grid.

This works together with `max-width`. For example, if the parent is 1500px wide and the grid is 1200px wide, the remaining 300px becomes 150px on each side.

### Update the card width

In Phase 2, we gave the single card a fixed width of `300px`. Now the grid should control each card's width.

Update the `.course-card` rule to include:

```css
.course-card {
    width: 100%;
    min-width: 0;
}
```

- `width: 100%` makes the card fill its grid column.
- `min-width: 0` allows it to shrink within the grid column instead of overflowing because of its default minimum size.

Remove the old `width: 300px` declaration.

---

# Phase 9 — Make the grid responsive

### The problem

Three columns may become too narrow on a tablet or phone. We will reduce the number of columns as the screen gets smaller.

Add these media queries at the **end** of `style.css`:

```css
@media (max-width: 900px) {
    .courses-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .courses {
        padding: 28px 16px;
    }

    .courses-grid {
        grid-template-columns: 1fr;
    }
}
```

### Understand the CSS

- At widths of 900px or less, the grid changes to two equal columns.
- At widths of 600px or less, the grid changes to one column.
- `repeat(2, 1fr)` creates two equal columns.
- `1fr` creates one column using the available width.
- The smaller padding on mobile gives the cards more room.

Breakpoints are starting points, not universal rules. A layout should change when its content no longer has enough room.

### Test it

1. View the page at a wide browser width. You should see three columns.
2. Reduce the width below 900px. You should see two columns.
3. Reduce the width below 600px. You should see one column.
4. Increase the width again and check that the grid changes back.

---

# Final HTML reference

Your final `index.html` can contain three cards. This example shows one complete card; duplicate the `.course-card` block twice and change the course details for the other cards.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Course Cards - Code Impact</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <section class="courses">
        <h1>Our Courses</h1>

        <div class="courses-grid">

            <div class="course-card">
                <img
                    src="c-programming-course.png"
                    alt="C programming course"
                    class="course-image"
                >

                <div class="course-content">
                    <h2>C Programming</h2>

                    <p class="course-description">
                        Learn programming fundamentals from scratch
                        and build a strong foundation.
                    </p>

                    <div class="course-meta">
                        <div class="meta-item">
                            <span class="meta-icon text-icon" aria-hidden="true">⏲</span>
                            <span>Duration: 30 Days</span>
                        </div>

                        <div class="meta-item">
                            <span class="meta-icon image-icon" aria-hidden="true">
                                <img src="level-up.png" alt="" width="20" height="20">
                            </span>
                            <span>Level: Beginner</span>
                        </div>
                    </div>

                    <a href="#" class="course-btn">Explore Course</a>
                </div>
            </div>

            <!-- Duplicate another course-card here. -->

            <!-- Duplicate a third course-card here. -->

        </div>
    </section>

</body>
</html>
```

---

# Final CSS reference

After completing all phases, your `style.css` should look like this:

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #263238;
    background-color: #f5f8ff;
    line-height: 1.5;
}

.courses {
    padding: 40px 24px;
}

.courses h1 {
    text-align: center;
    margin: 0 0 28px;
}

.courses-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.course-card {
    width: 100%;
    min-width: 0;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.course-image {
    display: block;
    width: 100%;
    height: auto;
}

.course-content {
    padding: 16px;
}

.course-content h2 {
    font-size: 20px;
    margin: 0 0 8px;
}

.course-description {
    color: #555555;
    line-height: 1.5;
    margin: 0 0 16px;
}

.course-meta {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 18px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
}

.meta-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #1769ff;
    font-size: 22px;
    line-height: 1;
    flex-shrink: 0;
}

.image-icon img {
    display: block;
    width: 20px;
    height: 20px;
    object-fit: contain;
}

.course-btn {
    display: block;
    background-color: #1769ff;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 10px 14px;
    border-radius: 6px;
    font-weight: bold;
    transition: background-color 0.2s;
}

.course-btn:hover {
    background-color: #0d4fc4;
}

@media (max-width: 900px) {
    .courses-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .courses {
        padding: 28px 16px;
    }

    .courses-grid {
        grid-template-columns: 1fr;
    }
}
```

### Why use `box-sizing: border-box`?

```css
* {
    box-sizing: border-box;
}
```

The `*` selector targets every element.

With `box-sizing: border-box`, an element's declared width includes its padding and border. This makes sizing more predictable.

---

# Final checklist

Before you finish, check that:

- [ ] The course image appears correctly.
- [ ] The card has a border and rounded corners.
- [ ] The shadow is subtle.
- [ ] The image fills the card width without distortion.
- [ ] The text has comfortable spacing.
- [ ] The duration and level appear as separate rows.
- [ ] Both icons align with their text.
- [ ] The Explore Course link looks like a button.
- [ ] The card lifts smoothly on hover.
- [ ] Three cards appear in a desktop grid.
- [ ] The grid changes to two columns on tablet.
- [ ] The grid changes to one column on mobile.

# Practice task — Create your own course cards

Create cards for three courses of your choice.

For each card, change:

1. Course image
2. Course title
3. Course description
4. Duration
5. Difficulty level
6. Explore Course destination

Then experiment:

- Change the card's border radius.
- Make the shadow softer or stronger.
- Change the PNG icon size.
- Change the hover movement from `-4px` to `-2px`.
- Change the grid gap.
- Change a responsive breakpoint and observe the layout.

**Challenge:** Try to keep the cards visually consistent even when one course description is longer than another. First observe what happens before looking for a solution.

Submit `index.html`, `style.css`, the images used, and screenshots showing desktop and mobile layouts.

## Before moving to Day 03

Make sure you can explain these concepts in your own words:

| Concept | Remember |
|---|---|
| `border` | Draws a line around an element. |
| `border-radius` | Rounds an element's corners. |
| `box-shadow` | Adds a shadow behind an element. |
| `overflow: hidden` | Clips content that extends outside an element's boundary. |
| `width: 100%` | Makes an element fill its parent's available width. |
| `height: auto` | Preserves an image's proportions. |
| `padding` | Adds space inside an element. |
| `margin` | Adds space outside an element. |
| `line-height` | Controls the height of lines of text. |
| `display: flex` | Creates a flexible layout. |
| `flex-direction: column` | Stacks flex items vertically. |
| `flex-shrink: 0` | Prevents a flex item from shrinking. |
| `display: grid` | Creates a grid layout. |
| `repeat(3, 1fr)` | Creates three equal-width columns. |
| `gap` | Adds space between grid or flex items. |
| `margin: 0 auto` | Centres a block when there is available horizontal space. |
| `transform: translateY()` | Moves an element visually up or down. |
| `transition` | Makes property changes happen smoothly. |
| `@media` | Applies CSS rules at selected screen widths. |

**Learning rule:** Don't just copy the CSS. For every property, understand what problem it solves. Change its value, refresh the browser, and observe the result.
