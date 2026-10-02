# Day 1 — HTML Basics

## 1. HTML Document

An HTML document is a file containing HTML code that describes the structure and content of a web page.

HTML files normally use the `.html` extension.

---

## 2. `<!DOCTYPE html>`

Declares that the document is an HTML document and tells the browser to use the modern HTML standard.

---

## 3. `<html>`

The root element of an HTML document.

All other HTML elements are placed inside it.

Example:

```html
<html>
    ...
</html>
```

---

## 4. `<head>`

Contains information about the HTML document that is generally not displayed as the main page content.

Examples:

* Page title
* Character encoding
* Metadata

---

## 5. `<meta charset="UTF-8">`

Specifies the character encoding used by the document.

UTF-8 allows the page to correctly represent a large range of characters and symbols.

---

## 6. `<title>`

Defines the title of the web page, usually displayed in the browser tab.

Example:

```html
<title>My Profile</title>
```

---

## 7. `<body>`

Contains the actual content of the web page that is displayed to the user.

Example:

```html
<body>
    <h1>Hello</h1>
    <p>Welcome to my website.</p>
</body>
```

---

## 8. Headings

HTML provides six heading levels:

```html
<h1>
<h2>
<h3>
<h4>
<h5>
<h6>
```

`<h1>` represents the highest-level heading and `<h6>` the lowest-level heading.

Headings should be used according to the structure and importance of the content, not simply to make text bigger or smaller.

---

## 9. Paragraph

The `<p>` element represents a paragraph of text.

Example:

```html
<p>
    I am a programming instructor and developer.
</p>
```

---

## 10. Nesting

Putting one HTML element inside another element is called nesting.

Example:

```html
<body>
    <h1>My Profile</h1>

    <p>
        Welcome to my profile.
    </p>
</body>
```

Here, `<h1>` and `<p>` are nested inside `<body>`.

---

## 11. Attributes

Attributes provide additional information or configuration for an HTML element.

Example:

```html
<html lang="en">
```

Here:

```text
lang  → attribute
"en"  → attribute value
```

---

## 12. Opening and Closing Tags

Most HTML elements have an opening tag and a closing tag.

Example:

```html
<p>Hello World</p>
```

```text
<p>          → opening tag
Hello World  → content
</p>         → closing tag
```

Together, they form an HTML element.

---

## 13. Basic HTML Structure

```html
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>My Profile</title>
</head>

<body>

    <h1>My Profile</h1>

    <p>
        I am a programming instructor and developer.
    </p>

</body>

</html>
```

### Mental Model

```text
HTML Document
│
├── <head>
│   ├── document information
│   └── title / metadata
│
└── <body>
    └── visible page content
```

### Remember

```text
HTML → Structure and Content
CSS  → Appearance and Layout
JS   → Behavior and Interactivity
```
