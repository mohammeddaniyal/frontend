# Day 04 — Responsive Hero Section
## Student Reference Guide

**Track:** Mini-Component Series  
**Project:** Code Impact Academy Hero Section  
**Technology:** HTML5 + CSS3  
**Level:** Beginner  
**Today's main topics:** Flexbox, image fitting, positioning, layering and responsive design

---

## 1. What are we building?

Today, you'll create a **hero section** for the Code Impact website.

A hero section is the prominent section near the top of a website. It quickly tells visitors what the website is about and gives them an action to take.

Our design includes:

- A small label: `WELCOME TO CODE IMPACT`
- A main heading and short description
- Two call-to-action links
- Two trust indicators
- A large programming-workspace photograph
- A decorative shape behind the photograph
- A small caption over the image

On a desktop screen, the content and image appear side by side. On a mobile screen, they stack vertically.

We are not building a navbar or footer today. Later, we'll reuse the navbar from Day 01 and place this hero below it.

## 2. What you'll learn

By the end of this project, you should be able to:

- Build a two-column layout using Flexbox.
- Style headings, descriptions and links.
- Make links look like buttons.
- Control how an image fills its container using `object-fit`.
- Position decorative elements using `position`.
- Control which element appears in front using `z-index`.
- Add hover effects and transitions.
- Use media queries to make the design responsive.

## 3. Set up your project

Create this folder structure:

```text
day-04-hero/
├── index.html
└── style.css
```

The hero photograph is loaded from an external image URL, so you do not need to download an image file for this exercise.

---

# Part 1 — Build the HTML

## 4. Create the page structure

Add this basic HTML to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Impact | Learn Programming</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main>
        <!-- Hero section will go here -->
    </main>

</body>
</html>
```

The `<main>` element contains the main content of this page. The `<section>` element will group all the content that belongs to our hero.

## 5. Add the hero content

Inside `<main>`, add:

```html
<section class="hero">

    <div class="hero-content">
        <span class="hero-label">
            WELCOME TO CODE IMPACT
        </span>

        <h1>
            Learn Programming.
            <span>Build Your Future.</span>
        </h1>

        <p class="hero-description">
            Practical programming courses designed to help you
            build real-world skills and become a confident developer.
        </p>

        <div class="hero-actions">
            <a href="#courses" class="btn btn-primary">
                Explore Courses <span>&rarr;</span>
            </a>

            <a href="#contact" class="btn btn-secondary">
                Contact Us
            </a>
        </div>

        <div class="hero-trust">
            <span>✓ Beginner-friendly learning</span>
            <span>✓ Practical training</span>
        </div>
    </div>

    <!-- Image section will go here -->

</section>
```

### Understand the structure

- `.hero` is the main parent section.
- `.hero-content` groups the text and links.
- `.hero-label` displays the small introductory label.
- `<h1>` contains the main heading.
- `.hero-actions` groups the two CTA links.
- `.hero-trust` groups the trust indicators.

### Why are the CTA elements links?

We use `<a>` because these controls navigate to another part of the website.

- `href="#courses"` points to an element with `id="courses"`.
- `href="#contact"` points to an element with `id="contact"`.

Those target sections are not part of today's standalone exercise. The links will work when the matching sections are added to the complete website.

## 6. Add the image and caption

After the `.hero-content` div, but still inside `.hero`, add:

```html
<div class="hero-visual">

    <div class="visual-decoration"></div>

    <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=85&fit=crop"
        alt="Developer working on a laptop with programming code"
        class="hero-image"
    >

    <div class="image-caption">
        <span class="caption-dot"></span>
        Learn. Practice. Build.
    </div>

</div>
```

The `.hero-visual` container holds three elements:

1. `.visual-decoration` — the decorative shape behind the image.
2. `.hero-image` — the main photograph.
3. `.image-caption` — the small label displayed over the image.

Save the file and open it in your browser. Before styling, notice how the elements appear in the normal document flow.

---

# Part 2 — Style the hero with CSS

## 7. Add the basic reset

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
    background-color: #ffffff;
    line-height: 1.6;
}
```

