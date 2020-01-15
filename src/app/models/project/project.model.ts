import { ShortUserConverter } from './../shortUser/shortUser.model';
import { LabelConverter } from './../label.model';
import { jsonIsEmpty } from 'src/app/shared/core/utils';
import { ShortUser } from '../shortUser/shortUser.model';
import { Label } from '../label/label.model';
import { Task } from '../task/task.model';
import { BaseConverter } from 'src/app/shared/core/base-converter/base-converter';
export class Project {
    constructor(
        public id?: string,
        public title?: Label,
        public taskIds?: string[],
        public users?: ShortUser[],
        public creator?: ShortUser,
        public description?: string,
        public priority?: Label,
        public projectLabels?: Label[], // there should be some default
        public availability?: 'public' | 'private',
    ) { }
}

export interface ProjectDTO {
    id: string;
    title: Label;
    taskIds: string[];
    users: ShortUser[];
    creator: ShortUser;
    description: string;
    priority: Label;
    projectLabels: Label[];
    availability: 'public' | 'private';
}

export class ProjectConverter extends BaseConverter<Project, ProjectDTO> {
    labelConverter = new LabelConverter();
    shortUserConverter = new ShortUserConverter();
    convertToModel(dto: ProjectDTO): Project {
        let model: Project;
        if (dto && !jsonIsEmpty(dto)) {
            model = new Project();
            model.id = dto.id;
            model.title = this.labelConverter.convertToModel(dto.title);
            model.taskIds = dto.taskIds;
            model.users = this.shortUserConverter.convertToModelList(dto.users);
            model.creator = this.shortUserConverter.convertToModel(dto.creator);
            model.description = dto.description;
            model.priority = this.labelConverter.convertToModel(dto.priority);
            model.projectLabels = this.labelConverter.convertToModelList(dto.projectLabels);
            model.availability = dto.availability;
            return model;
        }
    }

    convertToDTO(model: Project): ProjectDTO {
        if (model && !jsonIsEmpty(model)) {
            return {
                id: model.id,
                title: this.labelConverter.convertToDTO(model.title),
                taskIds: model.taskIds,
                users: this.shortUserConverter.convertToModelList(model.users),
                creator: this.shortUserConverter.convertToModel(model.creator),
                description: model.description,
                priority: this.labelConverter.convertToDTO(model.priority),
                projectLabels: this.labelConverter.convertToDTOList(model.projectLabels),
                availability: model.availability,
            }
        }
    }


}