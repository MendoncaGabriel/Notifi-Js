# Notifi Js

A lightweight and generic Observer pattern implementation in JavaScript using JSDoc type annotations. Ideal for decoupling logic and managing subscriptions to changes in your app.

## Features

- Zero dependencies
- Fully typed with JSDoc (great for autocomplete and IDE support)
- Generic and reusable
- Easy to use and extend

## Installation

```bash
npm install notifi
````

Or if using directly in the browser, just copy the source file into your project.

## Usage

```js
import { Subject } from 'notifi';

// Create a new subject
const subject = Subject();

/** @type {(data: any) => void} */
function observer1(data) {
  console.log('Observer 1 received:', data);
}

/** @type {(data: any) => void} */
function observer2(data) {
  console.log('Observer 2 received:', data);
}

// Subscribe
subject.subscribe(observer1);
subject.subscribe(observer2);

// Notify all observers
subject.notify('Hello Observers!');

// Unsubscribe one
subject.unsubscribe(observer1);

// Only observer2 will be notified
subject.notify('Only one observer now.');
```

## How it works

This library implements the classic **Observer Pattern**, where one "subject" notifies many "observers" when an event occurs or data changes.

It uses **JSDoc `@template`** and `@callback` tags to offer IDE support in plain JavaScript projects without needing TypeScript.

## ✅ License

MIT — free to use, modify, and distribute.
