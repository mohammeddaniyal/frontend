# Day 07 — Footer Component
## Student Reference Guide

**Project:** Code Impact Academy  
**Technology:** HTML5 + CSS3  
**Level:** Beginner  
**JavaScript:** Not required

---

## 1. What will you build?

You will create a responsive footer for the Code Impact Academy website.

A footer is the section usually found at the bottom of a webpage. It often contains important links, contact details, social links, and copyright information.

Your footer will have four columns on desktop:

1. Brand information
2. Quick Links
3. Our Courses
4. Contact Us

At the bottom, it will show copyright text and policy links.

### Responsive layout

- Desktop: four columns.
- Tablet: two columns.
- Mobile: one column.

### What you will learn

- Use the semantic `<footer>` element.
- Create lists and links.
- Create email and telephone links.
- Arrange columns with CSS Grid.
- Align content with Flexbox.
- Use `gap`, `max-width`, and `margin: 0 auto`.
- Remove list bullets.
- Add hover and transition effects.
- Make the footer responsive with media queries.

---

## 2. Project setup

Create this folder:

```text
day-07-footer/
├── index.html
└── style.css
```

Connect your CSS file inside the HTML `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

---

## 3. Understand the footer structure

The footer has two main parts.

### Main footer

| Column | Content |
|---|---|
| Brand | Logo, description, social links |
| Quick Links | Home, About Us, Courses, Contact |
| Our Courses | C, C++, Java, Frontend, Python |
| Contact Us | Email, phone, location |

### Footer bottom

- Copyright text
- Privacy Policy link
- Terms & Conditions link

The contact details and links in this practice project are examples. Replace them with the real academy details and working page destinations before publishing.

---

## 4. Build the HTML

Save this code in `index.html`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Impact | Footer</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <footer class="site-footer">

        <div class="footer-container">

            <!-- Column 1: Brand -->
            <div class="footer-brand">

                <a href="#" class="logo">
                    <span class="logo-icon">CI</span>
                    <span>Code Impact</span>
                </a>

                <p>
                    Learn programming, build practical skills,
                    and prepare yourself for the world of technology.
                </p>

                <div class="social-links">
                    <a href="#" aria-label="Instagram">Instagram</a>
                    <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" aria-label="YouTube">YouTube</a>
                </div>

            </div>

            <!-- Column 2: Quick Links -->
            <div class="footer-column">

                <h3>Quick Links</h3>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>

            <!-- Column 3: Courses -->
            <div class="footer-column">

                <h3>Our Courses</h3>

                <ul>
                    <li><a href="#">C Programming</a></li>
                    <li><a href="#">C++ Programming</a></li>
                    <li><a href="#">Java Development</a></li>
                    <li><a href="#">Frontend Development</a></li>
                    <li><a href="#">Python with Django</a></li>
                </ul>

            </div>

            <!-- Column 4: Contact -->
            <div class="footer-column">

                <h3>Contact Us</h3>

                <ul class="contact-list">
                    <li>
                        <span>Email:</span>
                        <a href="mailto:info@codeimpact.in">
                            info@codeimpact.in
                        </a>
                    </li>

                    <li>
                        <span>Phone:</span>
                        <a href="tel:+919876543210">
                            +91 98765 43210
                        </a>
                    </li>

                    <li>
                        <span>Location:</span>
                        <p>Ujjain, Madhya Pradesh, India</p>
                    </li>
                </ul>

            </div>

        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">

            <p>
                © 2026 Code Impact Academy. All rights reserved.
            </p>

            <div class="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>

        </div>

    </footer>

</body>
</html>
```

---

## 5. Understand the HTML

### A. What is `<footer>`?

```html
<footer class="site-footer">
    <!-- Footer content -->
</footer>
```

The `<footer>` element represents footer content for a page or section.

It commonly contains related links, contact information, copyright details, or organization information.

### B. Lists and links

```html
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Courses</a></li>
</ul>
```

- `<ul>` creates an unordered list.
- `<li>` creates one list item.
- `<a>` creates a clickable link.
- `href` specifies the link destination.

### C. Email link

```html
<a href="mailto:info@example.com">Email us</a>
```

Clicking this link asks the device to open an available email application with the address filled in.

### D. Telephone link

```html
<a href="tel:+911234567890">Call us</a>
```

On supported devices, this can open the phone or calling application.

### E. Placeholder links

In the practice code, many links use:

```html
<a href="#">Home</a>
```

`#` is a placeholder. It does not connect to a real page. Later, replace it with a real page URL or a section ID.

