import { DropDownMenuComponent } from './drop-down-menu.component';

import { TestBed } from '@angular/core/testing';

describe('DropDownMenuComponent', () => {
    let componentUnderTest: DropDownMenuComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [DropDownMenuComponent]
        });
        componentUnderTest = TestBed.get(DropDownMenuComponent);
    });

    describe('INIT: ', () => {

        Then(() => {
            expect(componentUnderTest.$show).toBeFalsy();
        });
    });
});
