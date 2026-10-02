# Day 3 — HTML

## 1. Semantic Structure

As a page becomes larger, we should organize its content into meaningful regions.

HTML provides semantic elements that describe the purpose of different parts of a page.

---

## 2. `<header>`

The `<header>` element represents introductory content for a page or section.

Example:

```html
<header>
    <h1>My Profile</h1>
    <p>I'm a developer and instructor.</p>
</header>
```

---

## 3. `<nav>`

The `<nav>` element contains important navigation links.

Example:

```html
<nav>
    <a href="index.html">Home</a>
    <a href="contact.html">Contact</a>
</nav>
```

Remember:

`<a>` creates the link.

`<nav>` groups navigation links.

---

## 4. `<main>`

The `<main>` element contains the primary content of the page.

Example:

```html
<main>
    <h2>About Me</h2>
    <p>...</p>
</main>
```

A page normally has one primary `<main>` region.

---

## 5. `<section>`

The `<section>` element represents a meaningful section of related content.

Example:

```html
<section>
    <h2>My Skills</h2>

    <ul>
        <li>C</li>
        <li>C++</li>
        <li>Java</li>
    </ul>
</section>
```

A section normally has a heading that describes its content.

---

## 6. `<footer>`

The `<footer>` element contains information belonging to the bottom of a page or section.

Example:

```html
<footer>
    <p>© 2026 Mohammed Daniyal</p>
</footer>
```

---

## 7. `<div>`

`<div>` is a generic container.

Use a semantic element when one describes the purpose of the content.

Use `<div>` when no suitable semantic element fits and you simply need a container.

Example:

```html
<div>
    <p>Some content</p>
</div>
```

---

## 8. Link vs Button

A link is used when the user needs to **go somewhere**.

```html
<a href="contact.html">Contact Me</a>
```

A button is used when the user needs to **perform an action**.

```html
<button>Follow Me</button>
```

The button does not need JavaScript yet. We are only learning the semantic difference.

---

## Basic Page Structure

A simple page can be organized like this:

```html
<body>

    <header>
        ...
    </header>

    <nav>
        ...
    </nav>

    <main>

        <section>
            ...
        </section>

        <section>
            ...
        </section>

    </main>

    <footer>
        ...
    </footer>

</body>
```

## Remember

**HTML elements should describe what the content means, not how it should look.**

`header` → introductory region

`nav` → navigation

`main` → primary content

`section` → meaningful content section

`footer` → footer information

`div` → generic container

`a` → goes somewhere

`button` → does something
