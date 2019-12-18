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

    describe('METHOD: ngOnInit', () => {
        When(() => {
            componentUnderTest.ngOnInit();
        });

        describe('GIVEN method is called THEN set variables', () => {
            Then(() => {
                expect(componentUnderTest.showBellDropDown).toEqual(false);
                expect(componentUnderTest.showEnvelopeDropDown).toEqual(false);
                expect(componentUnderTest.showUserDropDown).toEqual(false);
                expect(componentUnderTest.title).toBeTruthy();
                expect(componentUnderTest.userDropItems.length).toBeGreaterThan(0);
            });
        });
    });

    describe('METHOD: toggleDropDown', () => {
        When(() => {
            componentUnderTest.toggleDropDown(fakeValue);
        });

        describe('GIVEN it is called with "bell" THEN showBellDropDown is all other are false', () => {
            Given(() => {
                fakeValue = 'bell';
            });
            Then(() => {
                expect(componentUnderTest.showBellDropDown).toBeTruthy();
                expect(componentUnderTest.showEnvelopeDropDown).toBeFalsy();
                expect(componentUnderTest.showUserDropDown).toBeFalsy();
            });
        });
        describe('GIVEN it is called with "envelope" THEN showBellDropDown is all other are false', () => {
            Given(() => {
                fakeValue = 'envelope';
            });
            Then(() => {
                expect(componentUnderTest.showBellDropDown).toBeFalsy();
                expect(componentUnderTest.showEnvelopeDropDown).toBeTruthy();
                expect(componentUnderTest.showUserDropDown).toBeFalsy();
            });
        });
        describe('GIVEN it is called with "user" THEN showBellDropDown is all other are false', () => {
            Given(() => {
                fakeValue = 'user';
            });
            Then(() => {
                expect(componentUnderTest.showBellDropDown).toBeFalsy();
                expect(componentUnderTest.showEnvelopeDropDown).toBeFalsy();
                expect(componentUnderTest.showUserDropDown).toBeTruthy();
            });
        });
    });
});
