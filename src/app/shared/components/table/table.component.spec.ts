import { Task } from '../../../models/task/task.model';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { TableComponent } from './table.component';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

describe('TableComponent', () => {
    let componentUnderTest: TableComponent;
    let fakeTask: any;
    let fakeCol: any;
    let fakeValue: any;
    let fakeEvent: any;
    let fakeIndex: any;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [TableComponent, { provide: Router, useValue: createSpyFromClass(Router) }]
        });
        componentUnderTest = TestBed.get(TableComponent);
    });

    describe('INIT:', () => {
        Then(() => {
            expect(componentUnderTest.dataSourceSubject.closed).toBeFalsy();
        });
    });

    describe('METHOD: selectRow', () => {
        When(() => {
            componentUnderTest.selectRow(fakeTask);
        });
        describe('GIVEN called with valid data THEN cmpUnderTest equals data', () => {
            Given(() => {
                fakeTask = new Task('1', 'fake task');
            });
            Then(() => {
                expect(componentUnderTest.currentRow).toEqual(fakeTask);
            });
        });
    });

    describe('METHOD: clearNotificationsForTask', () => {
        When(() => {
            componentUnderTest.clearNotificationsForTask(fakeTask);
        });

        // tslint:disable-next-line: max-line-length
        describe('GIVEN data is valid and exists withing dataSource.data array THEN set its notifications to undefined', () => {
            Given(() => {
                componentUnderTest.$dataSource = new MatTableDataSource<Task>();
                fakeTask = new Task('1', 'fake task');
                componentUnderTest.$dataSource.data = [fakeTask];
            });
            Then(() => {
                expect(
                    componentUnderTest.$dataSource.data[0].notifications
                ).toBeFalsy();
            });
        });
    });

    describe('METHOD: selectCell', () => {
        When(() => {
            componentUnderTest.selectCell(fakeCol, fakeValue);
        });
        describe('GIVEN there is value THEN set currentCol and currentValue props and titleEdited is false', () => {
            Given(() => {
                fakeCol = 'title';
                fakeValue = 'fake';
            });
            Then(() => {
                expect(componentUnderTest.titleEdited).toBeFalsy();
                expect(componentUnderTest.currentCol).toEqual(fakeCol);
                expect(componentUnderTest.currentValue).toEqual(fakeValue);
            });
        });
        // tslint:disable-next-line: max-line-length
        describe('GIVEN there is no value THEN set currentCol and currentValue props to undefined and titleEdited is false', () => {
            Given(() => {
                fakeCol = 'title';
                fakeValue = undefined;
            });
            Then(() => {
                expect(componentUnderTest.titleEdited).toBeFalsy();
                expect(componentUnderTest.currentCol).toEqual(undefined);
                expect(componentUnderTest.currentValue).toEqual(undefined);
            });
        });
    });

    describe('METHOD: updateTitleData', () => {
        When(() => {
            componentUnderTest.updateTitleData(fakeEvent, fakeIndex, fakeValue);
        });

        Given(() => {
            componentUnderTest.$dataSource = new MatTableDataSource<Task>();
            componentUnderTest.$dataSource.data = [new Task('1', 'old title')];
        });

        // tslint:disable-next-line: max-line-length
        describe('GIVEN event is enter, there is index and value THEN $dataSource.data[fakeIndex].title should be changed with new value', () => {
            Given(() => {
                fakeEvent = { key: 'Enter' };
                fakeIndex = 0;
                fakeValue = 'new Title';
            });
            Then(() => {
                expect(componentUnderTest.$dataSource.data[fakeIndex].title).toEqual(fakeValue);
            });
        });
        describe('GIVEN event is not enter THEN nothing should happen', () => {
            Given(() => {
                fakeEvent = undefined;
                fakeIndex = 0;
                fakeValue = 'new Title';
            });
            Then(() => {
                expect(componentUnderTest.$dataSource.data[fakeIndex].title).toEqual(
                    componentUnderTest.$dataSource.data[fakeIndex].title
                );
            });
        });
    });

    describe('METHOD: focusoutSave', () => {
        When(() => {
            componentUnderTest.focusoutSave(fakeIndex, fakeValue);
        });

        Given(() => {
            componentUnderTest.$dataSource = new MatTableDataSource<Task>();
            componentUnderTest.$dataSource.data = [new Task('1', 'old title')];
        });

        // tslint:disable-next-line: max-line-length
        describe('GIVEN there is index and value THEN set $dataSource.data[fakeIndex].title to new value and titleEdited to true', () => {
            Given(() => {
                fakeIndex = 0;
                fakeValue = 'new Title';
            });
            Then(() => {
                expect(componentUnderTest.$dataSource.data[fakeIndex].title).toEqual(fakeValue);
                expect(componentUnderTest.titleEdited).toBeTruthy();
            });
        });
    });

    describe('METHOD: removeUserFromTask', () => {
        When(() => {
            componentUnderTest.removeUserFromTask(fakeTask);
        });

        // tslint:disable-next-line: max-line-length
        describe('GIVEN data is valid and exists withing dataSource.data array THEN set its assignee to undefined', () => {
            Given(() => {
                componentUnderTest.$dataSource = new MatTableDataSource<Task>();
                fakeTask = new Task('1', 'fake task');
                componentUnderTest.$dataSource.data = [fakeTask];
            });
            Then(() => {
                expect(
                    componentUnderTest.$dataSource.data[0].assignee
                ).toBeFalsy();
            });
        });
    });

    describe('METHOD: getUserInitials', () => {
        describe('GIVEN name is passed THEN should return user initials string', () => {
            Given(() => {
                fakeValue = 'Mile Ignjatovic';
            });
            Then(() => {
                expect(componentUnderTest.getUserInitials(fakeValue)).toEqual('MI');
            });
        });
        describe('GIVEN falsy value is passed THEN should return undefined', () => {
            Given(() => {
                fakeValue = undefined;
            });
            Then(() => {
                expect(componentUnderTest.getUserInitials(fakeValue)).toBeFalsy();
            });
        });
    });

    describe('METHOD: abbreviateString', () => {
        // tslint:disable-next-line: max-line-length
        describe('GIVEN name is passed and is longer then fakeIndex THEN name should be abbreviated for index length', () => {
            Given(() => {
                fakeValue = 'Mile Ignjatovic';
                fakeIndex = 8;
            });
            Then(() => {
                expect(componentUnderTest.abbreviateString(fakeValue, fakeIndex)).toEqual('Mile Ign...');
            });
        });
        // tslint:disable-next-line: max-line-length
        describe('GIVEN name is passed and is shorter then fakeIndex THEN return name', () => {
            Given(() => {
                fakeValue = 'Mile';
                fakeIndex = 8;
            });
            Then(() => {
                expect(componentUnderTest.abbreviateString(fakeValue, fakeIndex)).toEqual('Mile');
            });
        });
        // tslint:disable-next-line: max-line-length
        describe('GIVEN name undefined THEN return undefined', () => {
            Given(() => {
                fakeValue = undefined;
                fakeIndex = 8;
            });
            Then(() => {
                expect(componentUnderTest.abbreviateString(fakeValue, fakeIndex)).toBeFalsy();
            });
        });
    });

    describe('METHOD: isCurrentCellActive', () => {
        // tslint:disable-next-line: max-line-length
        describe('GIVEN colName and value THEN return true if colName === currentCol and value === currentValue', () => {
            Given(() => {
                fakeCol = 'title';
                fakeValue = 'fake';
                componentUnderTest.currentValue = fakeValue;
                componentUnderTest.currentCol = fakeCol;
            });
            Then(() => {
                expect(componentUnderTest.isCurrentCellActive(fakeCol, fakeValue)).toBeTruthy();
            });
        });
        // tslint:disable-next-line: max-line-length
        describe('GIVEN colName and value THEN return false if colName !== currentCol and value === currentValue', () => {
            Given(() => {
                fakeCol = 'title';
                fakeValue = 'fake';
                componentUnderTest.currentValue = fakeValue;
                componentUnderTest.currentCol = 'false';
            });
            Then(() => {
                expect(componentUnderTest.isCurrentCellActive(fakeCol, fakeValue)).toBeFalsy();
            });
        });
        // tslint:disable-next-line: max-line-length
        describe('GIVEN colName and value THEN return false if colName === currentCol and value !== currentValue', () => {
            Given(() => {
                fakeCol = 'title';
                fakeValue = 'fake';
                componentUnderTest.currentValue = 'false';
                componentUnderTest.currentCol = fakeCol;
            });
            Then(() => {
                expect(componentUnderTest.isCurrentCellActive(fakeCol, fakeValue)).toBeFalsy();
            });
        });
        // tslint:disable-next-line: max-line-length
        describe('GIVEN colName and value THEN return false if colName !== currentCol and value !== currentValue', () => {
            Given(() => {
                fakeCol = 'title';
                fakeValue = 'fake';
                componentUnderTest.currentValue = 'false';
                componentUnderTest.currentCol = 'false';
            });
            Then(() => {
                expect(componentUnderTest.isCurrentCellActive(fakeCol, fakeValue)).toBeFalsy();
            });
        });
        describe('GIVEN no colName and value THEN return false', () => {
            Given(() => {
                fakeCol = undefined;
                fakeValue = 'fake';
                componentUnderTest.currentValue = fakeCol;
                componentUnderTest.currentCol = fakeValue;
            });
            Then(() => {
                expect(componentUnderTest.isCurrentCellActive(fakeCol, fakeValue)).toBeFalsy();
            });
        });
        describe('GIVEN no value and value THEN return false', () => {
            Given(() => {
                fakeCol = 'fake';
                fakeValue = undefined;
                componentUnderTest.currentValue = fakeCol;
                componentUnderTest.currentCol = fakeValue;
            });
            Then(() => {
                expect(componentUnderTest.isCurrentCellActive(fakeCol, fakeValue)).toBeFalsy();
            });
        });
        describe('GIVEN no value and no colName and value THEN return false', () => {
            Given(() => {
                fakeCol = undefined;
                fakeValue = undefined;
                componentUnderTest.currentValue = fakeCol;
                componentUnderTest.currentCol = fakeValue;
            });
            Then(() => {
                expect(componentUnderTest.isCurrentCellActive(fakeCol, fakeValue)).toBeFalsy();
            });
        });
    });
});

