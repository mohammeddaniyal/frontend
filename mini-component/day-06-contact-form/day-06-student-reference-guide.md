# Day 06 — Contact Form
## Student Reference Guide

**Project:** Code Impact Academy  
**Technology:** HTML5 + CSS3  
**Level:** Beginner  
**JavaScript:** Not required  
**Backend:** Not included

---

## 1. What will you build?

You will create a contact/enquiry section for Code Impact Academy.

The design has two main panels:

- **Left panel:** Contact information.
- **Right panel:** A form where visitors can enter their details and select options.

The form will collect different kinds of information, so we will use different HTML controls instead of using a text box for everything.

### What you will learn

By the end, you should be able to:

- Create a form using `<form>`.
- Connect labels and controls using `for` and `id`.
- Use text, email, telephone, number, and date inputs.
- Create radio button groups and checkboxes.
- Create dropdowns using `<select>` and `<option>`.
- Collect longer messages using `<textarea>`.
- Use `required`, `min`, and `max` for basic browser validation.
- Group related controls with `<fieldset>` and `<legend>`.
- Style form controls and their focus states.
- Arrange the layout with CSS Grid and make it responsive.

---

## 2. Project setup

Create a folder with these two files:

```text
day-06-contact-form/
├── index.html
└── style.css
```

Link the CSS file inside the `<head>` of your HTML:

```html
<link rel="stylesheet" href="style.css">
```

---

## 3. Understand the page structure

The page contains three areas:

1. **Section heading** — a small label, main heading, and short description.
2. **Contact information panel** — email, phone, academy location, and a short message.
3. **Contact form** — fields for name, email, phone, age, joining date, course, batch, learning mode, and message.

The contact details in this practice project are placeholders. Replace them with the academy's real contact details before publishing.

---

## 4. Build the HTML

Save this code in `index.html`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Impact | Contact Us</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <main class="contact-section">

        <!-- Section Heading -->
        <div class="section-header">
            <span class="section-label">GET IN TOUCH</span>

            <h1>Let's Start Your Learning Journey</h1>

            <p>
                Have questions about our courses?
                Fill out the form and let us help you choose
                the right learning path.
            </p>
        </div>

        <!-- Contact Layout -->
        <div class="contact-container">

            <!-- Left: Contact Information -->
            <div class="contact-info">

                <h2>Contact Information</h2>

                <p class="info-description">
                    Tell us what you want to learn.
                    Our team can help you find the right course.
                </p>

                <div class="info-item">
                    <span class="info-icon" aria-hidden="true">✉</span>
                    <div>
                        <h3>Email</h3>
                        <p>Get in touch with our team</p>
                    </div>
                </div>

                <div class="info-item">
                    <span class="info-icon" aria-hidden="true">☎</span>
                    <div>
                        <h3>Phone</h3>
                        <p>Talk to us about your learning goals</p>
                    </div>
                </div>

                <div class="info-item">
                    <span class="info-icon" aria-hidden="true">⌖</span>
                    <div>
                        <h3>Visit Us</h3>
                        <p>Code Impact Academy</p>
                    </div>
                </div>

                <div class="info-bottom">
                    We're here to help you take your next step.
                </div>

            </div>

            <!-- Right: Contact Form -->
            <div class="form-container">

                <h2>Send Us a Message</h2>

                <p class="form-description">
                    Fill in your details below.
                </p>

                <form>

                    <!-- Name -->
                    <div class="form-group">
                        <label for="fullname">Full Name</label>

                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Enter your full name"
                            required
                        >
                    </div>

                    <!-- Email and Phone -->
                    <div class="form-row">

                        <div class="form-group">
                            <label for="email">Email Address</label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@email.com"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number</label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone number"
                                required
                            >
                        </div>

                    </div>

                    <!-- Age and Date -->
                    <div class="form-row">

                        <div class="form-group">
                            <label for="age">Age</label>

                            <input
                                type="number"
                                id="age"
                                name="age"
                                min="10"
                                max="100"
                                placeholder="Your age"
                            >
                        </div>

                        <div class="form-group">
                            <label for="joining-date">Preferred Joining Date</label>

                            <input
                                type="date"
                                id="joining-date"
                                name="joining-date"
                            >
                        </div>

                    </div>

                    <!-- Course Dropdown -->
                    <div class="form-group">
                        <label for="course">Select Your Course</label>

                        <select id="course" name="course" required>
                            <option value="" disabled selected>
                                Choose a course
                            </option>

                            <option value="c">C Programming</option>
                            <option value="cpp">C++ Programming</option>
                            <option value="java">Java Programming</option>
                            <option value="frontend">Frontend Development</option>
                            <option value="python">Python with Django</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <!-- Radio Buttons -->
                    <fieldset class="form-group">
                        <legend>Preferred Batch</legend>

                        <div class="choice-group">
                            <label class="choice">
                                <input
                                    type="radio"
                                    name="batch"
                                    value="morning"
                                    required
                                >
                                Morning
                            </label>

                            <label class="choice">
                                <input
                                    type="radio"
                                    name="batch"
                                    value="afternoon"
                                >
                                Afternoon
                            </label>

                            <label class="choice">
                                <input
                                    type="radio"
                                    name="batch"
                                    value="evening"
                                >
                                Evening
                            </label>
                        </div>
                    </fieldset>

                    <!-- Checkboxes -->
                    <fieldset class="form-group">
                        <legend>Preferred Learning Mode</legend>

                        <div class="choice-group">
                            <label class="choice">
                                <input
                                    type="checkbox"
                                    name="learning-mode"
                                    value="offline"
                                >
                                Offline
                            </label>

                            <label class="choice">
                                <input
                                    type="checkbox"
                                    name="learning-mode"
                                    value="online"
                                >
                                Online
                            </label>
                        </div>
                    </fieldset>

                    <!-- Message -->
                    <div class="form-group">
                        <label for="message">Your Message</label>

                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Tell us what you want to learn..."
                        ></textarea>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="submit-btn">
                        Submit Enquiry
                        <span aria-hidden="true">&rarr;</span>
                    </button>

                    <p class="form-note">
                        Please check your details before submitting.
                    </p>

                </form>

            </div>

        </div>

    </main>

