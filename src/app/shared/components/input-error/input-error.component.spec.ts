import { createSpyFromClass } from 'jasmine-auto-spies';
import { TranslateService } from '@ngx-translate/core';
import { InputErrorComponent } from './input-error.component';
import { TestBed } from '@angular/core/testing';

describe('InputErrorComponent', () => {
    let componentUnderTest: InputErrorComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [InputErrorComponent,
                { provide: TranslateService, useValue: createSpyFromClass(TranslateService) }
            ]
        });
        componentUnderTest = TestBed.get(InputErrorComponent);
    });

    describe('INIT: ', () => {

        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
