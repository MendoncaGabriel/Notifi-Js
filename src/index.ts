/**
 * Strongly-typed, efficient, and reusable Subject class implementing the Observer pattern.
 * Allows subscribing, unsubscribing, and notifying multiple observers.
 */
export class Subject<T> {
  private observers: Set<(value: T) => void>;

  constructor() {
    this.observers = new Set();
  }

  /**
   * Subscribes a new observer. Duplicate functions are automatically ignored.
   * @param observer A callback function to receive emitted values.
   */
  subscribe(observer: (value: T) => void): void {
    this.observers.add(observer);
  }

  /**
   * Unsubscribes an existing observer.
   * @param observer The observer to remove.
   */
  unsubscribe(observer: (value: T) => void): void {
    this.observers.delete(observer);
  }

  /**
   * Notifies all observers with the given value.
   * Errors thrown by observers are caught individually to ensure full delivery.
   * @param value The data to send to observers.
   */
  notify(value: T): void {
    for (const observer of this.observers) {
      try {
        observer(value);
      } catch (error) {
        console.error("Error notifying observer:", error);
      }
    }
  }

  /**
   * Clears all subscribed observers.
   */
  clear(): void {
    this.observers.clear();
  }

  /**
   * Returns the current number of subscribed observers.
   */
  count(): number {
    return this.observers.size;
  }
}
