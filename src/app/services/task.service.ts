import { map } from 'rxjs/operators';
import { Task, TaskDTO, TaskConverter } from '../models/task/task.model';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    taskConverter = new TaskConverter();

    constructor(private http: HttpClient) { }

    getAllTasksForUser(userId: string): Observable<Task[]> {
        return this.http.get<Task[]>(environment.baseUrl + '/tasks?assignee.userId=' + userId)
            .pipe(map((response: TaskDTO[]) => this.taskConverter.convertToModelList(response)));
    }
}
