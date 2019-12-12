import { createSpyFromClass } from 'jasmine-auto-spies';
import { EventHub } from './../../shared/services/event-broadcast.service';
import { NavbarComponent } from './navbar.component';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
    let componentUnderTest: NavbarComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [NavbarComponent,
                {
                    provide: EventHub, useValue: createSpyFromClass(EventHub)
                },
                {
                    provide: Router, useValue: createSpyFromClass(Router)
                }
            ]
        });
        componentUnderTest = TestBed.get(NavbarComponent);
    });

    describe('INIT: ', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
