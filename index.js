/**
 * @template T
 * @callback Observer
 * @param {T} data
 */

/**
 * @template T
 * @returns {{
 *   subscribe: (observer: Observer<T>) => void,
 *   unsubscribe: (observer: Observer<T>) => void,
 *   notify: (data: T) => void
 * }}
 */
function Subject() {
  /** @type {Observer<T>[]} */
  const observers = [];

  return {
    subscribe(observer) {
      observers.push(observer);
    },
    unsubscribe(observer) {
      const index = observers.indexOf(observer);
      if (index > -1) {
        observers.splice(index, 1);
      }
    },
    notify(data) {
      observers.forEach(observer => observer(data));
    }
  };
}


