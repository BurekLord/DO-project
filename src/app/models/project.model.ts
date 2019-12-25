import { ShortUser } from './shortUser.model';
import { Section } from './section.model';
import { Label } from './label.model';
import { Task } from './task.model';
export class Project {
    constructor(
        public id?: string,
        public title?: Label,
        public tasks?: Task[],
        public users?: ShortUser[],
        public creator?: ShortUser,
        public description?: string,
        public priority?: Label,
        public projectLabels?: Label[], // there should be some default
        public availability?: 'public' | 'private',
    ) { }
}