### Understand these properties

| Property | Purpose |
|---|---|
| `margin: 0` | Removes default outer spacing. |
| `padding: 0` | Removes default inner spacing. |
| `box-sizing: border-box` | Includes padding and border in the declared width and height. |
| `font-family` | Sets the text font. |
| `color` | Sets the text color. |
| `background-color` | Sets the background color. |
| `line-height` | Controls the vertical spacing between lines of text. |

Think of an element as a box. With `border-box`, the width and height you specify describe the complete box, including its padding and border.

## 8. Create the two-column layout with Flexbox

### First, understand the problem

We want the text on the left and the image on the right. We can use Flexbox to arrange the two direct children of `.hero`.

Add:

```css
.hero {
    width: 90%;
    max-width: 1300px;
    min-height: 650px;
    margin: 0 auto;
    padding: 70px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 55px;
}
```

### Understand the layout properties

| Property | What it does |
|---|---|
| `width: 90%` | Gives the hero room on both sides of the screen. |
| `max-width: 1300px` | Prevents the hero from becoming too wide on large screens. |
| `min-height: 650px` | Sets a minimum height while allowing the section to grow if needed. |
| `margin: 0 auto` | Centers the section horizontally. |
| `padding: 70px 0` | Adds vertical inner spacing. |
| `display: flex` | Makes the direct children flex items. |
| `align-items: center` | Aligns items along the cross axis. |
| `justify-content: space-between` | Distributes free space along the main axis. |
| `gap: 55px` | Adds space between the two columns. |

For this row layout:

- Main axis: horizontal
- Cross axis: vertical

Remember: `justify-content` and `align-items` follow the main and cross axes. Their visual direction changes when `flex-direction` changes.

## 9. Give space to the content and image

Add:

```css
.hero-content {
    flex: 0.9;
    max-width: 560px;
}

.hero-visual {
    flex: 1.1;
    min-width: 0;
    height: 480px;
}
```

The `flex` values influence how available flexible space is shared between the two items. They are not fixed pixel widths. Here, the visual column receives a slightly larger share.

`min-width: 0` allows the flex item to shrink below its content's automatic minimum size when needed.

## 10. Style the text

Add:

```css
.hero-label {
    display: inline-block;
    color: #1769ff;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.hero-content h1 {
    font-size: 54px;
    line-height: 1.15;
    margin-bottom: 22px;
}

.hero-content h1 span {
    color: #1769ff;
}

.hero-description {
    font-size: 18px;
    color: #52616b;
    margin-bottom: 30px;
    max-width: 500px;
}
```

### Properties to notice

- `font-size` controls text size.
- `font-weight` controls text thickness.
- `letter-spacing` changes the space between letters.
- `line-height` controls the spacing between lines.
- `max-width` limits how wide the description can become.
- `.hero-content h1 span` selects the `<span>` inside the hero heading, allowing us to highlight only that part.

## 11. Style the CTA links

Add:

```css
.hero-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 25px;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 14px 24px;
    border: 2px solid #1769ff;
    border-radius: 8px;

    text-decoration: none;
    font-size: 15px;
    font-weight: bold;

    transition: all 0.25s ease;
}

.btn-primary {
    background-color: #1769ff;
    color: #ffffff;
}

.btn-primary:hover {
    background-color: #0d4fc4;
    border-color: #0d4fc4;
    transform: translateY(-3px);
}

.btn-secondary {
    background-color: #ffffff;
    color: #1769ff;
}

.btn-secondary:hover {
    background-color: #f5f8ff;
    transform: translateY(-3px);
}
```

### Understand the important properties

