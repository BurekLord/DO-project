import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { FormControl } from '@angular/forms';
import { BaseInputComponent } from './base-input';

import { TestBed } from '@angular/core/testing';
import { ErrorLabel } from '../../models/error-label.model';

export class TestClass extends BaseInputComponent {
    writeValue(textInput: any): void {
        // not used
    }
    ngOnInitForChildren() {
        return true;
    }
    extractInformationFromInternalInput($event: any) {
        // not used
    }
}

describe('BaseInputComponent', () => {
    let componentUnderTest: BaseInputComponent;
    let componentThatExtends: TestClass;
    let fakeFunction: any;
    let formSpy: Spy<FormControl>;
    let fakeControl: FormControl;
    let fakeIsDisabled: boolean;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [BaseInputComponent, TestClass,
                { provide: FormControl, useValue: createSpyFromClass(FormControl) }
            ]
        });
        componentUnderTest = TestBed.get(BaseInputComponent);
        componentThatExtends = TestBed.get(TestClass);
        formSpy = TestBed.get(FormControl);
    });

    describe('INIT: ', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
    describe('METHOD: ngOnInit', () => {
        When(() => {
            componentUnderTest.ngOnInit();
        });

        describe('GIVEN formControl is null THEN return', () => {
            Given(() => {
                componentUnderTest.formControl = null;
            });
            Then(() => {
                // TODO: bad test. fix it. how do we know that the method after return is called or not
                expect(componentUnderTest.ngOnInit()).toEqual(undefined);
            });
        });
    });
    describe('METHOD: registerOnChange', () => {
        When(() => {
            componentUnderTest.registerOnChange(fakeFunction);
        });

        describe('GIVEN fakeFunction THEN onChangeCallBack should equal fake function', () => {
            Given(() => {
                fakeFunction = () => true;
            });
            Then(() => {
                expect(componentUnderTest.onChangeCallBack).toEqual(fakeFunction);
            });
        });
    });

    describe('METHOD: registerOnTouched', () => {
        When(() => {
            componentUnderTest.registerOnTouched(fakeFunction);
        });

        describe('GIVEN fakeFunction THEN onTouchCallBack should equal fake function', () => {
            Given(() => {
                fakeFunction = () => true;
            });
            Then(() => {
                expect(componentUnderTest.onTouchCallBack).toEqual(fakeFunction);
            });
        });
    });

    describe('METHOD: setDisabledState', () => {
        When(() => {
            componentUnderTest.setDisabledState(fakeIsDisabled);
        });

        describe('GIVEN isDisabled is true THEN set disable to true', () => {
            Given(() => {
                fakeIsDisabled = true;
            });
            Then(() => {
                expect(componentUnderTest.disabled).toBeTruthy();
            });
        });
        describe('GIVEN isDisabled is false THEN disable to false', () => {
            Given(() => {
                fakeIsDisabled = false;
            });
            Then(() => {
                expect(componentUnderTest.disabled).toBeFalsy();
            });
        });
    });

    describe('METHOD: setUpErrors', () => {
        Given(() => {
            fakeControl = new FormControl();
            componentUnderTest.errorsLabel = [
                new ErrorLabel('fakeError', 'fakeMessage', false, { value: 'fakeMessageParam' }),
                new ErrorLabel('fakeError2', 'fakeMessage2', false, { value: 'fakeMessageParam2' })
            ];
        });

        When(() => {
            componentUnderTest.setUpErrors(fakeControl);
        });

        describe('GIVEN there are errors THEN set errorsLabel.showed to true', () => {
            Given(() => {
                fakeControl.setErrors({ fakeError: true, fakeError2: true });
            });
            Then(() => {
                componentUnderTest.errorsLabel.forEach(err => {
                    expect(err.showed).toBeTruthy();
                });
            });
        });
        describe('GIVEN there are no errors THEN set errorsLabel.showed to false', () => {
            Given(() => {
                fakeControl.setErrors(null);
            });
            Then(() => {
                componentUnderTest.errorsLabel.forEach(err => {
                    expect(err.showed).toBeFalsy();
                });
            });
        });
    });
});
