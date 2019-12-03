import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';

describe('AppComponent', () => {

    let componentUnderTest: AppComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [AppComponent, { provide: TranslateService, useValue: createSpyFromClass(TranslateService) }]
        });

        componentUnderTest = TestBed.get(AppComponent);
    });

    describe('INIT: ', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