- `display: flex` arranges the links inside `.hero-actions`.
- `flex-wrap: wrap` allows the links to move onto another line if there is not enough space.
- `padding` creates space inside each button.
- `border` adds an outline.
- `border-radius` rounds the corners.
- `text-decoration: none` removes the link underline.
- `:hover` applies styles while the pointer is over the link.
- `transition` makes supported style changes happen smoothly.
- `transform: translateY(-3px)` moves the button upward by 3 pixels.

A transition responds to a change in state, such as hover. It is not the same as an animation that starts automatically.

## 12. Style the trust indicators

Add:

```css
.hero-trust {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;

    font-size: 14px;
    color: #687780;
}
```

Flexbox places the two indicators in a row. `flex-wrap` allows them to wrap if the available width becomes too small.

---

# Part 3 — Image fitting and layered elements

## 13. Set up the image container

Add:

```css
.hero-visual {
    flex: 1.1;
    min-width: 0;
    height: 480px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
}
```

### Why `position: relative`?

We want to place a decorative shape behind the image and a caption over the image.

`position: relative` keeps the container in the normal document flow and makes it the positioning reference for its absolutely positioned descendants.

## 14. Style the decorative shape

Add:

```css
.visual-decoration {
    position: absolute;

    width: 90%;
    height: 90%;

    background-color: #eaf1ff;
    border-radius: 30px;
    transform: rotate(4deg);
}
```

- `position: absolute` removes the decoration from normal flow and positions it relative to its nearest positioned ancestor.
- `width` and `height` control its size.
- `border-radius` rounds its corners.
- `transform: rotate(4deg)` rotates it slightly.

Because `.hero-visual` has `position: relative`, the decoration uses that container as its positioning reference.

## 15. Make the image fill its container

Add:

```css
.hero-image {
    position: relative;
    z-index: 1;

    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    border-radius: 24px;

    box-shadow: 0 20px 50px rgba(23, 105, 255, 0.15);
}
```

### Understand `object-fit`

The image must fill its container without being stretched.

| Value | Result |
|---|---|
| `cover` | Fills the box while preserving proportions; some edges may be cropped. |
| `contain` | Shows the entire image; empty space may remain inside the box. |

Try changing `cover` to `contain` and observe the difference.

Other properties:

- `width: 100%` fills the container's width.
- `height: 100%` fills the container's height.
- `display: block` removes the small inline-image baseline gap.
- `box-shadow` adds a shadow around the image.
- `z-index: 1` places the image above the decorative shape in this layering arrangement.

## 16. Place the caption over the image

Add:

```css
.image-caption {
    position: absolute;
    z-index: 2;

    bottom: 25px;
    left: 25px;

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 12px 18px;

    background-color: #ffffff;
    border-radius: 8px;

    font-size: 14px;
    font-weight: bold;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
}

.caption-dot {
    width: 9px;
    height: 9px;
    background-color: #1769ff;
    border-radius: 50%;
}
```

### Understand positioning and layering

- `position: absolute` lets us place the caption at a chosen position inside the positioned container.
- `bottom: 25px` places it 25 pixels from the bottom.
- `left: 25px` places it 25 pixels from the left.
- `z-index` controls which positioned layer appears in front.
- The caption has `z-index: 2`, so it appears above the image with `z-index: 1`.

The `.hero-visual` container is the positioning reference for both the decoration and caption.

**Experiment:** Temporarily remove `position: relative` from `.hero-visual`, then add it back. Observe how the absolutely positioned elements behave.

---

# Part 4 — Make the hero responsive

## 17. Adjust the layout for tablets

Add:

```css
@media (max-width: 850px) {
    .hero {
        gap: 35px;
    }

    .hero-content h1 {
        font-size: 42px;
    }

    .hero-visual {
        height: 400px;
    }
}
```

This media query applies when the viewport is 850 pixels wide or narrower. It reduces the gap, heading size and image height.

## 18. Stack the layout on mobile

Add:

