# Day 14 — CSS Transitions and Transforms

## Part 1: CSS Transitions

### The Problem
A button's background may change from blue to green instantly when the user hovers over it. A **transition** makes supported property changes happen gradually.

### Without a Transition

```css
button {
    background-color: blue;
    color: white;
}

button:hover {
    background-color: green;
}
```

The color changes immediately when the pointer enters or leaves the button.

### Add a Transition

```css
button {
    background-color: blue;
    color: white;
    transition: background-color 0.3s;
}

button:hover {
    background-color: green;
}
```

- `transition` controls the gradual effect.
- `background-color` is the property being transitioned.
- `0.3s` is the duration: 0.3 seconds.

Put the transition in the normal button rule when you want smooth changes both when the pointer enters and when it leaves.

### Experiment with Duration

```css
transition: background-color 0.1s;
transition: background-color 1s;
transition: background-color 2s;
```

A longer duration takes more time to complete.

**Remember:** `:hover` defines *when* the style changes. `transition` defines *how smoothly* the change happens.

---

## Part 2: CSS Transform

### What Is `transform`?
The `transform` property changes an element's visual size, position, or orientation.

### Example: A Course Card

```html
<div class="card">
    <h2>Java Programming</h2>
    <p>Learn Java from the basics.</p>
</div>
```

```css
.card {
    background-color: lightblue;
    padding: 20px;
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}
```

When the pointer moves over the card, it grows slightly. The transition makes the change smooth.

### Common Transform Functions

**`scale()` — change visual size**

```css
transform: scale(1.05);
```

- `scale(1)` is the original size.
- `scale(1.05)` makes the element 5% larger.
- `scale(0.9)` makes the element 90% of its original size.

**`translateX()` — move horizontally**

```css
transform: translateX(20px);
```

Moves the element 20 pixels to the right visually. A negative value such as `translateX(-20px)` moves it left.

**`rotate()` — rotate the element**

```css
transform: rotate(5deg);
```

Rotates the element by 5 degrees.

A new `transform` declaration replaces the previous transform rather than adding to it. Multiple transform functions can be combined in one declaration.

### Transition vs Transform

| Property | Job |
|---|---|
| `transform` | Changes visual size, position, or rotation |
| `transition` | Makes supported changes happen gradually |

**Transform decides what changes. Transition decides how smoothly it changes.**

### Important Note About Layout
A transform changes how an element is rendered, but it does not change the space originally reserved for it in normal document flow. A scaled-up card may overlap neighboring elements.

## Practice Exercises
1. Make a button change from blue to green on hover with a `0.5s` transition.
2. Change the duration to `1s` and compare.
3. Create a course card that grows on hover using `scale(1.05)`.
4. Test `translateX(10px)` and `rotate(3deg)` separately.
5. Keep `transition: transform 0.3s` in the normal card rule.

## Completion Checklist
- [ ] Use `transition` and identify its property and duration.
- [ ] Explain why the transition belongs in the normal rule.
- [ ] Use `scale()`, `translateX()`, and `rotate()`.
- [ ] Explain the difference between transition and transform.
- [ ] Explain why a transformed element can overlap neighboring content.
