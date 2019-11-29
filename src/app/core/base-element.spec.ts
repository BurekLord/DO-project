import { TestBed } from '@angular/core/testing';
import { BaseElement } from './base-element';

describe('BaseElement', () => {

    let componentUnderTest: BaseElement;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [BaseElement]
        });
        componentUnderTest = TestBed.get(BaseElement);
    });

    describe('INPUT: size', () => {
        describe('GIVEN there is value passed in size input THEN set sizeClass', () => {
            Given(() => {
                // TODO: mora ovo da se iztipizira nekako
                componentUnderTest.size = '12|12|12|12';
            });
            Then(() => {
                expect(componentUnderTest.sizeClass).toEqual(fakeSize);
            });
        });
    });
});