</body>
</html>
```

---

## 5. Understand the important form elements

### A. What is a form?

A form is a section of a webpage used to collect information from a user.

```html
<form>
    <!-- Form controls go here -->
</form>
```

For example, a website may use a form to collect a student's name, email address, selected course, and enquiry.

A form can send information to a server when it is connected to a backend. **Our lesson does not connect the form to a server.**

### B. Labels and inputs

```html
<label for="fullname">Full Name</label>

<input
    type="text"
    id="fullname"
    name="fullname"
    placeholder="Enter your full name"
    required
>
```

| Part | Purpose |
|---|---|
| `<label>` | Describes the form control |
| `for` | Connects the label to an element's `id` |
| `type` | Defines what kind of input it is |
| `id` | Uniquely identifies the element on the page |
| `name` | Identifies the field when form data is submitted |
| `placeholder` | Shows a hint while the field is empty |
| `required` | Makes the field mandatory for browser validation |

**Important:** The value of `for` must exactly match the input's `id`.

Try clicking the words **Full Name** in your browser. The matching input should receive focus.

### C. Common input types

Different information needs different input types.

| Input type | Example use |
|---|---|
| `text` | Name |
| `email` | Email address |
| `tel` | Telephone number |
| `number` | Age |
| `date` | Preferred joining date |

Examples:

```html
<input type="text" name="fullname">
<input type="email" name="email">
<input type="tel" name="phone">
<input type="number" name="age" min="10" max="100">
<input type="date" name="joining-date">
```

Remember:

- `type="email"` checks whether the entered text resembles an email address. It does not prove that the email account exists.
- `type="tel"` is intended for phone numbers, but it does not automatically enforce one particular phone-number format.
- `min` and `max` set the allowed numeric range in this example.

### D. Radio buttons — choose one

Use radio buttons when the user should select **one option from a group**.

```html
<label>
    <input type="radio" name="batch" value="morning">
    Morning
</label>

<label>
    <input type="radio" name="batch" value="evening">
    Evening
</label>
```

Both radio buttons have the same `name`, so the browser treats them as one group.

**Real-life example:** A student chooses a preferred batch: morning or evening. They choose one, not both.

### E. Checkboxes — choose multiple

Use checkboxes when the user can select more than one option.

```html
<label>
    <input type="checkbox" name="learning-mode" value="online">
    Online
</label>

<label>
    <input type="checkbox" name="learning-mode" value="offline">
    Offline