```css
@media (max-width: 700px) {
    .hero {
        flex-direction: column;
        align-items: stretch;

        min-height: auto;
        padding: 50px 0;

        gap: 45px;
    }

    .hero-content {
        max-width: 100%;
    }

    .hero-content h1 {
        font-size: 38px;
    }

    .hero-description {
        font-size: 16px;
    }

    .hero-visual {
        width: 100%;
        height: 350px;
    }

    .hero-trust {
        gap: 10px;
    }
}
```

At 700 pixels or narrower:

- The two columns become a vertical stack.
- The text appears before the image.
- The heading and description become smaller.
- The image height is reduced.

The HTML does not change. CSS changes how the same elements are arranged.

## 19. Adjust very small screens

Add:

```css
@media (max-width: 420px) {
    .hero-content h1 {
        font-size: 32px;
    }

    .hero-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .btn {
        justify-content: center;
    }

    .hero-visual {
        height: 280px;
    }

    .image-caption {
        bottom: 15px;
        left: 15px;
    }
}
```

This final media query makes the heading smaller, stacks the CTA links, centers their text and reduces the image height on very small screens.

---

# Part 5 — Complete code reference

## 20. Complete HTML

Save this as `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Impact | Learn Programming</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main>
        <section class="hero">

            <div class="hero-content">
                <span class="hero-label">
                    WELCOME TO CODE IMPACT
                </span>

                <h1>
                    Learn Programming.
                    <span>Build Your Future.</span>
                </h1>

                <p class="hero-description">
                    Practical programming courses designed to help you
                    build real-world skills and become a confident developer.
                </p>

                <div class="hero-actions">
                    <a href="#courses" class="btn btn-primary">
                        Explore Courses <span>&rarr;</span>
                    </a>

                    <a href="#contact" class="btn btn-secondary">
                        Contact Us
                    </a>
                </div>

                <div class="hero-trust">
                    <span>✓ Beginner-friendly learning</span>
                    <span>✓ Practical training</span>
                </div>
            </div>

            <div class="hero-visual">
                <div class="visual-decoration"></div>

                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=85&fit=crop"
                    alt="Developer working on a laptop with programming code"
                    class="hero-image"
                >

                <div class="image-caption">
                    <span class="caption-dot"></span>
                    Learn. Practice. Build.
                </div>
            </div>

        </section>
    </main>

</body>
</html>
```

## 21. Complete CSS

Save this as `style.css`:

