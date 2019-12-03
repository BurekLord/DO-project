import { createSpyFromClass } from 'jasmine-auto-spies';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from './../../shared/shared.module';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
    let componentUnderTest: HomeComponent;

    Given(() => {
        TestBed.configureTestingModule({
            providers: [HomeComponent, { provide: TranslateService, useValue: createSpyFromClass(TranslateService) }],
            imports: [SharedModule]
        });
        componentUnderTest = TestBed.get(HomeComponent);
    });

    describe('INIT', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
