import { TaskService } from './../services/task.service';
import { Subject } from 'rxjs';
import { Task } from '../models/task/task.model';
import { TooltipModel } from './../shared/models/tooltip.model';
import { ErrorLabel } from './../shared/models/error-label.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ShortUser } from '../models/shortUser/shortUser.model';
import { getRandomColor } from '../shared/core/utils';

@Component({
    selector: 'do-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

    // TABLE
    displayedColumns: string[] = ['title', 'assignee', 'dueDate', 'priority', 'tags'];
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

    constructor(private router: Router, private taskService: TaskService) { }

    ngOnInit() {
        // TODO: fix mock user id
        this.taskService.getAllTasksForUser('1').subscribe(tasks => {
            tasks.forEach(task => {
                if (task.assignee && !task.assignee.imgUrl) {
                    task.assignee.color = getRandomColor();
                }
            });
            this.dataSource = tasks;
        });
    }

    // BUTTON
    navigateToHome() {
        this.router.navigate(['']);
    }



}