```css
/* 1. Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #263238;
    background-color: #ffffff;
    line-height: 1.6;
}

/* 2. Hero Layout */
.hero {
    width: 90%;
    max-width: 1300px;
    min-height: 650px;
    margin: 0 auto;
    padding: 70px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 55px;
}

/* 3. Hero Content */
.hero-content {
    flex: 0.9;
    max-width: 560px;
}

.hero-label {
    display: inline-block;
    color: #1769ff;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 20px;
}

.hero-content h1 {
    font-size: 54px;
    line-height: 1.15;
    margin-bottom: 22px;
}

.hero-content h1 span {
    color: #1769ff;
}

.hero-description {
    font-size: 18px;
    color: #52616b;
    margin-bottom: 30px;
    max-width: 500px;
}

/* 4. CTA Buttons */
.hero-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 25px;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 14px 24px;
    border: 2px solid #1769ff;
    border-radius: 8px;

    text-decoration: none;
    font-size: 15px;
    font-weight: bold;

    transition: all 0.25s ease;
}

.btn-primary {
    background-color: #1769ff;
    color: #ffffff;
}

.btn-primary:hover {
    background-color: #0d4fc4;
    border-color: #0d4fc4;
    transform: translateY(-3px);
}

.btn-secondary {
    background-color: #ffffff;
    color: #1769ff;
}

.btn-secondary:hover {
    background-color: #f5f8ff;
    transform: translateY(-3px);
}

/* 5. Trust Indicators */
.hero-trust {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;

    font-size: 14px;
    color: #687780;
}

/* 6. Large Hero Visual */
.hero-visual {
    flex: 1.1;
    min-width: 0;
    height: 480px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
}

.visual-decoration {
    position: absolute;

    width: 90%;
    height: 90%;

    background-color: #eaf1ff;
    border-radius: 30px;
    transform: rotate(4deg);
}

.hero-image {
    position: relative;
    z-index: 1;

    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    border-radius: 24px;

    box-shadow: 0 20px 50px rgba(23, 105, 255, 0.15);
}

/* 7. Image Caption */
.image-caption {
    position: absolute;
    z-index: 2;

    bottom: 25px;
    left: 25px;

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 12px 18px;

    background-color: #ffffff;
    border-radius: 8px;

    font-size: 14px;
    font-weight: bold;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
}

.caption-dot {
    width: 9px;
    height: 9px;
    background-color: #1769ff;
    border-radius: 50%;
}

/* 8. Tablet Adjustment */
@media (max-width: 850px) {
    .hero {
        gap: 35px;
    }

    .hero-content h1 {
        font-size: 42px;
    }

    .hero-visual {
        height: 400px;
    }
}

/* 9. Mobile Layout */
@media (max-width: 700px) {
    .hero {
        flex-direction: column;
        align-items: stretch;

        min-height: auto;
        padding: 50px 0;

        gap: 45px;
    }

    .hero-content {
        max-width: 100%;
    }

    .hero-content h1 {
        font-size: 38px;
    }

    .hero-description {
        font-size: 16px;
    }

    .hero-visual {
        width: 100%;
        height: 350px;
    }

    .hero-trust {
        gap: 10px;
    }
}

/* 10. Small Mobile Screens */
@media (max-width: 420px) {
    .hero-content h1 {
        font-size: 32px;
    }

    .hero-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .btn {
        justify-content: center;
    }

    .hero-visual {
        height: 280px;
    }

    .image-caption {
        bottom: 15px;
        left: 15px;
    }
}
```

---

# Part 6 — Practice and revision

## 22. Try these changes yourself

- [ ] Change the heading and description to introduce a different course or service.
- [ ] Replace the photograph with another suitable programming-related image.
- [ ] Try `object-fit: cover` and `object-fit: contain`.
- [ ] Change the column gap to `30px`, then `70px`.
- [ ] Change the decorative shape from a rotated rectangle to a circle.
- [ ] Add a third trust indicator.
- [ ] Test the layout at desktop, tablet and mobile widths.
- [ ] Check that no horizontal overflow appears on small screens.

## 23. Homework

Customize the hero section for another course or service.

Requirements:

- Write a new heading and description.
- Use a suitable image.
- Keep two CTA links.
- Keep the two-column desktop layout.
- Make the layout stack on mobile.
- Add a hover effect to the buttons.
- Experiment with the image fitting and decorative shape.

## 24. Questions to check your understanding

1. What is a hero section?
2. Why do we use Flexbox for this layout?
3. What are the main axis and cross axis?
4. What does `gap` do?
5. What is the difference between `object-fit: cover` and `object-fit: contain`?
6. What does `position: relative` do?
7. What is the purpose of `position: absolute`?
8. Why does the caption use a higher `z-index` than the image?
9. What does `:hover` mean?
10. Why do we use `transition`?
11. What is a media query?
12. Why does `flex-direction` change to `column` on mobile?

## 25. Remember these key ideas

- **Flexbox** creates the two-column layout.
- The image container controls the visual area.
- **`object-fit`** controls how the image fills that area.
- **Positioning** lets us place the decoration and caption.
- **`z-index`** controls the stacking order of layers.
- **Hover and transition** provide visual feedback.
- **Media queries** adapt the layout to smaller screens.
- This lesson uses HTML and CSS only. No JavaScript or CSS framework is required.

---

**Day 04 goal:** Build a responsive hero section and understand the layout decisions behind it. Later, reuse the navbar from Day 01 above this hero and connect its links to the relevant sections of the complete website.
