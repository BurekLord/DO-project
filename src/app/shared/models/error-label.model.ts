import { FormControl } from '@angular/forms';

export enum ERROR_LABEL_COLOR {
    ERROR = 'msg-error', WARNING = 'msg-warning', GREEN = 'msg-ok'
}

export class ErrorLabel {
    constructor(
        public checkFn: (control?: FormControl) => boolean,
        public message: string,
        public messageParams = {},
        public color = ERROR_LABEL_COLOR.ERROR,
    ) { }
}
