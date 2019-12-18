import { Subscription } from 'rxjs';
import { EventHub, Event } from './event-broadcast.service';

import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';

describe('EventHub', () => {
    let serviceUnderTest: EventHub;
    let fakeEvent: any;
    let fakeValue: any;
    let actualValue: any;
    let fakeCallback: any;

    Given(async(() => {
        TestBed.configureTestingModule({
            providers: [EventHub]
        });
        serviceUnderTest = TestBed.get(EventHub);
    }));

    describe('INIT', () => {
        Then(() => {
            expect(serviceUnderTest.observable).toBeTruthy();
        });
    });

    describe('METHOD: broadcast', () => {

        When(() => {
            serviceUnderTest.broadcast(fakeEvent);
        });

        describe('GIVEN an event THEN observer should fire next', () => {
            Given(() => {
                fakeEvent = { name: 'fakeName', payload: 'fakeContent' };
            });

            Then(() => {
                serviceUnderTest.observable.subscribe(res => {
                    expect(res).toEqual(fakeEvent);
                });
            });
        });
        describe('GIVEN nothing THEN observer should do nothing', () => {
            Given(() => {
                fakeEvent = { name: 'fakeName', payload: 'fakeContent' };
            });

            Then(() => {
                serviceUnderTest.observable.subscribe(res => {
                    expect(res).toBeFalsy();
                });
            });
        });
    });

    describe('METHOD: observe', () => {
        When(() => {
            serviceUnderTest.broadcast(fakeEvent);
        });

        // tslint:disable-next-line: max-line-length
        describe('GIVEN service.broadcast(event) is activated with event THEN callback should be called and return event', () => {
            Given(() => {
                fakeEvent = { name: 'fakeName', payload: 'fakeContent' };
                actualValue = fakeEvent;
                fakeCallback = (event) => {
                    fakeValue = event;
                };
                serviceUnderTest.observe(fakeEvent.name, fakeCallback);
            });
            Then(() => {
                expect(fakeValue).toEqual(actualValue);
            });
        });

        describe('GIVEN service.broadcast(string) is activated THEN callback should be called with string', () => {
            Given(() => {
                fakeEvent = 'fakeEvent';
                actualValue = fakeEvent;
                fakeCallback = (event) => {
                    fakeValue = event;
                };
                serviceUnderTest.observe(fakeEvent, fakeCallback);
            });
            Then(() => {
                expect(fakeValue).toEqual(actualValue);
            });
        });

        describe('METHOD: destroy', () => {
            When(() => {
                serviceUnderTest.destroy(fakeValue);
            });

            describe('GIVEN the subscription is passed THEN it should unsubscribe', () => {
                Given(() => {
                    fakeValue = new Subscription();
                });
                Then(() => {
                    expect(fakeValue).toBeTruthy();
                });
            });
        });
    });
});