</label>
```

**Real-life example:** A student may select more than one learning preference.

Radio buttons and checkboxes are not interchangeable:
- Radio buttons: one choice from a group.
- Checkboxes: zero, one, or multiple choices.

### F. Dropdown — choose from a list

```html
<label for="course">Select Course</label>

<select id="course" name="course">
    <option value="">Choose a course</option>
    <option value="c">C Programming</option>
    <option value="java">Java Programming</option>
</select>
```

- `<select>` creates the dropdown.
- `<option>` creates an option inside it.
- `value` is the value associated with that option when form data is submitted.

The text the user sees and the option's `value` do not have to be identical.

In our main form, the first option is an empty, disabled placeholder. The `<select>` is also `required`, so the user must choose a real course option.

### G. Textarea — longer messages

```html
<label for="message">Your Message</label>

<textarea
    id="message"
    name="message"
    rows="4"
    placeholder="Write your message..."
></textarea>
```

Use `<textarea>` when the user needs to write multiple lines, such as a question or enquiry.

- `rows` suggests how many text lines should be visible.
- `placeholder` gives the user a hint.
- CSS can control its width, minimum height, and resizing.

### H. Submit button

```html
<button type="submit">Submit Enquiry</button>
```

`type="submit"` tells the browser to submit the form.

In this project, no backend or form-processing code is connected. The browser can perform basic validation, but the enquiry is not stored or delivered to the academy.

---

## 6. Group related controls with fieldset and legend

Radio buttons and checkboxes often belong to a question or group.

```html
<fieldset>
    <legend>Preferred Batch</legend>

    <!-- Radio button options go here -->
</fieldset>
```

- `<fieldset>` groups related form controls.
- `<legend>` gives the group a heading.

This also gives assistive technologies useful context about the group.

---

## 7. Style the page with CSS

Save this code in `style.css`.

```css
/* 1. Basic Reset */
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

/* 2. Main Section */
.contact-section {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 0;
}

/* 3. Section Heading */
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
    max-width: 600px;
    margin: 0 auto;
    color: #687780;
    font-size: 16px;
}

/* 4. Contact Layout */
.contact-container {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 30px;
    align-items: stretch;
}

/* 5. Contact Information */
.contact-info {
    background-color: #1769ff;
    color: #ffffff;
    padding: 40px;
    border-radius: 14px;

    display: flex;
    flex-direction: column;
}

.contact-info h2 {
    font-size: 27px;
    margin-bottom: 12px;
}

.info-description {
    color: #e3edff;
    margin-bottom: 40px;
    font-size: 15px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 30px;
}

.info-icon {
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    font-size: 21px;
}

.info-item h3 {
    font-size: 16px;
    margin-bottom: 3px;
}

.info-item p {
    color: #e3edff;
    font-size: 13px;
}

.info-bottom {
    margin-top: auto;
    padding-top: 35px;
    color: #e3edff;
    font-size: 14px;
}

/* 6. Form Container */
.form-container {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 14px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
}

.form-container h2 {
    font-size: 25px;
    margin-bottom: 5px;
}

.form-description {
    color: #687780;
    font-size: 14px;
    margin-bottom: 28px;
}

/* 7. Form Groups */
.form-group {
    margin-bottom: 22px;
    min-width: 0;
}

.form-group label,
.form-group legend {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 9px;
    color: #263238;
}

.form-group legend {
    padding: 0;
}

/* 8. Input, Select, Textarea */
.form-group input:not([type="radio"]):not([type="checkbox"]),
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 13px 14px;
    border: 1px solid #dce2eb;
    border-radius: 7px;
    font-family: inherit;
    font-size: 14px;
    color: #263238;
    background-color: #ffffff;
    outline: none;

    transition: border-color 0.25s ease,
                box-shadow 0.25s ease;
}

.form-group textarea {
    resize: vertical;
    min-height: 110px;
}

/* Input Focus */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: #1769ff;
    box-shadow: 0 0 0 3px rgba(23, 105, 255, 0.12);
}

/* Placeholder */
.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #9aa5b1;
}

/* 9. Two Column Form Rows */
.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}

/* 10. Radio & Checkbox */
fieldset.form-group {
    border: none;
    padding: 0;
}

.choice-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
}

