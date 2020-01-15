import { BaseConverter } from './base-converter';

import { TestBed } from '@angular/core/testing';

class TestModel {
    constructor(public id: string, public name: string) { }
}

class TestDto {
    constructor(public id: string, public name: string) { }
}

describe('BaseConverter', () => {
    let componentUnderTest: BaseConverter<TestModel, TestDto>;
    let fakeDtoList: TestDto[];
    let fakeModelList: TestModel[];

    Given(() => {
        TestBed.configureTestingModule({
            providers: [BaseConverter]
        });
        componentUnderTest = TestBed.get(BaseConverter);
    });

    describe('METHOD: convertToModelList', () => {
        let convertedDto: TestModel[];
        When(() => {
            convertedDto = componentUnderTest.convertToModelList(fakeDtoList);
        });
        describe('GIVEN there is no fake dto list THEN return undefined', () => {
            Given(() => {
                fakeDtoList = undefined;
                fakeModelList = [new TestModel('1', 'fake')];
            });
            Then(() => {
                expect(convertedDto).toBeFalsy();
            });
        });
    });
    describe('METHOD: convertToDTOList', () => {
        let convertedModel: TestDto[];
        When(() => {
            convertedModel = componentUnderTest.convertToDTOList(fakeModelList);
        });
        describe('GIVEN there is no fake dto list THEN return undefined', () => {
            Given(() => {
                fakeDtoList = [new TestModel('1', 'fake')];
                fakeModelList = undefined;
            });
            Then(() => {
                expect(convertedModel).toBeFalsy();
            });
        });
    });
});
