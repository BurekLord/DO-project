import { InputComponent } from './input.component';
import { TestBed } from '@angular/core/testing';
import { BaseInputComponent } from '../../core/base-input/base-input';
import { ElementRef } from '@angular/core';

describe('InputComponent', () => {
    let componentUnderTest: InputComponent;
    let fakeValue: any;
    let oldInputValue: string;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [InputComponent, BaseInputComponent]
        });
        componentUnderTest = TestBed.get(InputComponent);
    });

    describe('INIT: ', () => {

        When(() => {
            componentUnderTest.ngOnInitForChildren();
        });

        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });

        describe('METHOD: writeValue', () => {
            describe('GIVEN the method is called with textInput THEN set value and input.value', () => {
                When(() => {
                    componentUnderTest.input = { nativeElement: { value: undefined } };
                    componentUnderTest.writeValue(fakeValue);
                });
                Given(() => {
                    fakeValue = 'fakeString';
                });
                Then(() => {
                    expect(componentUnderTest.value).toEqual(fakeValue);
                    expect(componentUnderTest.input.nativeElement.value).toEqual(fakeValue);
                });
            });
            describe('GIVEN the method is called without textInput value THEN leave value and input.value = ""', () => {
                When(() => {
                    componentUnderTest.input = { nativeElement: { value: undefined } };
                    componentUnderTest.writeValue(fakeValue);
                });
                Given(() => {
                    fakeValue = undefined;
                    oldInputValue = componentUnderTest.value;
                });
                Then(() => {
                    expect(componentUnderTest.value).toEqual(oldInputValue);
                    expect(componentUnderTest.input.nativeElement.value).toEqual('');
                });
            });
        });
    });

    describe('METHOD: extractInformationFromInternalInput', () => {
        describe('GIVEN is called with event THEN return event.target.value', () => {
            Given(() => {
                fakeValue = 'fakeValue';
            });
            Then(() => {
                expect(componentUnderTest.extractInformationFromInternalInput(
                    { target: { value: fakeValue } }
                )).toEqual(fakeValue);
            });
        });
    });
});
