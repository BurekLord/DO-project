import { LabelConverter, Label, LabelDTO } from './label.model';
import { TestBed } from '@angular/core/testing';

describe('LabelConverter', () => {
    let componentUnderTest: LabelConverter;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [LabelConverter]
        });
        componentUnderTest = TestBed.get(LabelConverter);
    });

    describe('METHOD: convertToModel ', () => {
        let fakeDto: any;
        let fakeResult: Label;
        let expectedResult: Label;
        When(() => {
            fakeResult = componentUnderTest.convertToModel(fakeDto);
        });
        describe('GIVEN a valid dto THEN return a valid model', () => {
            Given(() => {
                fakeDto = { text: 'asd', icon: 'asd', color: 'asd' };
                expectedResult = new Label('asd', 'asd', 'asd');
            });
            Then(() => {
                expect(fakeResult).toEqual(expectedResult);
            });
        });
        describe('GIVEN no dto THEN return undefined', () => {
            Given(() => {
                fakeDto = undefined;
            });
            Then(() => {
                expect(fakeResult).toBeFalsy();
            });
        });
    });

    describe('METHOD: convertToDTO ', () => {
        let fakeModel: Label;
        let fakeResult: LabelDTO;
        let expectedResult: LabelDTO;
        When(() => {
            fakeResult = componentUnderTest.convertToModel(fakeModel);
        });
        describe('GIVEN a valid model THEN return a valid dto', () => {
            Given(() => {
                fakeModel = new Label('asd', 'asd', 'asd');
                expectedResult = { text: 'asd', icon: 'asd', color: 'asd' };
            });
            Then(() => {
                expect(fakeResult).toEqual(expectedResult);
            });
        });
        describe('GIVEN no Model THEN return undefined', () => {
            Given(() => {
                fakeModel = undefined;
            });
            Then(() => {
                expect(fakeResult).toBeFalsy();
            });
        });
    });
});
