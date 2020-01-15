import { BaseConverter } from '../../shared/core/base-converter/base-converter';
import { jsonIsEmpty } from 'src/app/shared/core/utils';

export class Label {
    constructor(
        public text?: string,
        public icon?: string, // there should be some default list to chose from
        public color?: string // hex
    ) { }
}

export interface LabelDTO {
    text?: string;
    icon?: string; // there should be some default list to chose from
    color?: string;
}

export class LabelConverter extends BaseConverter<Label, LabelDTO> {
    convertToModel(dto: LabelDTO) {
        let model: Label;
        if (dto && !jsonIsEmpty(dto)) {
            model = new Label();
            model.text = dto.text;
            model.icon = dto.icon;
            model.color = dto.color;
            return model;
        }
    }
    convertToDTO(model: Label) {
        if (model && !jsonIsEmpty(model)) {
            return {
                text: model.text,
                icon: model.icon,
                color: model.color
            };
        }
    }


}
