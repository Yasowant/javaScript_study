# JavaScript and Classes

## Object-Oriented Programming (OOP)

### Object
- A collection of properties (key-value pairs) and methods (functions) that operate on the data.
- Example method: `toLowerCase` for strings.

### Why Use OOP?
- **Modularity**: Organizes code into reusable components.
- **Reusability**: Facilitates code reuse through inheritance and shared methods.
- **Scalability**: Enhances maintainability and scalability for large projects.
- **Abstraction**: Focuses on essential features while hiding unnecessary details.
- **Ease of Maintenance**: Encapsulation keeps code organized and reduces dependencies.

### Parts of OOP

#### 1. Object Literal
Creating objects directly using the `{}` syntax.

**Example:**
```javascript
const car = {
  make: "Toyota",
  model: "Corolla",
  start() {
    console.log("Car started");
  }
};

car.start(); // Output: Car started
```

#### 2. Constructor Function
Functions used to create and initialize objects with the `new` keyword.

**Example:**
```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.start = function () {
    console.log(`${this.make} ${this.model} started`);
  };
}

const car1 = new Car("Toyota", "Camry");
car1.start(); // Output: Toyota Camry started
```

#### 3. Prototypes
Prototypes allow sharing methods across object instances, reducing memory usage.

**Example:**
```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.start = function () {
  console.log(`${this.make} ${this.model} started`);
};

const car1 = new Car("Toyota", "Rav4");
car1.start(); // Output: Toyota Rav4 started
```

#### 4. Classes
Introduced in ES6, classes provide a cleaner way to implement objects and inheritance.

**Example:**
```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`${this.make} ${this.model} started`);
  }
}

const car1 = new Car("Honda", "Civic");
car1.start(); // Output: Honda Civic started
```

#### 5. Instances
Instances are individual objects created from a class or constructor function using the `new` keyword.

**Example:**
```javascript
const car1 = new Car("Ford", "Mustang");
const car2 = new Car("Tesla", "Model 3");

console.log(car1.make); // Output: Ford
console.log(car2.make); // Output: Tesla
```

### 4 Pillars of OOP

#### 1. Abstraction
- **Definition**: Hiding implementation details and showing only essential functionality.

**Example:**
```javascript
class BankAccount {
  #balance; // Private property (ES6 feature)

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  getBalance() {
    return this.#balance; // Only accessible via this method
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
```

#### 2. Encapsulation
- **Definition**: Bundling data and methods within a class and restricting access to certain properties or methods.

**Example:**
```javascript
class User {
  #password; // Private property

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  authenticate(inputPassword) {
    return inputPassword === this.#password;
  }
}

const user = new User("JohnDoe", "secret");
console.log(user.authenticate("wrong")); // Output: false
console.log(user.authenticate("secret")); // Output: true
```

#### 3. Inheritance
- **Definition**: Mechanism to create a new class based on an existing class.

**Example:**
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks
```

#### 4. Polymorphism
- **Definition**: The ability to redefine or override methods in derived classes.

**Example:**
```javascript
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

const shapes = [new Shape(), new Circle(), new Square()];
shapes.forEach((shape) => shape.draw());
// Output:
// Drawing a shape
// Drawing a circle
// Drawing a square
```

