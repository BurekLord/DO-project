import { Subject } from 'rxjs';
import { Task } from './../models/task.model';
import { TooltipModel } from './../shared/models/tooltip.model';
import { ErrorLabel } from './../shared/models/error-label.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ShortUser } from '../models/shortUser.model';
import { getRandomColor } from '../shared/core/utils';

@Component({
    selector: 'do-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

    // TABLE
    displayedColumns: string[] = ['title', 'assignee', 'dueDate', 'priority', 'tags'];
    dataFromDb: Subject<Task[]> = new Subject();
    dataSource: Task[];

    // INPUT
    formControlTest =
        new FormControl('test', [Validators.required, Validators.maxLength(1), Validators.pattern('[a-zA-Z ]*')]);
    errorLabels = [
        new ErrorLabel('maxlength', 'Must be shorter then 1;', false, ''),
        new ErrorLabel('pattern', 'Must a letter char;', false, ''),
        new ErrorLabel('required', 'field is required;', false, '')
    ];

    tooltip = new TooltipModel('tooltip content', 'tooltip title');

    constructor(private router: Router) { }

    ngOnInit() {
        // TODO: this should be done in the service that calls the BE for task list
        this.dataFromDb.subscribe(data => {
            console.log('asd');
            data.forEach(task => {
                if (task.assignee && !task.assignee.imgUrl) {
                    task.assignee.color = getRandomColor();
                }
            });
            this.dataSource = data;
        });
        this.dataFromDb.next([
            new Task('1', 'Test', null,
                new ShortUser('1', 'me isssssssssssssss', null),
                null, null, null, null, null, null, null, null, null, null, null, null,
                [new Task('asd', 'subtask')], 4, null, null, null, 2),
            new Task('2', 'Test2', null, new ShortUser('2', 'mini me',
                'https://2.bp.blogspot.com/-8P_iI3YueO0/T73feHn5VSI/AAAAAAAAAiw/N5N3HmVmk9I/s320/6a00d834516a0869e2016760f339c3970b-800wi.jpg')),
        ]);
    }

    // BUTTON
    navigateToHome() {
        this.router.navigate(['']);
    }



}
