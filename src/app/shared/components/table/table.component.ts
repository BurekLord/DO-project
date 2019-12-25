import { Subject } from 'rxjs';
import { Task } from './../../../models/task.model';
import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { ShortUser } from 'src/app/models/shortUser.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'do-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    dataSourceSubject: Subject<any> = new Subject();

    @Input() displayedColumns: string[];
    @Input() set dataSource(data: any) {
        if (data) {
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

    constructor() {
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

    ngOnInit() {
        // TODO:
    }

    selectRow(row: Task) {
        this.currentRow = row;
        this.clearNotificationsForTask(row);

        // TODO: open task detail
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

    clearNotificationsForTask(row: Task) {
        // TODO: update DB or emit data to parent
        this.$dataSource.data[this.$dataSource.data.indexOf(row)].notifications = undefined;
    }

    isCurrentCellActive(colName, value) {
        return this.currentValue === value && this.currentCol === colName;
    }

}
