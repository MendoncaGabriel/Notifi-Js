# NotifiJs

A **strongly-typed**, **lightweight**, and **zero-dependency** Observer Pattern implementation in TypeScript — ideal for decoupling logic and managing event subscriptions in a reactive way.

---

## Features

- ✅ Fully typed with TypeScript generics
- ✅ Extremely lightweight (no dependencies)
- ✅ Observer pattern compliant
- ✅ Safe and isolated notifications
- ✅ Modern and minimal API

---

## Installation

```bash
npm install notifijs
````

Or with Yarn:

```bash
yarn add notifijs
```

---

## Usage

```ts
import { Subject } from 'notifijs';

const counter = new Subject<number>();

const logger = (value: number) => {
  console.log(`Value changed to ${value}`);
};

counter.subscribe(logger);

counter.notify(1); // Console: Value changed to 1
counter.notify(2); // Console: Value changed to 2

counter.unsubscribe(logger);

counter.notify(3); // No output
```

---

## API Reference

### `new Subject<T>()`

Creates a new Subject instance for a given data type `T`.

### `.subscribe(observer: (value: T) => void): void`

Adds an observer to the subscription list.

### `.unsubscribe(observer: (value: T) => void): void`

Removes an observer.

### `.notify(value: T): void`

Notifies all observers with the provided value. Each observer is executed independently with error isolation.

### `.clear(): void`

Removes all observers.

### `.count(): number`

Returns the number of subscribed observers.

---

## Use Cases

* Reactivity in UI frameworks
* Logging and analytics hooks
* Pub/Sub for services or internal modules
* Decoupling side-effects from main logic
* Custom state management

---

## Development

```bash
git clone https://github.com/MendoncaGabriel/Notifi-Js.git
cd Notifi-Js
npm install
npm run build
```

---

## Links

* [🔗 GitHub Repository](https://github.com/MendoncaGabriel/Notifi-Js)
* [📦 NPM Package](https://www.npmjs.com/package/notifijs)
* [🌐 Live Demo](https://mendoncagabriel.github.io/Notifi-Js/)

---

## 👨‍💻 Author

**Gabriel Mendonça**
Full-stack Developer | TypeScript Lover
[LinkedIn](https://www.linkedin.com/in/mendon%C3%A7agabriel/) • [GitHub](https://github.com/MendoncaGabriel)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
