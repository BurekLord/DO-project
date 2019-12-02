import { Input } from '@angular/core';
import { getClassFromSize } from './utils';

export class BaseElement {
    @Input() set size(value: string) {
        if (value) {
            this.sizeClass = getClassFromSize(value);
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

    sizeClass: string;
    subElementSizeClass: string;
    labelSizeClass: string;
}
