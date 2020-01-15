import { BaseConverter } from 'src/app/shared/core/base-converter/base-converter';

export class ShortUser {
    constructor(
        public userId?: string,
        public name?: string,
        public imgUrl?: string,
        public color?: string
    ) { }
}

export interface ShortUserDTO {
    userId?: string;
    name?: string;
    imgUrl?: string;
    color?: string;
}

export class ShortUserConverter extends BaseConverter<ShortUser, ShortUserDTO> {

    convertToModel(dto: ShortUserDTO) {
        let model: ShortUser;
        if (dto) {
            model = new ShortUser();
            model.userId = dto.userId;
            model.name = dto.name;
            model.imgUrl = dto.imgUrl;
            model.color = dto.color;
            return model;
        }
    }

    convertToDTO(model: ShortUser) {
        if (model) {
            return {
                userId: model.userId,
                name: model.name,
                imgUrl: model.imgUrl,
                color: model.color,
            } as ShortUserDTO;
        }
    }
}
