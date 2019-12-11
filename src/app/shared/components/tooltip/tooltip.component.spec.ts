import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
    let componentUnderTest: TooltipComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [TooltipComponent]
        });
        componentUnderTest = TestBed.get(TooltipComponent);
    }));

    it('should create', () => {
        expect(componentUnderTest).toBeTruthy();
    });
});
