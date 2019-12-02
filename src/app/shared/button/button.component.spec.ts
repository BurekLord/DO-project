import { createSpyFromClass } from 'jasmine-auto-spies';
import { TranslateService } from '@ngx-translate/core';

import { TestBed, fakeAsync } from '@angular/core/testing';
import { ButtonComponent, BUTTON_TYPES } from './button.component';

describe('ButtonComponent', () => {

    let componentUnderTest: ButtonComponent;
    let fakeData;
    let fakeResult;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [ButtonComponent, { provide: TranslateService, useValue: createSpyFromClass(TranslateService) }]
        });
        componentUnderTest = TestBed.get(ButtonComponent);
        fakeData = undefined;
        fakeResult = undefined;
    });

    describe('METHOD: setUpButtonType', () => {

        When(() => {
            componentUnderTest.setUpButtonType();
        });

        describe('GIVEN there is no button type input THEN button type should be default', () => {
            Given(() => {
                componentUnderTest.type = undefined;
                componentUnderTest.customCss = undefined;
                fakeResult = 'btn-primary';
                componentUnderTest.ngOnInit();
            });

            Then(() => {
                expect(componentUnderTest.btnType).toEqual(fakeResult);
            });
        });

        describe('GIVEN there is button type input THEN button type should be set to that input', () => {
            Given(fakeAsync(() => {
                componentUnderTest.type = BUTTON_TYPES.SUCCESS;
                fakeResult = 'btn-success';
                componentUnderTest.ngOnInit();
            }));

            Then(() => {
                expect(componentUnderTest.btnType).toEqual(fakeResult);
            });
        });
    });

    describe('METHOD: buttonClicked', () => {
        When(() => {
            spyOn(componentUnderTest.onClick, 'emit');
            componentUnderTest.buttonClicked();
        });
        Then(() => {
            expect(componentUnderTest.onClick.emit).toHaveBeenCalledWith(true);
        });
    });

    describe('METHOD: getBtnTypeClass', () => {
        describe('GIVEN method is called with valid data THEN return appropriate css class', () => {
            Given(() => {
                fakeData = BUTTON_TYPES.SUCCESS;
                fakeResult = 'btn-success';
            });
            Then(() => {
                expect(componentUnderTest.getBtnTypeClass(fakeData)).toEqual(fakeResult);
            });
        });
        describe('GIVEN method is called with invalid data THEN return undefined', () => {
            Given(() => {
                fakeData = 'invalid data';
                fakeResult = undefined;
            });
            Then(() => {
                expect(componentUnderTest.getBtnTypeClass(fakeData)).toEqual(fakeResult);
            });
        });
        describe('GIVEN method is called without data THEN return undefined', () => {
            Given(() => {
                fakeData = undefined;
                fakeResult = undefined;
            });
            Then(() => {
                expect(componentUnderTest.getBtnTypeClass(fakeData)).toEqual(fakeResult);
            });
        });
    });
});
