import { TranslateService } from '@ngx-translate/core';
import { ErrorLabel } from './../../models/error-label.model';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'do-input-error',
    templateUrl: './input-error.component.html',
    styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent {

    @Input() control: AbstractControl;
    @Input() set errorsLabel(errors: ErrorLabel[]) {
        if (errors) {
            errors.forEach(error => {
                for (const key in error.messageParams) {
                    if (error.messageParams[key]) {
                        error.messageParams[key] = this.translate.instant('' + error.messageParams[key]);
                    }
                }
            });
        }
    }

    errors: ErrorLabel[];

    constructor(private translate: TranslateService) { }
}
