export function getClassFromSize(size: string): string {
    const splitSize: string[] = size.split('|');
    let classString = '';
    splitSize.forEach((el, index) => {
        if (index === 0) {
            classString += `col-lg-${el} `;
        }
        if (index === 1) {
            classString += `col-md-${el} `;
        }
        if (index === 2) {
            classString += `col-sm-${el} `;
        }
        if (index === 3) {
            classString += `col-xs-${el}`;
        }
    });
    return classString;
}

export function getBtnTypeClass(type: string): string {
    return `btn-${type}`;
}
