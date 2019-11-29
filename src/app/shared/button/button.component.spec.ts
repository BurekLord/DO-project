import { TestBed } from '@angular/core/testing';
import { ButtonComponent, BUTTON_TYPES } from './button.component';

describe('ButtonComponent', () => {

    let componentUnderTest: ButtonComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [ButtonComponent]
        });
        componentUnderTest = TestBed.get(ButtonComponent);
    });

    describe('METHOD: setUpButtonType', () => {
        let fakeResult: string;

        When(() => {
            componentUnderTest.setUpButtonType();
        });

        describe('GIVEN there is no button type input THEN button type should be default', () => {
            Given(() => {
                componentUnderTest.type = undefined;
                fakeResult = 'btn-primary';
            });

            Then(() => {
                expect(componentUnderTest.btnType).toEqual(fakeResult);
            });
        });

        describe('GIVEN there is button type input THEN button type should be set to that input', () => {
            Given(() => {
                componentUnderTest.type = BUTTON_TYPES.SUCCESS;
                fakeResult = 'btn-success';
            });

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
});
