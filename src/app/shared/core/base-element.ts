import { Input } from '@angular/core';
import { getClassFromSize } from './utils';
import { isDevMode } from '@angular/core';

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
    @Input() set errorMessageSize(value: string) {
        if (value) {
            this.errorMessageSizeClass = getClassFromSize(value);
        }
    }

    @Input() disabled: boolean;

    sizeClass: string;
    subElementSizeClass: string;
    labelSizeClass: string;
    errorMessageSizeClass: string;

    isDevMode: boolean;

    constructor() {
        this.isDevMode = isDevMode();
    }

}
