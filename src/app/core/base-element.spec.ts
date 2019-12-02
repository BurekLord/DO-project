import { TestBed } from '@angular/core/testing';
import { BaseElement } from './base-element';

describe('BaseElement', () => {

    let componentUnderTest: BaseElement;
    let fakeSize: string;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [BaseElement]
        });
        componentUnderTest = TestBed.get(BaseElement);
    });

    describe('INPUT: size', () => {
        describe('GIVEN value passed in size input is 12|12|12|12 THEN set sizeClass with xs size', () => {
            Given(() => {
                componentUnderTest.size = '12|12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN value passed in size input is 12|12|12 THEN set sizeClass without xs size', () => {
            Given(() => {
                componentUnderTest.size = '12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12';
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN no value is passed in size input THEN sizeClass should be undefined', () => {
            Given(() => {
                componentUnderTest.size = undefined;
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(undefined);
            });
        });
        describe('GIVEN invalid value is passed in size input THEN sizeClass should be undefined', () => {
            Given(() => {
                componentUnderTest.size = 'Invalid size string';
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(undefined);
            });
        });
    });

    describe('INPUT: subElementSize', () => {
        describe('GIVEN value passed in subElementSize input is 12|12|12|12 THEN set subElementSizeClass with xs size', () => {
            Given(() => {
                componentUnderTest.subElementSize = '12|12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
            });
            Then(() => {
                expect(componentUnderTest.subElementSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN value passed in subElementSize input is 12|12|12 THEN set subElementSizeClass without xs size', () => {
            Given(() => {
                componentUnderTest.subElementSize = '12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12';
            });
            Then(() => {
                expect(componentUnderTest.subElementSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN no value is passed in subElementSize input THEN subElementSizeClass should be undefined', () => {
            Given(() => {
                componentUnderTest.subElementSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.subElementSizeClass).toEqual(undefined);
            });
        });
        describe('GIVEN invalid value is passed in subElementSize input THEN subElementSizeClass should be undefined', () => {
            Given(() => {
                componentUnderTest.subElementSize = 'Invalid size string';
            });
            Then(() => {
                expect(componentUnderTest.subElementSizeClass).toEqual(undefined);
            });
        });
    });

    describe('INPUT: labelSize', () => {
        describe('GIVEN value passed in labelSize input is 12|12|12|12 THEN set labelSizeClass with xs size', () => {
            Given(() => {
                componentUnderTest.labelSize = '12|12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
            });
            Then(() => {
                expect(componentUnderTest.labelSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN value passed in labelSize input is 12|12|12 THEN set labelSizeClass without xs size', () => {
            Given(() => {
                componentUnderTest.labelSize = '12|12|12';
                fakeSize = 'col-lg-12 col-md-12 col-sm-12';
            });
            Then(() => {
                expect(componentUnderTest.labelSizeClass).toEqual(fakeSize);
            });
        });
        describe('GIVEN no value is passed in labelSize input THEN labelSizeClass should be undefined', () => {
            Given(() => {
                componentUnderTest.labelSize = undefined;
            });
            Then(() => {
                expect(componentUnderTest.labelSizeClass).toEqual(undefined);
            });
        });
        describe('GIVEN invalid value is passed in labelSize input THEN labelSizeClass should be undefined', () => {
            Given(() => {
                componentUnderTest.labelSize = 'Invalid size string';
            });
            Then(() => {
                expect(componentUnderTest.labelSizeClass).toEqual(undefined);
            });
        });
    });
});
