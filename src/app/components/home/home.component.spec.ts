import { SharedModule } from './../../shared/shared.module';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
    let componentUnderTest: HomeComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [HomeComponent],
            imports: [SharedModule]
        });
        componentUnderTest = TestBed.get(HomeComponent);
    });

    describe('INIT', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
