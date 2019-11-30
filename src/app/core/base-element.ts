import { Input } from '@angular/core';
import { getClassFromSize } from './utils';

export class BaseElement {
    @Input() set size(value: string) {
        value = '12|12|1fd'
        if (value) {
            console.log('regex', value.match(this.regExp));
            if (value.match(this.regExp)) {
                console.log('regex2', value.match(this.regExp));
                this.sizeClass = getClassFromSize(value);
            }
        }
    }
    @Input() set subElementSize(value: string) {
        if (value) {
            this.subElementSizeClass = getClassFromSize(value);
        }
    }
    @Input() set labelSize(value: string) {
        if (value) {
            this.labelSizeClass = getClassFromSize(value);
        }
    }

    regExp = /([1-9][1-9]\|[1-9][1-9]\|[1-9][1-9])|([1-9][1-9]\|[1-9][1-9]\||[1-9][1-9]\|[1-9][1-9])/;

    sizeClass: string;
    subElementSizeClass: string;
    labelSizeClass: string;
}
