# Day 15 — CSS Variables (Custom Properties)

## Why Do We Need CSS Variables?
Imagine a website uses the same blue color for buttons, headings, and links:

```css
button { background-color: blue; }
h1 { color: blue; }
a { color: blue; }
```

If we want to change blue to purple, we would need to update several rules. **CSS variables let us define a value once and reuse it.**

## Declare a CSS Variable

```css
:root {
    --primary-color: blue;
}
```

- `:root` selects the root element of the document.
- `--primary-color` is the custom property name.
- `blue` is the value.
- A custom CSS property name must begin with two hyphens (`--`).

We commonly use `:root` for variables shared throughout the page.

## Reuse the Variable with `var()`

```css
:root {
    --primary-color: blue;
}

button { background-color: var(--primary-color); }
h1 { color: var(--primary-color); }
a { color: var(--primary-color); }
```

`var(--primary-color)` retrieves the value stored in `--primary-color`. The button, heading, and link now use the same primary color.

## Change One Value
Change only the variable:

```css
:root {
    --primary-color: purple;
}
```

All declarations using `var(--primary-color)` now use purple. You do not need to edit each individual rule.

## Can Variables Be Declared Elsewhere?
Yes. Custom properties can be declared within other selectors:

```css
.card {
    --primary-color: green;
    color: var(--primary-color);
}
```

Here, the variable is available to `.card` and its descendants through inheritance. It is not automatically available to unrelated elements outside that scope.

For beginners, `:root` is a convenient place for a variable shared across the page.

## Correct Syntax
Correct:

```css
:root { --primary-color: blue; }

button {
    background-color: var(--primary-color);
}
```

A declaration such as `primary-color: blue;` is not a custom property because its name does not begin with `--`.

## Quick Revision

| Concept | Meaning |
|---|---|
| CSS variable | A reusable custom property that stores a CSS value |
| `:root` | A common place to declare shared variables |
| `--primary-color` | A custom property name |
| `var()` | Retrieves a custom property's value |
| `--` | Required at the beginning of a custom property name |

## Practice Exercise
Create a simple academy page containing a heading, a button, and a link.

1. Define `--primary-color` inside `:root`.
2. Use it for the heading's text color.
3. Use it for the button's background color.
4. Use it for the link's text color.
5. Change the variable from blue to purple.
6. Verify that all three elements update without changing their individual rules.

## Completion Checklist
- [ ] Explain why CSS variables are useful.
- [ ] Declare a custom property using `--`.
- [ ] Use `:root` for a shared variable.
- [ ] Retrieve a value using `var()`.
- [ ] Explain how changing one variable updates multiple elements.
- [ ] Understand that variables can also be declared within other selectors.
