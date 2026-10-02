# Day 4 — HTML Forms

## 1. Form

A `<form>` is used to collect information from a user.

```html
<form>
    ...
</form>
```

A form can contain different controls such as inputs, textareas, and buttons.

---

## 2. Label

The `<label>` describes a form control.

```html
<label for="name">Name</label>
```

The `for` attribute connects the label to the element whose `id` matches it.

```html
<label for="name">Name</label>
<input type="text" id="name">
```

Think:

```text
for="name"
     ↓
id="name"
```

---

## 3. Input

`<input>` is used to collect user input.

The `type` attribute tells the browser what kind of input the control represents.

### Text

```html
<input type="text" id="name" name="name">
```

### Email

```html
<input type="email" id="email" name="email">
```

The browser can provide basic behavior based on the input type.

---

## 4. `id` and `name`

Both can appear on the same form control, but they serve different purposes.

### `id`

Identifies the HTML element.

```html
<input id="email">
```

The `id` can be referenced by other HTML elements, CSS, and JavaScript.

### `name`

Identifies the form field/data.

```html
<input name="email">
```

Think:

```text
id   → identifies the element
name → identifies the form data
```

It is common for both to have the same value:

```html
<input
    type="email"
    id="email"
    name="email"
>
```

---

## 5. Useful Input Attributes

Some attributes can be added directly to inputs to provide useful browser behavior.

### `placeholder`

Shows a hint when the field is empty.

```html
<input
    type="text"
    placeholder="Enter your name"
>
```

### `required`

Makes the field required.

```html
<input
    type="email"
    required
>
```

The browser will not allow the form to be submitted normally if the required field is empty.

### `minlength` and `maxlength`

Control the minimum and maximum number of characters.

```html
<input
    type="text"
    minlength="3"
    maxlength="30"
>
```

These are useful attributes to know, but they do not require a separate lesson.

---

## 6. Textarea

`<textarea>` is used for longer or multi-line input.

```html
<textarea
    id="message"
    name="message"
></textarea>
```

Useful attributes include:

```html
<textarea
    rows="5"
    placeholder="Write your message"
></textarea>
```

`rows` controls the initial visible height.

---

## 7. Button

A `<button>` can perform an action.

For submitting a form:

```html
<button type="submit">Send Message</button>
```

`type="submit"` tells the browser that the button submits the form.

---

## 8. Fieldset

`<fieldset>` groups related form controls.

```html
<fieldset>
    ...
</fieldset>
```

---

## 9. Legend

`<legend>` gives a name to a `<fieldset>`.

```html
<fieldset>

    <legend>Contact Information</legend>

    ...

</fieldset>
```

Think:

```text
fieldset → group
legend   → name of the group
```

---

## 10. `pattern` — Brief Introduction

The `pattern` attribute can be used when an input must follow a particular format.

Its value uses a regular expression.

Example:

```html
<input
    type="text"
    pattern="[A-Za-z0-9]+"
>
```

This pattern allows one or more letters or numbers.

For now, understand only:

> `pattern` lets us describe an expected format.

Regular expressions will not be studied in depth here.

---

# Complete Example

```html
<form>

    <fieldset>

        <legend>Contact Information</legend>

        <label for="name">Name</label>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
        >

        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
        >

        <label for="message">Message</label>
        <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            rows="5"
            required
        ></textarea>

        <button type="submit">Send Message</button>

    </fieldset>

</form>
```

# Mental Model

```text
form       → collects information

label      → describes a control

for + id   → connects label and control

input      → collects specific/short input

textarea   → collects longer/multi-line input

button     → performs an action

fieldset   → groups related controls

legend     → names the group

name       → identifies form data

required   → makes a field required

placeholder → provides a hint

minlength / maxlength
           → control text length

pattern    → describes an expected input format
```

## Important

Students do **not** need to memorize every HTML form attribute.

The goal is to understand the core form structure and recognize useful attributes when they encounter them.

JavaScript validation, form processing, and backend validation will be introduced later.
