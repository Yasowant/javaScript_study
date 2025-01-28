# Understanding the `this` Keyword and the `new` Keyword in JavaScript

## The `this` Keyword

### 1. `this` in the Global Scope
- In the global context (outside of any function), `this` refers to the global object.
  - In a browser, it points to the `window` object.

```javascript
console.log(this); // Outputs: `window` in browsers, or `global` in Node.js.
```

### 2. `this` in a Function (Non-Strict Mode)
- When a regular function is called, `this` refers to the global object.

```javascript
function show() {
    console.log(this);
}
show(); // Outputs: `window` in browsers.
```

### 3. `this` in Strict Mode
- In strict mode, `this` is `undefined` when a regular function is called.

```javascript
"use strict";
function show() {
    console.log(this);
}
show(); // Outputs: `undefined`.
```

### 4. `this` in an Object Method
- When a function is called as a method of an object, `this` refers to the object.

```javascript
const obj = {
    name: "John",
    greet: function () {
        console.log(this.name);
    }
};
obj.greet(); // Outputs: "John".
```

### 5. `this` in a Constructor
- When a function is used as a constructor with `new`, `this` refers to the newly created object.

```javascript
function Person(name) {
    this.name = name;
}
const person = new Person("Alice");
console.log(person.name); // Outputs: "Alice".
```

### 6. `this` in an Arrow Function
- Arrow functions do not have their own `this`.
- Instead, `this` is inherited from the enclosing (lexical) scope.

```javascript
const obj = {
    name: "Bob",
    greet: () => {
        console.log(this.name); // `this` refers to the global object, not `obj`.
    }
};
obj.greet(); // Outputs: `undefined` (or global object property in non-strict mode).
```

### 7. Explicit Binding of `this`
- The `this` keyword can be explicitly set using `call`, `apply`, or `bind`.

```javascript
function greet() {
    console.log(this.name);
}
const person = { name: "Eve" };
greet.call(person); // Outputs: "Eve".
greet.apply(person); // Outputs: "Eve".
const boundGreet = greet.bind(person);
boundGreet(); // Outputs: "Eve".
```

---

## The `new` Keyword

### What Happens Behind the Scenes When the `new` Keyword is Used:

1. **A New Object is Created**:
   - The `new` keyword creates a new JavaScript object.

2. **Prototype Linking**:
   - The new object is linked to the constructor function's prototype,
     allowing it to inherit properties and methods from the prototype.

3. **Constructor Invocation**:
   - The constructor function is called with `this` bound to the new object.
   - Any arguments are passed to the constructor function.

4. **Return Value Determination**:
   - If the constructor explicitly returns a non-primitive value (e.g., object, array, function),
     that value is returned.
   - Otherwise, the newly created object (`this`) is returned by default.

### Example:

```javascript
function Animal(name) {
    this.name = name;
    this.sayName = function () {
        console.log("My name is " + this.name);
    };
}

const dog = new Animal("Buddy");
dog.sayName(); // Outputs: "My name is Buddy".
