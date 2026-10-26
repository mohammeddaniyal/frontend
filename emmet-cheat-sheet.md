# Emmet Cheatsheet — Creating HTML from Scratch

## 1. Basic Emmet

### Example 1: Create an HTML element

**Problem:** You want to create an empty heading.

**Solution:** Type the tag name. Emmet automatically generates the opening and closing tags.

**Abbreviation:**
```text
h1
```

**Result:**
```html
<h1></h1>
```

### Example 2: Add a class

**Problem:** You want to create a `div` with the class `container`.

**Solution:** Use `.` followed by the class name. The dot represents a class.

**Abbreviation:**
```text
div.container
```

**Result:**
```html
<div class="container"></div>
```

### Example 3: Add an ID

**Problem:** You want to create a `div` with the ID `main`.

**Solution:** Use `#` followed by the ID name. The hash represents an ID.

**Abbreviation:**
```text
div#main
```

**Result:**
```html
<div id="main"></div>
```

### Example 4: Add text inside an element

**Problem:** You want to create a heading containing `Code Impact Academy`.

**Solution:** Use `{}` to insert text inside an element.

**Abbreviation:**
```text
h1{Code Impact Academy}
```

**Result:**
```html
<h1>Code Impact Academy</h1>
```

## 2. Combining Elements

### Example 5: Create a child element

**Problem:** You want a paragraph inside a `div`.

**Solution:** Use `>` to create a child element inside its parent.

**Abbreviation:**
```text
div>p
```

**Result:**
```html
<div>
    <p></p>
</div>
```

### Example 6: Create sibling elements

**Problem:** You want a heading followed by a paragraph at the same level.

**Solution:** Use `+` to create sibling elements.

**Abbreviation:**
```text
h1+p
```

**Result:**
```html
<h1></h1>
<p></p>
```

### Example 7: Repeat elements

**Problem:** You want to create three `div` elements with the same class.

**Solution:** Use `*` followed by the number of repetitions.

**Abbreviation:**
```text
div.box*3
```

**Result:**
```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

### Example 8: Repeat with numbered text

**Problem:** You want to create three boxes labelled Box 1, Box 2, and Box 3.

**Solution:** Use `$` as an automatic numbering placeholder. When combined with `*3`, it numbers each repeated element.

**Abbreviation:**
```text
div.box{Box $}*3
```

**Result:**
```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>
```

### Example 9: Add HTML attributes

**Problem:** You want to create an image with a source and alternative text.

**Solution:** Use `[]` to specify attributes such as `src` and `alt`.

**Abbreviation:**
```text
img[src="photo.jpg"][alt="Student photo"]
```

**Result:**
```html
<img src="photo.jpg" alt="Student photo">
```

### Example 10: Group elements

**Problem:** You want a heading and paragraph inside a `div`, followed by a button outside that `div`.

**Solution:** Use `()` to group elements so that the child relationship applies to the intended group.

**Abbreviation:**
```text
div>(h2+p)+button
```

**Result:**
```html
<div>
    <h2></h2>
    <p></p>
</div>
<button></button>
```

## 3. Useful HTML Shortcuts

### Example 11: Generate the HTML boilerplate

**Problem:** You want the standard HTML document structure without typing it manually.

**Solution:** Use `!` to generate the HTML boilerplate.

**Abbreviation:**
```text
!
```

**Result:** A complete HTML document containing `DOCTYPE`, `html`, `head`, `meta`, `title`, and `body`.

### Example 12: Add a CSS stylesheet

**Problem:** You want to link `style.css` to your HTML file.

**Solution:** Use the built-in Emmet abbreviation `link:css`.

**Abbreviation:**
```text
link:css
```

**Result:**
```html
<link rel="stylesheet" href="style.css">
```

### Example 13: Add JavaScript

**Problem:** You want to link an external JavaScript file.

**Solution:** Use `script:src` to generate a script element with a `src` attribute.

**Abbreviation:**
```text
script:src
```

**Result:** A script tag with an empty `src` value for you to fill in.

### Example 14: Generate dummy text

**Problem:** You want placeholder text to test your webpage layout.

**Solution:** Use `lorem` followed by a number to generate approximately that many words.

**Abbreviation:**
```text
lorem20
```

**Result:** Approximately 20 words of Lorem Ipsum placeholder text.

### Example 15: Create a list

**Problem:** You want an unordered list containing five empty list items.

**Solution:** Use `>` to nest `li` inside `ul`, and `*5` to repeat the list item five times.

**Abbreviation:**
```text
ul>li*5
```

**Result:**
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

## 4. Build a Complete Structure

### Example 16: Create a course section

**Problem:** You want a container with a heading and a paragraph inside a section.

**Solution:** Combine `.` for the class, `>` for nesting, `+` for siblings, and `{}` for text.

**Abbreviation:**
```text
div.container>h1{Our Courses}+section>h2{Available Courses}+p{Learn programming}
```

**Result:**
```html
<div class="container">
    <h1>Our Courses</h1>
    <section>
        <h2>Available Courses</h2>
        <p>Learn programming</p>
    </section>
</div>
```

## 5. Quick Symbol Reference

| Symbol | Purpose |
|---|---|
| `.` | Add a class |
| `#` | Add an ID |
| `>` | Create a child |
| `+` | Create a sibling |
| `*` | Repeat elements |
| `$` | Automatic numbering |
| `{}` | Insert text |
| `[]` | Add attributes |
| `()` | Group elements |

**Remember:** Type the abbreviation in an HTML file and press `Tab` or select the Emmet suggestion to expand it.