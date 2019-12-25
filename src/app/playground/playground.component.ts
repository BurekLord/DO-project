import { Task } from './../models/task.model';
import { TooltipModel } from './../shared/models/tooltip.model';
import { ErrorLabel } from './../shared/models/error-label.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ShortUser } from '../models/shortUser.model';

@Component({
    selector: 'do-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

    // TABLE
    displayedColumns: string[] = ['title', 'assignee', 'dueDate', 'priority', 'tags'];
    dataSource: Task[] = [
        new Task('1', 'Test', null, new ShortUser('1', 'me i', null), null, null, null, null, null, null, null, null, null, null, null, null, [new Task('asd', 'subtask')], 4, null, null, null, 2),
        new Task('2', 'Test2', null, new ShortUser('2', 'mini me', 'url')),
    ];

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

    // BUTTON
    navigateToHome() {
        this.router.navigate(['']);
    }



}
