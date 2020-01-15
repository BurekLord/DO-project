export abstract class BaseConverter<M, D> {
    abstract convertToModel(dto: D): M;
    abstract convertToDTO(model: M): D;

    convertToModelList(dto: D[]): M[] {
        let modelList;
        if (dto && dto.length > 0) {
            modelList = [];
            dto.forEach(el => {
                modelList.push(this.convertToModel(el));
            });
            return modelList;
        }
    }
    convertToDTOList(model: M[]): D[] {
        let dtoList;
        if (model && model.length > 0) {
            dtoList = [];
            model.forEach(el => {
                dtoList.push(this.convertToDTO(el));
            });
            return dtoList;
        }
    }
}
