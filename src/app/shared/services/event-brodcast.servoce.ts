import { Observer, Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter, share, map } from 'rxjs/operators';

interface Event<T> {
    name: string;
    payload: T;
}

@Injectable({ providedIn: 'root' })
export class EventHub {

    observable: Observable<Event<any> | string>;
    observer: Observer<Event<any> | string>;

    constructor() {
        this.observable = Observable.create((observer: Observer<Event<any> | string>) => {
            this.observer = observer;
        }).pipe(share());
    }

    broadcast(event: Event<any> | string): void {
        if (this.observer) {
            this.observer.next(event);
        }
    }

    observe(eventName: string, callback: any): Subscription {
        const subscriber: Subscription = this.observable
            .pipe(
                filter((event: Event<any> | string) => {
                    if (typeof event === 'string') {
                        return event === eventName;
                    }
                    return event.name === eventName;
                })
            )
            .subscribe(callback);
        return subscriber;
    }

    destroy(subscriber: Subscription): void {
        subscriber.unsubscribe();
    }
}
