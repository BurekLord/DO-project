import { NavbarComponent } from './navbar.component';
import { TestBed } from '@angular/core/testing';

describe('NavbarComponent', () => {
    let componentUnderTest: NavbarComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [NavbarComponent]
        });
        componentUnderTest = TestBed.get(NavbarComponent);
    });

    describe('INIT: ', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
