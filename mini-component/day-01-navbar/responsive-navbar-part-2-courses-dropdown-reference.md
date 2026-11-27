# Code Impact Academy
## Responsive Navbar — Part 2: Courses Dropdown

### Objective

Add a Courses dropdown to the existing navbar. The dropdown will contain links to:

- C / C++
- Java
- Python
- Web Development

We'll first build it using a **click event**. After that, we'll look at how to make it open on **hover** on desktop.

---

## 1. Update `index.html`

Find the existing Courses link:

```html
<a href="#">Courses</a>
```

Replace it with this dropdown structure:

```html
<div class="course-dropdown">

    <button class="courses-btn">Courses</button>

    <div class="course-menu">
        <a href="#">C / C++</a>
        <a href="#">Java</a>
        <a href="#">Python</a>
        <a href="#">Web Development</a>
    </div>

</div>
```

**Why use a button?**

Courses opens a menu; it does not take the user to another page. A button is suitable for an action like opening and closing a dropdown.

The `.course-dropdown` element groups the button and its menu so we can position and control them together.

---

## 2. Add the dropdown CSS

Add these rules to the bottom of your existing `style.css`:

```css
/* Courses Dropdown */

.course-dropdown {
    position: relative;
}

.courses-btn {
    background: none;
    border: none;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #263238;
    cursor: pointer;
}

/* Dropdown Menu */

.course-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 180px;
    background-color: white;
    padding: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    z-index: 10;
}

/* Dropdown Links */

.course-menu a {
    display: block;
    padding: 10px;
    color: #263238;
    text-decoration: none;
}

.course-menu a:hover {
    background-color: #f1f5f9;
}

/* Show Dropdown */

.course-dropdown.open .course-menu {
    display: block;
}
```

### Important CSS decisions

**`position: relative` on `.course-dropdown`**

This makes the dropdown container the positioning reference for the menu.

**`position: absolute` on `.course-menu`**

The menu can appear below Courses without pushing the other navigation links out of place.

**`top: 100%` and `left: 0`**

- `top: 100%` places the menu immediately below its parent container.
- `left: 0` aligns the menu with the left edge of that container.

**`min-width: 180px`**

Gives the dropdown a minimum width so its links have enough room.

**`display: none`**

Keeps the dropdown hidden initially.

**`.course-dropdown.open .course-menu`**

Shows the menu when JavaScript adds the `open` class to the parent.

---

## 3. Add the click interaction in `script.js`

We already have the hamburger menu code from Part 1. Keep it.

Add this code below the hamburger menu code:

```javascript
// Select Courses elements

const coursesBtn = document.querySelector(".courses-btn");
const courseDropdown = document.querySelector(".course-dropdown");

// Open or close the dropdown on click

coursesBtn.addEventListener("click", function () {

    courseDropdown.classList.toggle("open");

});
```

### Understand the JavaScript

**Step 1 — Select the elements**

```javascript
const coursesBtn = document.querySelector(".courses-btn");
const courseDropdown = document.querySelector(".course-dropdown");
```

- `coursesBtn` refers to the Courses button.
- `courseDropdown` refers to the wrapper containing the button and menu.

**Step 2 — Listen for a click**

```javascript
coursesBtn.addEventListener("click", function () {
    // Runs when Courses is clicked
});
```

`addEventListener()` waits for the specified event. Here, that event is `click`.

**Step 3 — Toggle the class**

```javascript
courseDropdown.classList.toggle("open");
```

- If `open` is not present, `toggle()` adds it.
- If `open` is already present, `toggle()` removes it.

The CSS rule then displays or hides the menu.

### Click interaction flow

1. The user clicks Courses.
2. JavaScript adds the `open` class.
3. CSS displays the dropdown.
4. The user clicks Courses again.
5. JavaScript removes the `open` class.
6. CSS hides the dropdown.

---

## 4. Optional desktop enhancement: Open on hover

A dropdown can also open when the pointer moves over Courses and close when the pointer moves away.

CSS has a built-in pseudo-class called `:hover` for this.

Add this rule:

```css
.course-dropdown:hover .course-menu {
    display: block;
}
```

**How to read this selector:**

- `.course-dropdown:hover` means the pointer is over the Courses container.
- `.course-menu` selects the menu inside that container.
- `display: block` makes the menu visible.

When the pointer leaves the container, the `:hover` condition is no longer true, so this rule stops applying.

### Important: click or hover?

These are two different ways to control the same dropdown.

- **Click version:** Keep the JavaScript click listener and the `.course-dropdown.open` CSS rule.
- **Hover version:** Use the `:hover` CSS rule and remove the Courses click listener from JavaScript.

Do not use both versions together for the same dropdown. The click version is more suitable for touchscreens; hover is suitable for desktop devices with a mouse.

For our current beginner implementation, **keep the click version first**. Once it works, try the hover version as an optional desktop experiment.

---

## 5. JavaScript concepts used

| Concept | Purpose |
|---|---|
| `querySelector()` | Selects the Courses button and dropdown |
| `addEventListener()` | Detects a click |
| `classList.toggle()` | Adds or removes the `open` class |

The hover enhancement uses CSS `:hover`; it does not require another JavaScript concept.

---

## 6. Testing checklist

### Click version

- [ ] Clicking Courses opens the dropdown.
- [ ] Clicking Courses again closes it.
- [ ] The dropdown appears below Courses.
- [ ] The dropdown links are displayed vertically.
- [ ] The hamburger menu from Part 1 still works.
- [ ] The dropdown works on a mobile touchscreen.

### Optional hover experiment

- [ ] Moving the pointer over Courses opens the dropdown.
- [ ] Moving the pointer away closes the dropdown.

---

## 7. Remember

JavaScript does not directly style the dropdown here. It adds or removes a CSS class.

**JavaScript controls the state; CSS controls the appearance.**
