# Code Impact Academy
## JavaScript — Day 06: Arrays

### Learning objectives

By the end of this lesson, you should be able to:

- Create arrays and store multiple values in them.
- Access and update array elements using indexes.
- Find the number of elements using `length`.
- Add and remove elements using common array methods.
- Iterate through arrays using loops.
- Use `forEach()`, `map()`, `filter()`, and `find()`.

> You already know the basic concept of arrays from C and C++. This lesson focuses on JavaScript array syntax and its built-in methods.

---

## 1. What is an array?

An array is a data structure used to store multiple values in a single variable.

Without an array, storing several student names would require separate variables:

```javascript
let student1 = "Aman";
let student2 = "Sara";
let student3 = "Rahul";
```

With an array, we can store them together:

```javascript
let students = ["Aman", "Sara", "Rahul"];
```

An array can hold multiple values and lets us access each value using its index.

---

## 2. Creating an array

In JavaScript, arrays are commonly created using square brackets `[]`.

```javascript
let numbers = [10, 20, 30, 40, 50];

let names = ["Aman", "Sara", "Rahul"];

let mixed = [10, "Hello", true, 25.5];
```

JavaScript arrays can contain values of different data types. In practice, arrays are often used to store values of the same kind.

An empty array can be created like this:

```javascript
let items = [];
```

---

## 3. Accessing array elements

Array indexes start from `0`, not `1`.

```javascript
let languages = ["C", "C++", "JavaScript", "Java"];

console.log(languages[0]); // C
console.log(languages[1]); // C++
console.log(languages[2]); // JavaScript
```

For an array with four elements, the valid indexes are `0`, `1`, `2`, and `3`.

### Updating an element

Use its index to replace an existing value:

```javascript
let colors = ["Red", "Green", "Blue"];

colors[1] = "Yellow";

console.log(colors);
```

Output:

```text
["Red", "Yellow", "Blue"]
```

### Accessing an index that does not exist

```javascript
let names = ["Aman", "Sara"];

console.log(names[5]);
```

Output:

```text
undefined
```

JavaScript returns `undefined` when you read an array index that has no element.

---

## 4. The `length` property

The `length` property tells us the number of elements in an array.

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.length);
```

Output:

```text
4
```

The last element is at index `length - 1`.

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers[numbers.length - 1]);
```

Output:

```text
40
```

---

## 5. Adding and removing elements

JavaScript provides built-in methods to add and remove array elements.

### `push()`

Adds one or more elements to the **end** of an array.

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

### `pop()`

Removes the **last** element from an array and returns the removed value.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

let removed = fruits.pop();

console.log(removed); // Mango
console.log(fruits);  // ["Apple", "Banana"]
```

### `unshift()`

Adds one or more elements to the **beginning** of an array.

```javascript
let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

### `shift()`

Removes the **first** element from an array and returns the removed value.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

let removed = fruits.shift();

console.log(removed); // Apple
console.log(fruits);  // ["Banana", "Mango"]
```

### Quick comparison

| Method | Action | Position |
|---|---|---|
| `push()` | Adds element(s) | End |
| `pop()` | Removes an element | End |
| `unshift()` | Adds element(s) | Beginning |
| `shift()` | Removes an element | Beginning |

These methods modify the original array.

---

## 6. Iterating through an array

Iterating means accessing array elements one by one.

### Using a traditional `for` loop

```javascript
let languages = ["C", "C++", "JavaScript"];

for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
```

### Using `for...of`

```javascript
let languages = ["C", "C++", "JavaScript"];

for (let language of languages) {
    console.log(language);
}
```

Use a traditional `for` loop when you need the index. Use `for...of` when you simply need each value.

---

## 7. The `forEach()` method

`forEach()` executes a provided function once for each array element.

```javascript
let numbers = [10, 20, 30];

numbers.forEach(function (number) {
    console.log(number);
});
```

Output:

```text
10
20
30
```

The function passed to `forEach()` is called a **callback function**. It runs for each element.

You can also use an arrow function:

```javascript
let numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number);
});
```

You can receive the current element and its index:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

### Important

`forEach()` is mainly used when you want to perform an action for every element. It does not create and return a new array. Its return value is `undefined`.

---

## 8. The `map()` method

`map()` creates a **new array** by applying a function to every element of the original array.

Example: create a new array containing the squares of numbers.

```javascript
let numbers = [1, 2, 3, 4];

let squares = numbers.map(number => {
    return number * number;
});

console.log(squares);
```

Output:

```text
[1, 4, 9, 16]
```

The original array remains unchanged:

```javascript
console.log(numbers); // [1, 2, 3, 4]
```

A shorter version:

```javascript
let doubles = numbers.map(number => number * 2);

