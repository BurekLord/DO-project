import { ReminderConverter } from '../reminder/reminder.model';
import { LabelConverter } from '../label/label.model';
import { ShortUserConverter } from './../shortUser/shortUser.model';
import { ShortUser } from '../shortUser/shortUser.model';
import { Label } from '../label/label.model';
import { Reminder } from '../reminder/reminder.model';
import { BaseConverter } from '../../shared/core/base-converter/base-converter';
export class Task {
    constructor(
        public id?: string,
        public title?: string,
        public creator?: ShortUser,
        public assignee?: ShortUser,
        public projectId?: string[],
        public createdOn?: string,
        public updatedOn?: string,
        public watchers?: ShortUser[],
        public description?: string,
        public items?: Label[], // files, images etc
        public startDate?: string,
        public dueDate?: string,
        public estimatedTime?: string,
        public spentTime?: string,
        public status?: Label,
        public reminders?: Reminder[],
        public subTasks?: Task[],
        public likes?: number,
        public priority?: Label,
        public done?: boolean,
        public tags?: Label[],
        public notifications?: number,
        public availability?: 'public' | 'private',
        public customFields?: any[] // TODO: not sure about this yet...
    ) { }
}

export interface TaskDTO {
    id?: string;
    title?: string;
    creator?: ShortUser;
    assignee?: ShortUser;
    projectId?: string[];
    createdOn?: string;
    updatedOn?: string;
    watchers?: ShortUser[];
    description?: string;
    items?: Label[];
    startDate?: string;
    dueDate?: string;
    estimatedTime?: string;
    spentTime?: string;
    status?: Label;
    reminders?: Reminder[];
    subTasks?: Task[];
    likes?: number;
    priority?: Label;
    done?: boolean;
    tags?: Label[];
    notifications?: number;
    availability?: 'public' | 'private';
    customFields?: any[];
}

export class TaskConverter extends BaseConverter<Task, TaskDTO> {

    shortUserConverter = new ShortUserConverter();
    labelConverter = new LabelConverter();
    reminderConverter = new ReminderConverter();

    convertToModel(dto: TaskDTO): Task {
        let model: Task;
        if (dto) {
            model = new Task();
            model.id = dto.id;
            model.title = dto.title;
            model.creator = this.shortUserConverter.convertToModel(dto.creator);
            model.assignee = this.shortUserConverter.convertToModel(dto.assignee);
            model.projectId = dto.projectId;
            model.createdOn = dto.createdOn;
            model.updatedOn = dto.updatedOn;
            model.watchers = this.shortUserConverter.convertToModelList(dto.watchers);
            model.description = dto.description;
            model.items = this.labelConverter.convertToModelList(dto.items);
            model.startDate = dto.startDate;
            model.dueDate = dto.dueDate;
            model.estimatedTime = dto.estimatedTime;
            model.spentTime = dto.spentTime;
            model.status = this.labelConverter.convertToModel(dto.status);
            model.reminders = this.reminderConverter.convertToModelList(dto.reminders);
            model.subTasks = this.convertToModelList(dto.subTasks);
            model.likes = dto.likes;
            model.priority = this.labelConverter.convertToModel(dto.priority);
            model.done = dto.done;
            model.tags = this.labelConverter.convertToModelList(dto.tags);
            model.notifications = dto.notifications;
            model.availability = dto.availability;
            model.customFields = dto.customFields;
            return model;
        }
    }

    convertToDTO(model: Task): TaskDTO {
        if (model) {
            return {
                id: model.id,
                title: model.title,
                creator: this.shortUserConverter.convertToDTO(model.creator),
                assignee: this.shortUserConverter.convertToDTO(model.assignee),
                projectId: model.projectId,
                createdOn: model.createdOn,
                updatedOn: model.updatedOn,
                watchers: this.shortUserConverter.convertToDTOList(model.watchers),
                description: model.description,
                items: this.labelConverter.convertToDTOList(model.items),
                startDate: model.startDate,
                dueDate: model.dueDate,
                estimatedTime: model.estimatedTime,
                spentTime: model.spentTime,
                status: this.labelConverter.convertToDTO(model.status),
                reminders: this.reminderConverter.convertToDTOList(model.reminders),
                subTasks: this.convertToDTOList(model.subTasks),
                likes: model.likes,
                priority: this.labelConverter.convertToDTO(model.priority),
                done: model.done,
                tags: this.labelConverter.convertToDTOList(model.tags),
                notifications: model.notifications,
                availability: model.availability,
                customFields: model.customFields,
            } as TaskDTO;
        }
    }
}
