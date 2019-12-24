import { Section } from './section.model';
import { ShortUser } from './shortUser.model';
import { Label } from './label.model';
import { Reminder } from './reminder.model';
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
        public subTaskIds?: (Task | Section)[],
        public likes?: number,
        public priority?: Label,
        public done?: boolean,
        public tags?: Label[],
        public availability?: 'public' | 'private',
        public customFields?: any[] // TODO: not sure about this yet...
    ) { }
}
