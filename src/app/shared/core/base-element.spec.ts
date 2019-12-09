import { TestBed } from '@angular/core/testing';
import { BaseElement } from './base-element';

describe('BaseElement', () => {

    let componentUnderTest: BaseElement;
    let fakeSize: string;
    let fakeInput: string;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [BaseElement, { provide: BaseElement, useValue: new BaseElement() }]
        });
        componentUnderTest = TestBed.get(BaseElement);
    });

    describe('METHOD: setUpSizeClass', () => {
        When(() => {
            componentUnderTest.setUpSizeClass(fakeInput);
        });

        describe('GIVEN there is input THEN return proper class string', () => {
            Given(() => {
                fakeInput = '12|12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is no input THEN return undefined', () => {
            Given(() => {
                fakeInput = undefined;
                fakeSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is bad input THEN return undefined', () => {
            Given(() => {
                fakeInput = 'asdad12|s12|s12|1as2';
                fakeSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is short input THEN return proper class string without xs', () => {
            Given(() => {
                fakeInput = '12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12';
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(fakeSize);
            });
        });
    });
    describe('METHOD: setupSubElementSizeClass', () => {
        When(() => {
            componentUnderTest.setupSubElementSizeClass(fakeInput);
        });

        describe('GIVEN there is input THEN return proper class string', () => {
            Given(() => {
                fakeInput = '12|12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
            });
            Then(() => {
                expect(componentUnderTest.subElementSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is no input THEN return undefined', () => {
            Given(() => {
                fakeInput = undefined;
                fakeSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.subElementSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is bad input THEN return undefined', () => {
            Given(() => {
                fakeInput = 'asdad12|s12|s12|1as2';
                fakeSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.subElementSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is short input THEN return proper class string without xs', () => {
            Given(() => {
                fakeInput = '12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12';
            });
            Then(() => {
                expect(componentUnderTest.subElementSizeClass).toEqual(fakeSize);
            });
        });
    });
    describe('METHOD: setUpLabelSizeClass', () => {
        When(() => {
            componentUnderTest.setUpLabelSizeClass(fakeInput);
        });

        describe('GIVEN there is input THEN return proper class string', () => {
            Given(() => {
                fakeInput = '12|12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
            });
            Then(() => {
                expect(componentUnderTest.labelSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is no input THEN return undefined', () => {
            Given(() => {
                fakeInput = undefined;
                fakeSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.labelSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is bad input THEN return undefined', () => {
            Given(() => {
                fakeInput = 'asdad12|s12|s12|1as2';
                fakeSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.labelSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is short input THEN return proper class string without xs', () => {
            Given(() => {
                fakeInput = '12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12';
            });
            Then(() => {
                expect(componentUnderTest.labelSizeClass).toEqual(fakeSize);
            });
        });
    });
    describe('METHOD: setUpErrorMessageSizeClass', () => {
        When(() => {
            componentUnderTest.setUpErrorMessageSizeClass(fakeInput);
        });

        describe('GIVEN there is input THEN return proper class string', () => {
            Given(() => {
                fakeInput = '12|12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
            });
            Then(() => {
                expect(componentUnderTest.errorMessageSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is no input THEN return undefined', () => {
            Given(() => {
                fakeInput = undefined;
                fakeSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.errorMessageSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is bad input THEN return undefined', () => {
            Given(() => {
                fakeInput = 'asdad12|s12|s12|1as2';
                fakeSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.errorMessageSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN there is short input THEN return proper class string without xs', () => {
            Given(() => {
                fakeInput = '12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12';
            });
            Then(() => {
                expect(componentUnderTest.errorMessageSizeClass).toEqual(fakeSize);
            });
        });
    });
});
