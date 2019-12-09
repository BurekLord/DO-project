import { AbstractControl } from '@angular/forms';

export class ErrorLabel {
    constructor(
        public errorName: string,
        public message?: string,
        public showed = true,
        public messageParams = {},
    ) { }
}
