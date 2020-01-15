import { BaseConverter } from '../../shared/core/base-converter/base-converter';

export class Reminder {
    constructor(
        public title?: string,
        public text?: string,
        public time?: string
    ) { }
}

export interface ReminderDTO {
    title?: string;
    text?: string;
    time?: string;
}

export class ReminderConverter extends BaseConverter<Reminder, ReminderDTO> {
    convertToModel(dto: ReminderDTO) {
        let model: Reminder;
        if (dto) {
            model = new Reminder();
            model.text = dto.text;
            model.time = dto.time;
            model.title = dto.title;
            return model;
        }
    }

    convertToDTO(model: Reminder) {
        if (model) {
            return {
                title: model.title,
                text: model.text,
                time: model.time
            } as ReminderDTO;
        }
    }
}
