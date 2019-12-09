import { createSpyFromClass } from 'jasmine-auto-spies';
import { SharedModule } from './../../shared/shared.module';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';


describe('HomeComponent', () => {
    let componentUnderTest: HomeComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [HomeComponent, { provide: Router, useValue: createSpyFromClass(Router) }],
        });
        componentUnderTest = TestBed.get(HomeComponent);
    });

    describe('INIT', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
