import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { EventHub } from './../../shared/services/event-broadcast.service';
import { NavbarComponent } from './navbar.component';

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
    let componentUnderTest: NavbarComponent;
    let expectedValue: any;
    let eventHubSpy: Spy<EventHub>;
    let actualValue: any;
    let fakeValue: any;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [
                NavbarComponent,
                { provide: EventHub, useValue: createSpyFromClass(EventHub) },
                { provide: Router, useValue: createSpyFromClass(Router) }
            ]
        });
        componentUnderTest = TestBed.get(NavbarComponent);
        eventHubSpy = TestBed.get(EventHub);
    });

    describe('METHOD: toggleSideBar', () => {

        When(() => {
            componentUnderTest.toggleSideBar();
        });

        // tslint:disable-next-line: max-line-length
        describe('GIVEN is called THEN eventHub.observe("toggleSideBar") callback should trigger with that string', () => {

            Given(() => {
                expectedValue = 'toggleSideBar';
            });

            Then(() => {
                eventHubSpy.observe('toggleSideBar', (res) => {
                    actualValue = res;
                    expect(actualValue).toEqual(expectedValue);
                });
            });
        });
    });

    describe('METHOD: search', () => {
        When(() => {
            componentUnderTest.search(fakeValue);
        });

        describe('GIVEN there is value THEN search var should update', () => {
            Given(() => {
                fakeValue = 'fake value';
            });
            Then(() => {
                expect(componentUnderTest.searchValue).toEqual(fakeValue);
            });
        });
        describe('GIVEN there is no value THEN search var be undefined', () => {
            When(() => {
                componentUnderTest.search(fakeValue);
            });
            Given(() => {
                fakeValue = undefined;
            });
            Then(() => {
                expect(componentUnderTest.searchValue).toEqual(fakeValue);
            });
        });
    });
});