---

## 6. Style the footer with CSS

Save this code in `style.css`.

```css
/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #263238;
}


/* Main Footer */
.site-footer {
    background-color: #f5f8ff;
    padding: 60px 8% 20px;
    border-top: 1px solid #e5e7eb;
}


/* Footer Main Container */
.footer-container {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
    gap: 40px;

    max-width: 1200px;
    margin: 0 auto;
}


/* Brand Section */
.logo {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    color: #263238;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
}

.logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    background-color: #1769ff;
    color: white;

    border-radius: 8px;
    font-size: 16px;
}

.footer-brand p {
    max-width: 280px;
    margin: 18px 0;

    color: #64748b;
    line-height: 1.7;
    font-size: 14px;
}


/* Social Links */
.social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.social-links a {
    color: #1769ff;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
}

.social-links a:hover {
    color: #0d4fc4;
}


/* Footer Columns */
.footer-column h3 {
    margin-bottom: 20px;

    font-size: 17px;
    color: #263238;
}

.footer-column ul {
    list-style: none;
}

.footer-column li {
    margin-bottom: 13px;
}

.footer-column a {
    color: #64748b;
    text-decoration: none;
    font-size: 14px;

    transition: color 0.3s ease;
}

.footer-column a:hover {
    color: #1769ff;
}


/* Contact Section */
.contact-list li {
    color: #64748b;
    font-size: 14px;
    line-height: 1.6;
}

.contact-list span {
    display: block;
    color: #263238;
    font-weight: 600;
    margin-bottom: 3px;
}

.contact-list p {
    margin: 0;
}


/* Footer Bottom */
.footer-bottom {
    max-width: 1200px;
    margin: 45px auto 0;
    padding-top: 20px;

    border-top: 1px solid #e5e7eb;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.footer-bottom p {
    color: #64748b;
    font-size: 13px;
}

.footer-bottom-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.footer-bottom-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 13px;
}

.footer-bottom-links a:hover {
    color: #1769ff;
}


/* Tablet Responsive */
@media (max-width: 900px) {

    .footer-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px 30px;
    }

}


/* Mobile Responsive */
@media (max-width: 600px) {

    .site-footer {
        padding: 45px 6% 20px;
    }

    .footer-container {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 35px;
    }

}
```

---

## 7. Important CSS concepts

### A. `grid-template-columns`

**Problem:** We need four content areas next to each other on a desktop screen.

```css
.footer-container {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
}
```

- `display: grid` creates a grid container.
- `grid-template-columns` defines the columns.
- `fr` means a fraction of the available space.
- The `1.5fr` brand column receives more space than a `1fr` column.

Try changing the values and observe how the column widths change.

### B. `gap`

**Problem:** The columns need space between them.

```css
.footer-container {
    gap: 40px;
}
```

`gap` creates space between grid items.

You may also see two values:

```css
gap: 40px 30px;
```

The first value is the row gap. The second is the column gap.

### C. `max-width`

**Problem:** Content should not stretch endlessly on a very wide screen.

```css
.footer-container {
    max-width: 1200px;
}
```

`max-width` sets the maximum width the container can reach.

### D. `margin: 0 auto`

**Problem:** We want the container centered horizontally.

```css
.footer-container {
    margin: 0 auto;
}
```

- `0` means no top or bottom margin.
- `auto` distributes the available horizontal margin equally when the element has a width limit.

### E. `list-style: none`

**Problem:** We want links in a list without bullet points.

```css
.footer-column ul {
    list-style: none;
}
```

This removes the default list markers.

### F. `transition`

**Problem:** We want link colors to change smoothly on hover.

```css
.footer-column a {
    transition: color 0.3s ease;
}
```

This makes changes to the `color` property happen smoothly over 0.3 seconds.

### G. `flex-wrap`

**Problem:** Links may not fit on one line when the available space becomes smaller.

```css
.social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
```

`flex-wrap: wrap` allows items to move onto another line when necessary.

### H. Flexbox for the footer bottom

**Problem:** Copyright text should be on one side and policy links on the other.

