import { FormControl } from '@angular/forms';

export class ErrorLabel {
    constructor(
        public checkFn: (control?: FormControl) => boolean,
        public message?: string,
        public showed = true,
        public messageParams = {},
    ) { }
}
