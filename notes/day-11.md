# Day 11 — CSS Pseudo-Classes

## What Is a Pseudo-Class?
A **pseudo-class** styles an HTML element based on its state or position.

```css
selector:pseudo-class {
    property: value;
}
```

## `:hover`
Applies styles while the mouse pointer is over an element.

```css
button { background-color: lightgray; color: black; }
button:hover { background-color: blue; color: white; }
```

## `:active`
Applies styles while an element is being activated, such as while a button is pressed.

```css
button:active { background-color: red; }
```

## `:focus`
Applies styles when an element has focus, such as an input selected by the user.

```css
input { padding: 10px; border: 2px solid gray; }
input:focus { border-color: blue; outline: 3px solid lightblue; }
```

A **border** is part of the element's box and can affect its size. An **outline** is drawn outside the border and does not take up layout space. Keep a clearly visible focus indicator for keyboard users.

## `:first-child` and `:last-child`
Select an element only when it is the first or last element child of its parent.

```css
p:first-child { color: green; }
p:last-child { color: red; }
```

These do not simply mean the first or last paragraph on the entire page. The element must match the position inside its parent.

## `:nth-child()`
Selects an element according to its position among its parent's element children.

```css
p:nth-child(2) { color: blue; }
p:nth-child(even) { background-color: lightgray; }
p:nth-child(odd) { background-color: lightyellow; }
```

Remember: `:nth-child()` counts **all element children**, not only paragraphs. The selected element must also match the selector.

## Quick Revision

| Pseudo-class | Meaning |
|---|---|
| `:hover` | Pointer is over the element |
| `:active` | Element is being activated |
| `:focus` | Element has focus |
| `:first-child` | Element is the first child |
| `:last-child` | Element is the last child |
| `:nth-child(n)` | Matches a child position or pattern |

## Practice Exercise
Create a list of four courses and a button:
1. Make the button blue normally, green on hover, and red while pressed.
2. Add a visible focus outline to the button.
3. Make the first course green and the last course red.
4. Make the second course blue.
5. Give even-numbered course items a light-gray background.

## Completion Checklist
- [ ] Use `:hover`, `:active`, and `:focus`.
- [ ] Explain border vs outline.
- [ ] Use `:first-child` and `:last-child`.
- [ ] Use `:nth-child()` with positions, `even`, and `odd`.
