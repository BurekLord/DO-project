import { Subject } from 'rxjs';
import { Task } from './../../../models/task.model';
import { Component, OnInit, Input } from '@angular/core';
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

    currentRow: Task;
    currentCol: string;
    currentValue: any;

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
        });
    }

    ngOnInit() {
        // TODO:
    }

    selectRow(row) {
        this.currentRow = row;
    }

    selectCell(col, value) {
        if (value) {
            this.currentCol = col;
            this.currentValue = value;
        } else {
            this.currentCol = undefined;
            this.currentValue = undefined;
        }
    }

}
