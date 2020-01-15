import { createSpyFromClass } from 'jasmine-auto-spies';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';
import { TestBed } from '@angular/core/testing';

describe('TaskService', () => {
    let serviceUnderTest: TaskService;
    // TODO: create tests for this
    Given(() => {
        TestBed.configureTestingModule({
            providers: [TaskService, { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }]
        });
        serviceUnderTest = TestBed.get(TaskService);
    });
});