console.log(doubles); // [2, 4, 6, 8]
```

Use `map()` when you want to transform every element and collect the results in a new array.

---

## 9. The `filter()` method

`filter()` creates a new array containing only the elements that pass a condition.

Example: get only the even numbers.

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);
```

Output:

```text
[2, 4, 6]
```

Another example:

```javascript
let ages = [12, 18, 15, 25, 30];

let adults = ages.filter(age => age >= 18);

console.log(adults);
```

Output:

```text
[18, 25, 30]
```

Use `filter()` when you need a new array containing only values that satisfy a condition.

---

## 10. The `find()` method

`find()` returns the **first element** that satisfies a condition.

```javascript
let numbers = [5, 12, 18, 25, 30];

let result = numbers.find(number => number > 15);

console.log(result);
```

Output:

```text
18
```

The first value greater than `15` is `18`, so `find()` returns it. It does not return all matching values.

If no element matches, `find()` returns `undefined`.

### `filter()` vs `find()`

| `filter()` | `find()` |
|---|---|
| Returns a new array. | Returns one matching element. |
| Includes every matching element. | Returns only the first matching element. |
| Returns an empty array if nothing matches. | Returns `undefined` if nothing matches. |

---

## 11. Comparing the array methods

Consider this array:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];
```

| Method | Purpose | Result or behavior |
|---|---|---|
| `forEach()` | Perform an action for each element. | Returns `undefined`. |
| `map()` | Transform every element. | Returns a new array. |
| `filter()` | Keep elements that pass a condition. | Returns a new array. |
| `find()` | Get the first element that passes a condition. | Returns an element or `undefined`. |

### One example using all four

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

// forEach: display each value
numbers.forEach(number => console.log(number));

// map: create a new array of doubled values
let doubled = numbers.map(number => number * 2);

// filter: get even numbers
let even = numbers.filter(number => number % 2 === 0);

// find: get the first number greater than 3
let first = numbers.find(number => number > 3);

console.log(doubled); // [2, 4, 6, 8, 10, 12]
console.log(even);    // [2, 4, 6]
console.log(first);   // 4
```

---

## 12. Common mistakes

### 1. Forgetting that indexes start at zero

```javascript
let names = ["Aman", "Sara", "Rahul"];

console.log(names[3]); // undefined
```

The last valid index is `2`, not `3`.

### 2. Confusing `length` with the last index

For an array with five elements:
- `length` is `5`.
- The last index is `4`.

### 3. Expecting `map()` to modify the original array

```javascript
let numbers = [1, 2, 3];

numbers.map(number => number * 2);

console.log(numbers); // [1, 2, 3]
```

`map()` returns a new array. Store the result if you need it:

```javascript
let doubled = numbers.map(number => number * 2);
```

### 4. Forgetting to return a value in `map()`

```javascript
let numbers = [1, 2, 3];

let result = numbers.map(number => {
    number * 2;
});

console.log(result); // [undefined, undefined, undefined]
```

Use an explicit `return` with a block body, or use an expression body:

```javascript
let result = numbers.map(number => {
    return number * 2;
});
```

### 5. Thinking `find()` returns all matches

`find()` returns only the first matching element. Use `filter()` to get all matching elements.

### 6. Thinking `forEach()` returns a new array

`forEach()` performs an action for each element. Use `map()` when you need a transformed array.

---

## 13. Practice exercises

Try solving these without looking at the examples above.

1. Create an array containing five numbers and print each element.
2. Create an array of five student names. Add one name at the end and one at the beginning.
3. Remove the first and last elements from an array using the appropriate methods.
4. Find the sum of all numbers in an array using a loop.
5. Use `map()` to create a new array containing the squares of the original numbers.
6. Use `filter()` to get all even numbers from an array.
7. Use `find()` to get the first number greater than `50`.
8. Use `forEach()` to print each element along with its index.

---

## 14. Quick revision

1. What is an array?
2. How are arrays created in JavaScript?
3. What is the first index of an array?
4. What does the `length` property return?
5. What is the difference between `push()` and `unshift()`?
6. What is the difference between `pop()` and `shift()`?
7. What is the purpose of `forEach()`?
8. How is `map()` different from `forEach()`?
9. What does `filter()` return?
10. What does `find()` return when no element matches?

---

## 15. Homework

1. Create an array of numbers and calculate their sum.
2. Find the largest number in an array.
3. Use `map()` to convert an array of prices into prices with 10% added tax.
4. Use `filter()` to get all numbers divisible by both `2` and `3`.
5. Use `find()` to get the first name in an array that has more than five characters.
6. Create an array of student marks and use `filter()` to get marks greater than or equal to `40`.

---

**End of Day 06 — JavaScript Arrays**

*Code Impact Academy*
