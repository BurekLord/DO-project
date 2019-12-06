import { BaseInputComponent } from './base-input';

import { TestBed } from '@angular/core/testing';

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

    Given(() => {
        TestBed.configureTestingModule({
            providers: [BaseInputComponent, TestClass]
        });
        componentUnderTest = TestBed.get(BaseInputComponent);
        componentThatExtends = TestBed.get(TestClass);
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
});
