import { Input } from '@angular/core';
import { getClassFromSize } from './utils';
import { isDevMode } from '@angular/core';

export class BaseElement {
    sizeClass: string;
    subElementSizeClass: string;
    labelSizeClass: string;
    errorMessageSizeClass: string;

    isDevMode: boolean;

    constructor(
        public size?: string,
        public subElementSize?: string,
        public labelSize?: string,
        public errorMessageSize?: string
    ) {
        this.setUpSizeClass(size);
        this.setupSubElementSizeClass(subElementSize);
        this.setUpLabelSizeClass(labelSize);
        this.setUpErrorMessageSizeClass(errorMessageSize);
        this.isDevMode = isDevMode();
    }

    setUpSizeClass(size: string) {
        if (size) {
            this.sizeClass = getClassFromSize(size);
        }
    }

    setupSubElementSizeClass(subElementSize: string) {
        if (subElementSize) {
            this.subElementSizeClass = getClassFromSize(subElementSize);
        }
    }

    setUpLabelSizeClass(labelSize: string) {
        if (labelSize) {
            this.labelSizeClass = getClassFromSize(labelSize);
        }
    }

    setUpErrorMessageSizeClass(errorMessageSize: string) {
        if (errorMessageSize) {
            this.errorMessageSizeClass = getClassFromSize(errorMessageSize);
        }
    }
}

export interface IBaseElement {
    size: string;
    subElementSize: string;
    labelSize: string;
    errorMessageSize: string;
    disabled: boolean;
    row: boolean;
    baseElementImpl: BaseElement;
}
