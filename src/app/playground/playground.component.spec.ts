import { TaskService } from './../services/task.service';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { PlaygroundComponent } from './playground.component';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('PlaygroundComponent', () => {
    let componentUnderTest: PlaygroundComponent;
    // TODO: maybe write tests for this
    Given(() => {
        TestBed.configureTestingModule({
            providers: [PlaygroundComponent,
                { provide: Router, useValue: createSpyFromClass(Router) },
                { provide: TaskService, useValue: createSpyFromClass(TaskService) }
            ]
        });
        componentUnderTest = TestBed.get(PlaygroundComponent);
    });

    describe('Unit under test: ', () => {
        Then(() => {
            expect(componentUnderTest).toBeTruthy();
        });
    });
});
