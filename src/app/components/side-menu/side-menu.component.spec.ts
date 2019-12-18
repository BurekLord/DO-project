import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { EventHub } from 'src/app/shared/services/event-broadcast.service';

import { SideMenuComponent } from './side-menu.component';

import { TestBed, tick, fakeAsync, async } from '@angular/core/testing';
import { Subscription } from 'rxjs';

describe('SideMenuComponent', () => {
    let componentUnderTest: SideMenuComponent;
    let eventHubSpy: Spy<EventHub>;

    Given(async(() => {
        TestBed.configureTestingModule({
            providers: [SideMenuComponent, { provide: EventHub, useValue: createSpyFromClass(EventHub) }]
        });
        componentUnderTest = TestBed.get(SideMenuComponent);
        eventHubSpy = TestBed.get(EventHub);
    }));

    describe('INIT: ', () => {

        When(fakeAsync(() => {
            componentUnderTest.ngOnInit();
            tick();
        }));

        Then(() => {
            expect(componentUnderTest.subscriptions.length).toBeGreaterThan(0);
        });
    });

    describe('METHOD: ngOnDestroy', () => {
        When(() => {
            componentUnderTest.ngOnDestroy();
        });

        describe('GIVEN there are subs THEN all subscriptions to unsubscribe', () => {
            Given(() => {
                componentUnderTest.subscriptions = [new Subscription()];
            });
            Then(() => {
                componentUnderTest.subscriptions.forEach(sub => {
                    expect(sub.closed).toBeTruthy();
                });
            });
        });
    });
});
