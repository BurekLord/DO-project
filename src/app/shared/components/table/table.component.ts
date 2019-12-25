import { Subject } from 'rxjs';
import { Task } from './../../../models/task.model';
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { getRandomColor } from '../../core/utils';

@Component({
    selector: 'do-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {

    dataSourceSubject: Subject<any> = new Subject();

    @Input() displayedColumns: string[];
    @Input() set dataSource(data: Task[]) {
        if (data) {
            this.generateRandomColors(data);
            this.dataSourceSubject.next(data);
        }
    }

    $dataSource = new MatTableDataSource<Task>();
    localData: Task[];

    currentRow: Task;
    currentCol: string;
    currentValue: any;

    titleEdited = false;
    titleTooltipText: string;

    taskPlaceholder1: Task;
    taskPlaceholder2: Task;

    constructor(private router: Router, private cd: ChangeDetectorRef) {
        this.taskPlaceholder1 = new Task(
            'placeholder1', null, null, null,
            null, null, null, null, null,
            null, null, null, null, null,
            null, null, null, null, null,
            null, null, null, null);
        this.taskPlaceholder2 = new Task(
            'placeholder2', null, null, null, null,
            null, null, null, null, null,
            null, null, null, null, null, null, null,
            null, null, null, null, null, null);

        this.$dataSource.data = [this.taskPlaceholder1, this.taskPlaceholder2];
        this.dataSourceSubject.subscribe(data => {
            this.$dataSource.data.unshift(...data);
            this.localData = this.$dataSource.data;
        });
    }

    selectRow(task: Task) {
        this.currentRow = task;
        this.clearNotificationsForTask(task);

        // TODO: open task detail page on the side
        // this.router.navigate(['/user/project/', task.id]);
    }

    selectCell(col, value) {
        this.titleEdited = false;
        if (value) {
            this.currentCol = col;
            this.currentValue = value;
        } else {
            this.currentCol = undefined;
            this.currentValue = undefined;
        }
    }

    updateTitleData(event, index, value) {
        // TODO: update DB also or emit data to parent
        if (event.key === 'Enter') {
            this.$dataSource.data[index].title = value;
            this.titleEdited = true;
            return;
        }
    }

    focusoutSave(index, value) {
        this.$dataSource.data[index].title = value;
        this.titleEdited = true;
    }


    clearNotificationsForTask(task: Task) {
        // TODO: update DB or emit data to parent
        this.$dataSource.data[this.$dataSource.data.indexOf(task)].notifications = undefined;

    }

    removeUserFromTask(task: Task) {
        // TODO: update DB or emit data to parent
        this.$dataSource.data[this.$dataSource.data.indexOf(task)].assignee = undefined;
    }

    getUserInitials(name: string) {
        const temp = name.split(' ');
        return (temp[0][0] + temp[1][0]).toUpperCase();
    }

    generateRandomColors(tasks: Task[]) {
        tasks.forEach(task => {
            if (!task.assignee.imgUrl) {
                task.assignee.imgUrl = getRandomColor();
            }
        });
    }

    isCurrentCellActive(colName, value) {
        return this.currentValue === value && this.currentCol === colName;
    }

}
