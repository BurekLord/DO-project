import { PlaygroundComponent } from './playground.component';
import { TestBed } from '@angular/core/testing';

describe('PlaygroundComponent', () => {
    let componentUnderTest: PlaygroundComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [PlaygroundComponent]
        });
        componentUnderTest = TestBed.get(PlaygroundComponent);
    });

    describe('Unit under test: ', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
