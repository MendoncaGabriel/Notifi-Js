"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
/**
 * Strongly-typed, efficient, and reusable Subject class implementing the Observer pattern.
 * Allows subscribing, unsubscribing, and notifying multiple observers.
 */
class Subject {
    constructor() {
        this.observers = new Set();
    }
    /**
     * Subscribes a new observer. Duplicate functions are automatically ignored.
     * @param observer A callback function to receive emitted values.
     */
    subscribe(observer) {
        this.observers.add(observer);
    }
    /**
     * Unsubscribes an existing observer.
     * @param observer The observer to remove.
     */
    unsubscribe(observer) {
        this.observers.delete(observer);
    }
    /**
     * Notifies all observers with the given value.
     * Errors thrown by observers are caught individually to ensure full delivery.
     * @param value The data to send to observers.
     */
    notify(value) {
        for (const observer of this.observers) {
            try {
                observer(value);
            }
            catch (error) {
                console.error("Error notifying observer:", error);
            }
        }
    }
    /**
     * Clears all subscribed observers.
     */
    clear() {
        this.observers.clear();
    }
    /**
     * Returns the current number of subscribed observers.
     */
    count() {
        return this.observers.size;
    }
}
exports.Subject = Subject;