```css
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

- `display: flex` creates a flex layout.
- `justify-content: space-between` pushes the items apart.
- `align-items: center` aligns them along the cross axis.

On mobile, we stack the items:

```css
.footer-bottom {
    flex-direction: column;
    align-items: flex-start;
}
```

### I. Responsive media queries

Tablet:

```css
@media (max-width: 900px) {
    .footer-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

Mobile:

```css
@media (max-width: 600px) {
    .footer-container {
        grid-template-columns: 1fr;
    }
}
```

- `repeat(2, 1fr)` creates two equal columns.
- `1fr` creates one column.
- A media query applies CSS only when the screen matches its condition.

**Remember:** Grid is not only for large layouts, and Flexbox is not only for small layouts. Both can be used at different sizes. In this footer, Grid arranges the main columns and Flexbox aligns smaller groups of items.

---

## 8. Build it in stages

1. Create the footer and its main container.
2. Add the four HTML columns.
3. Add headings, paragraphs, lists, and links.
4. Add `mailto:` and `tel:` links.
5. Use CSS Grid to create four desktop columns.
6. Add `gap`, `max-width`, and `margin: 0 auto`.
7. Remove list bullets and style the links.
8. Add hover and transition effects.
9. Build the bottom row with Flexbox.
10. Add tablet and mobile media queries.
11. Resize the browser and test the layout.

---

## 9. Common mistakes

| Mistake | What to check |
|---|---|
| Columns do not appear side by side | Check `display: grid` and `grid-template-columns` |
| Columns touch each other | Add or adjust `gap` |
| Content becomes too wide | Add a suitable `max-width` |
| Container is not centered | Check `margin: 0 auto` |
| Bullets appear beside links | Apply `list-style: none` to the correct list |
| Links have default underlines | Use `text-decoration: none` |
| Hover changes instantly | Add `transition` to the normal link rule |
| Social links overflow | Check `display: flex` and `flex-wrap: wrap` |
| Footer stays four columns on mobile | Check media queries and class names |
| Bottom row does not stack on mobile | Use `flex-direction: column` |
| Email link does not open an email app | Check the `mailto:` value |
| Phone link does not open a calling app | Check the `tel:` value and device support |
| Placeholder links go nowhere | Replace `href="#"` with real destinations |

---

## 10. Practice tasks

### Task 1 — Add a quick link

Add a new item to Quick Links, such as Student Projects.

### Task 2 — Add another course

Add another course to the Our Courses list.

### Task 3 — Add a social link

Add a GitHub or Facebook link.

### Task 4 — Change column proportions

Experiment with:

```css
grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
```

Observe how the available space is distributed.

### Task 5 — Customize responsive behavior

Try changing the tablet and mobile breakpoints. Test the result at different browser widths.

### Task 6 — Replace placeholders

Use the real contact details, social destinations, and policy links supplied by the academy.

---

## 11. Connect the footer to the complete website

Day 07 completes this mini-component series.

When you combine the components:

- Reuse the navbar from Day 01.
- Reuse the course cards from Day 02.
- Reuse the course details section from Day 03.
- Reuse the hero section from Day 04.
- Reuse the comparison table from Day 05.
- Reuse the contact form from Day 06.
- Place the footer at the bottom of the complete page.

You do not need to rebuild the earlier components in this lesson. The goal is to understand how separate components fit together into one website.

Before publishing, replace all placeholder links and contact details.

---

## 12. Final checklist

- [ ] Footer uses the `<footer>` element.
- [ ] Four content columns are present.
- [ ] Brand, quick links, courses, and contact information are included.
- [ ] Email uses `mailto:`.
- [ ] Phone uses `tel:`.
- [ ] Lists have no default bullets.
- [ ] Grid creates proportional columns.
- [ ] Container has a maximum width and is centered.
- [ ] Link hover effects are smooth.
- [ ] Footer bottom uses Flexbox.
- [ ] Tablet layout has two columns.
- [ ] Mobile layout has one column.
- [ ] Footer bottom stacks on mobile.
- [ ] Placeholder links and details are identified for replacement.

---

## 13. Quick revision questions

1. What is the purpose of a website footer?
2. Why do we use `<footer>`?
3. What are `<ul>` and `<li>` used for?
4. What does `href` do?
5. What is `mailto:` used for?
6. What is `tel:` used for?
7. What does `display: grid` do?
8. What does `1fr` mean?
9. What does `gap` do?
10. Why do we use `max-width`?
11. Why do we use `margin: 0 auto`?
12. What does `list-style: none` do?
13. What does `transition` do?
14. What does `flex-wrap` do?
15. What does `justify-content: space-between` do?
16. What does `flex-direction: column` do?
17. How do media queries change the footer layout?
18. Is Grid only for large layouts and Flexbox only for small layouts?

---

**Key takeaway:** Use Grid to organize the footer's main columns, Flexbox to align smaller groups of content, and media queries to adapt the layout to different screen sizes.