.choice {
    display: inline-flex !important;
    align-items: center;
    gap: 8px;
    font-size: 14px !important;
    font-weight: normal !important;
    cursor: pointer;
    margin-bottom: 0 !important;
}

.choice input {
    width: 16px;
    height: 16px;
    accent-color: #1769ff;
    cursor: pointer;
}

/* 11. Submit Button */
.submit-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #1769ff;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;

    transition: background-color 0.25s ease,
                transform 0.25s ease;
}

.submit-btn:hover {
    background-color: #0d4fc4;
    transform: translateY(-2px);
}

.form-note {
    text-align: center;
    margin-top: 14px;
    font-size: 12px;
    color: #89939e;
}

/* 12. Responsive Design */
@media (max-width: 850px) {
    .contact-container {
        grid-template-columns: 1fr;
    }

    .contact-info {
        min-height: 350px;
    }
}

/* 13. Mobile Design */
@media (max-width: 600px) {
    .contact-section {
        padding: 50px 0;
    }

    .section-header h1 {
        font-size: 30px;
    }

    .section-header p {
        font-size: 14px;
    }

    .contact-info,
    .form-container {
        padding: 25px;
    }

    .contact-info h2 {
        font-size: 23px;
    }

    .form-container h2 {
        font-size: 22px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .choice-group {
        gap: 14px;
    }
}
```

---

## 8. Important CSS concepts

### A. CSS Grid for the two panels

**Problem:** We want the contact information and the form next to each other. The form should receive slightly more space.

```css
.contact-container {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 30px;
}
```

- `display: grid` makes the element a grid container.
- `grid-template-columns` defines the columns.
- `0.85fr` and `1.15fr` divide the available space proportionally.
- `gap` creates space between the columns.

Try changing the fraction values and observe how the panels resize.

### B. Why exclude radio buttons and checkboxes?

**Problem:** Text inputs, dropdowns, and textareas should have a consistent full-width style. Radio buttons and checkboxes should stay small.

```css
.form-group input:not([type="radio"]):not([type="checkbox"]),
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 13px 14px;
}
```

`:not()` excludes matching elements from a CSS selector. Here, radio buttons and checkboxes are excluded from the large input styling.

### C. Focus state

**Problem:** A user should be able to identify which field they are currently using.

```css
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: #1769ff;
    box-shadow: 0 0 0 3px rgba(23, 105, 255, 0.12);
}
```

`:focus` applies styles when a control receives focus, for example when the user clicks it or navigates to it using the keyboard.

### D. `accent-color`

```css
.choice input {
    accent-color: #1769ff;
}
```

This changes the accent color of supported native controls, such as radio buttons and checkboxes.

### E. `resize`

```css
textarea {
    resize: vertical;
}
```

This allows the user to resize the textarea vertically, but not horizontally.

### F. Responsive layout

At narrower screen sizes, the two main panels become one column:

```css
@media (max-width: 850px) {
    .contact-container {
        grid-template-columns: 1fr;
    }
}
```

On small mobile screens, paired form fields also stack:

```css
@media (max-width: 600px) {
    .form-row {
        grid-template-columns: 1fr;
    }
}
```

---

## 9. Understand browser validation

Our form uses built-in browser validation.

### `required`

```html
<input type="text" required>
```

The browser prevents normal form submission while this required field is empty.

### Email format

```html
<input type="email" required>
```

The browser checks whether the value resembles an email address. It cannot confirm that the email account actually exists.

### Number range

```html
<input type="number" min="10" max="100">
```

The browser can check whether the number is within the specified range.

### Dropdown validation

The course dropdown starts with an empty, disabled placeholder option. Because the dropdown is `required`, the user must select a real course.

### Important limitation

This is a front-end practice form only:

- It does not email the enquiry.
- It does not save information to a database.
- It does not show custom success or error messages.
- Browser validation does not replace server-side validation.

Later, when you learn backend development, you can connect a form to a server and process the submitted information.

---

## 10. Suggested build order

Do not try to understand every control at once. Build the form in small steps.

1. Create the section heading and the two main panels.
2. Add a basic form with only name, email, and a submit button.
3. Connect labels and inputs using `for` and `id`.
4. Add `name`, `value`, `placeholder`, and `required` where appropriate.
5. Add telephone, number, and date inputs.
6. Add the course dropdown.
7. Add radio buttons for the preferred batch.
8. Add checkboxes for the preferred learning mode.
9. Add the message textarea and group related choices with fieldset and legend.
10. Style the layout and form controls.
11. Add focus and hover states.
12. Add responsive media queries.
13. Test the browser's built-in validation.

---

## 11. Common mistakes

| Mistake | What to check |
|---|---|
| Clicking a label does not focus its input | Check that `for` and `id` match exactly |
| Form field has no useful key | Add a meaningful `name` |
| Multiple radio options can be selected | Give radio buttons in the same group the same `name` |
| User cannot select multiple choices | Use checkboxes instead of radio buttons |
| Dropdown placeholder is accepted | Give the placeholder an empty `value` and use `required` on the select |
| Radio buttons become very large | Exclude radio and checkbox types from the general input selector |
| Form fields overflow their columns | Check `box-sizing`, `min-width`, and grid columns |
| Textarea can resize horizontally | Use `resize: vertical` |
| Submit button does not deliver an enquiry | Remember that no backend or form action is connected |

---

## 12. Practice tasks

### Task 1 — Add a gender selection field

Create a radio button group with suitable options. All options in the group must share the same `name`.

### Task 2 — Add programming interests

Create checkboxes for:

- Web Development
- App Development
- Data Structures
- Artificial Intelligence

The user should be able to select more than one.

### Task 3 — Add an experience dropdown

Ask about the student's programming experience:

- No experience
- Beginner
- Intermediate
- Advanced

### Task 4 — Add validation

Use suitable input types and try:

- `required`
- `min`
- `max`

Test what happens when you submit the form with missing or invalid values.

### Task 5 — Customize the design

Change the form's colors, borders, spacing, and button hover effect while keeping the page responsive.

---

## 13. Optional challenges

These are extra practice tasks, not required for the main lesson:

- Add a password input and discuss when a password field is appropriate.
- Add a URL input for a portfolio link.
- Add a file input for uploading a resume.
- Add `maxlength` to the message field.
- Explore the `pattern` attribute.
- Add a checkbox for accepting terms and conditions.
- Explore the `:focus-within` pseudo-class on a form group.

Do not add JavaScript or a CSS framework for this lesson.

---

## 14. Connect this component to the earlier website

When you later combine the components into the complete Code Impact website:

- Reuse the navbar from Day 01.
- Keep the shared Code Impact colors and typography.
- Link the hero section's Contact Us button to the contact section.
- Link course enquiry actions from course cards or the comparison table to this section.
- Replace placeholder contact details with the academy's real details.

For this lesson, focus on understanding forms. You do not need to rebuild the navbar, hero, cards, or comparison table.

---

## 15. Final checklist

- [ ] The controls are inside a `<form>` element.
- [ ] Every form control has a meaningful label.
- [ ] Label `for` values match the corresponding control `id`.
- [ ] Inputs have meaningful `name` attributes.
- [ ] Suitable input types are used.
- [ ] Radio buttons in a group share the same `name`.
- [ ] Checkboxes allow multiple selections.
- [ ] The dropdown has meaningful options.
- [ ] The message uses a `<textarea>`.
- [ ] Required fields use `required`.
- [ ] Related choices are grouped with `<fieldset>` and `<legend>`.
- [ ] Focus styles are visible.
- [ ] The submit button has a hover state.
- [ ] The layout stacks correctly on smaller screens.
- [ ] You understand that no backend submission is connected.

---

## 16. Quick revision questions

1. What is the purpose of an HTML form?
2. What is the difference between `id` and `name`?
3. Why do we connect a label to an input?
4. What is the difference between `type="text"` and `type="email"`?
5. What is `type="tel"` used for?
6. What does `required` do?
7. What are `min` and `max` used for?
8. What is the difference between radio buttons and checkboxes?
9. Why should radio buttons in one group share the same `name`?
10. What are `<select>` and `<option>` used for?
11. What is the purpose of an option's `value`?
12. When should we use `<textarea>`?
13. What are `<fieldset>` and `<legend>` used for?
14. What does `:focus` do?
15. What does `accent-color` change?
16. Why do we use CSS Grid in this layout?
17. Does an HTML form automatically save information to a database?

---

**Key takeaway:** Choose an HTML control based on the kind of information you need to collect. A name, date, single choice, multiple choices, and a long message do not all need the same control.
