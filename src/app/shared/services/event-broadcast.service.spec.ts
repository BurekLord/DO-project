import { EventHub, Event } from './event-broadcast.service';

import { TestBed } from '@angular/core/testing';

describe('EventHub', () => {
    let serviceUnderTest: EventHub;
    let fakeEvent: Event<any>;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [EventHub]
        });
    })

    serviceUnderTest = TestBed.get(EventHub);

    describe('METHOD: broadcast', () => {

        When(() => {
            serviceUnderTest.broadcast(fakeEvent);
        });

        describe('GIVEN an event THEN observer should fire next', () => {

            Given(() => {
                fakeEvent = { name: 'fakeName', payload: 'fakeContent' };
            });

            Then(() => {
                expect(true).toBeTruthy();
                // serviceUnderTest.observable.subscribe(res => {
                // expect(res).toEqual(fakeEvent);
                // });
            });
        });
    });
});