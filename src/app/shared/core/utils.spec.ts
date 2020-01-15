import { getClassFromSize, jsonIsEmpty, getInitials, abbreviateString, getRandomColor, log } from './utils';

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

    describe('METHOD: jsonIsEmpty', () => {
        let result: boolean;
        let fakeModel: any;

        When(() => {
            result = jsonIsEmpty(fakeModel);
        });
        describe('GIVEN model is {} THEN return true', () => {
            Given(() => {
                fakeModel = {};
            });
            Then(() => {
                expect(result).toBeTruthy();
            });
        });
        describe('GIVEN model has keys but is is empty THEN return true', () => {
            Given(() => {
                fakeModel = { fakeKey: undefined, fakeKey2: null };
            });
            Then(() => {
                expect(result).toBeTruthy();
            });
        });
        describe('GIVEN model has data THEN return false', () => {
            Given(() => {
                fakeModel = { fakeKey: 'asd', fakeKey2: null };
            });
            Then(() => {
                expect(result).toBeFalsy();
            });
        });
        describe('GIVEN model has data THEN return false', () => {
            Given(() => {
                fakeModel = { fakeKey: 'asd', fakeKey2: 'asd' };
            });
            Then(() => {
                expect(result).toBeFalsy();
            });
        });
        describe('GIVEN model is null THEN return false', () => {
            Given(() => {
                fakeModel = null;
            });
            Then(() => {
                expect(result).toBeTruthy();
            });
        });
    });

    describe('METHOD: getInitials', () => {
        let fakeResult: any;
        let fakeName: string;
        When(() => {
            fakeResult = getInitials(fakeName);
        });

        describe('GIVEN there is a name THEN extract initials', () => {
            Given(() => {
                fakeName = 'Mile Ignjatovic';
            });
            Then(() => {
                expect(fakeResult).toEqual('MI');
            });
        });
        describe('GIVEN there is no data THEN return undefined', () => {
            Given(() => {
                fakeName = undefined;
            });
            Then(() => {
                expect(fakeResult).toBeFalsy();
            });
        });
    });

    describe('METHOD: abbreviateString', () => {
        let fakeResult: string;
        let fakeName: string;
        let fakeLength: number;
        When(() => {
            fakeResult = abbreviateString(fakeName, fakeLength);
        });

        describe('GIVEN there is a valid name input THEN it should shorten the name and add ...', () => {
            Given(() => {
                fakeName = 'Mile Ignjatovic';
                fakeLength = 8;
            });
            Then(() => {
                expect(fakeResult).toEqual('Mile Ign...');
            });
        });
        describe('GIVEN there is a valid name input and its shorter then length THEN it should return the name', () => {
            Given(() => {
                fakeName = 'Mile I';
                fakeLength = 8;
            });
            Then(() => {
                expect(fakeResult).toEqual(fakeName);
            });
        });
        describe('GIVEN there is no input THEN it should return undefined', () => {
            Given(() => {
                fakeName = undefined;
                fakeLength = 8;
            });
            Then(() => {
                expect(fakeResult).toBeFalsy();
            });
        });
    });

    describe('METHOD: getRandomColor', () => {
        let fakeResult: string;
        When(() => {
            fakeResult = getRandomColor();
        });

        describe('GIVEN we call the func THEN it should return a string with # and six more characters', () => {
            Then(() => {
                expect(fakeResult.length).toEqual(7);
            });
        });
    });
});
