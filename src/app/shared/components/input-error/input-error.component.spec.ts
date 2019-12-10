import { ErrorLabel } from './../../models/error-label.model';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { TranslateService } from '@ngx-translate/core';
import { InputErrorComponent } from './input-error.component';
import { TestBed } from '@angular/core/testing';

describe('InputErrorComponent', () => {
    let componentUnderTest: InputErrorComponent;
    let fakeErrors: ErrorLabel[];

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

        describe('METHOD: translateErrorMessageParams', () => {
            When(() => {
                componentUnderTest.translateErrorMessageParams(fakeErrors);
            });

            describe('GIVEN there are errors and errorParams THEN errorParams should be translated', () => {
                Given(() => {
                    fakeErrors = [
                        new ErrorLabel('fakeError', 'fakeMessage', true, { value: 'fakeMessageParam' }),
                        new ErrorLabel('fakeError', 'fakeMessage2', true, { value: 'fakeMessageParam2' })
                    ];
                });
                Then(() => {
                    expect(componentUnderTest.errors).toEqual(fakeErrors);
                });
            });
        });
    });
});
