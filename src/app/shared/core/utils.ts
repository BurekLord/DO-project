import { isDevMode } from '@angular/core';
export const sizeClassRegex = /^(([1-9][1-9]|[1-9])\|([1-9][1-9]|[1-9])\|([1-9][1-9]|[1-9]))|(([1-9][1-9]|[1-9])\|([1-9][1-9]|[1-9])\|([1-9][1-9]|[1-9])\|([1-9][1-9]|[1-9]))$/;
export function getClassFromSize(size: string): string {
    if (size && size !== '' && size.match(sizeClassRegex)) {
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
                if (splitSize.length < 4) {
                    classString += `col-sm-${el}`;
                } else {
                    classString += `col-sm-${el} `;
                }
            }
            if (index === 3) {
                classString += `col-xs-${el}`;
            }
        });
        return classString;
    } else if (isDevMode()) {
        console.log(`%cInput proper size format:` + `
    %c"12|12|12|12" where 12 is a number from 1 to 12
    it will be replaced
    col-lg-12 col-md-12 col-sm-12 col-xs-12
    or "12|12|12" to omit col-xs-xx`, 'color: #FF3207', 'color: #12FF07');
        return undefined;
    } else {
        return undefined;
    }
}

export function log(text: string, objToLog?: any) {
    if (isDevMode()) {
        console.log(text, objToLog);
    } else {
        return;
    }
}



