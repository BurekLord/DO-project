import { getClassFromSize } from './utils';

describe('METHOD: getClassFromSize', () => {
    let fakeString: string;
    describe('GIVEN method is called with valid string "12|12|12|12" THEN return proper class string', () => {
        Given(() => {
            fakeString = '12|12|12|12';
        });
        Then(() => {
            expect(getClassFromSize(fakeString)).toEqual('col-lg-12 col-md-12 col-sm-12 col-xs-12');
        });
    });
    describe('GIVEN method is called with valid string "12|12|12" THEN return proper class string', () => {
        Given(() => {
            fakeString = '12|12|12';
        });
        Then(() => {
            expect(getClassFromSize(fakeString)).toEqual('col-lg-12 col-md-12 col-sm-12');
        });
    });

    describe('GIVEN method is called with INVALID string THEN return undefined', () => {
        Given(() => {
            fakeString = 'invalid string';
        });
        Then(() => {
            expect(getClassFromSize(fakeString)).toEqual(undefined);
        });
    });
    describe('GIVEN method is called with no data THEN return undefined', () => {
        Given(() => {
            fakeString = undefined;
        });
        Then(() => {
            expect(getClassFromSize(fakeString)).toEqual(undefined);
        });
    });
});
