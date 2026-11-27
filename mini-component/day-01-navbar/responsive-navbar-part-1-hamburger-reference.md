# Code Impact Academy
## Responsive Navbar — Part 1: Hamburger Menu

### Objective
Add a mobile hamburger button that shows and hides the navigation links.

### 1. Update `index.html`

Add this button after the Join Now button:

```html
<button class="menu-btn">☰</button>
```

Make sure `script.js` is linked just before `</body>`:

```html
<script src="script.js"></script>
```

### 2. Update `style.css`

Add the following rules:

```css
/* Hamburger Button */
.menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 26px;
    cursor: pointer;
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .navbar {
        position: relative;
    }

    .menu-btn {
        display: block;
    }

    .nav-cta {
        display: none;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 20px;
        background-color: white;
    }

    .nav-links.show {
        display: flex;
    }
}
```

**Why these positioning properties?**

- `position: relative` on `.navbar` makes it the positioning reference for the menu.
- `position: absolute` lets the mobile menu sit below the navbar without taking up space in the normal layout.
- `top: 100%` places the menu immediately below the navbar.
- `left: 0` aligns it with the navbar's left edge.
- `width: 100%` makes it span the navbar's width.
- `padding: 20px` adds space inside the menu.

### 3. Add JavaScript in `script.js`

```javascript
// Select the elements
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Show or hide the navigation when the button is clicked
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});
```

### 4. JavaScript concepts used

| Concept | Purpose |
|---|---|
| `querySelector()` | Selects the hamburger button and navigation |
| `addEventListener()` | Runs code when the button is clicked |
| `classList.toggle()` | Adds or removes the `show` class |
| `classList.contains()` | Checks whether the `show` class exists |
| `textContent` | Changes the button symbol |

### 5. How it works

1. The navigation is hidden on small screens using `display: none`.
2. When the hamburger is clicked, JavaScript toggles the `show` class.
3. The `.nav-links.show` CSS rule makes the navigation visible.
4. JavaScript checks whether the `show` class exists and changes the button symbol accordingly.

### 6. Test it

- [ ] On desktop, the original navbar still appears.
- [ ] On screens 768px wide or smaller, the hamburger button appears.
- [ ] The navigation links are initially hidden on mobile.
- [ ] Clicking ☰ shows the links and changes the symbol to ✕.
- [ ] Clicking ✕ hides the links and changes the symbol back to ☰.
