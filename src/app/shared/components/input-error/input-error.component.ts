import { TranslateService } from '@ngx-translate/core';
import { ErrorLabel } from './../../models/error-label.model';
import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription, Subject, merge, Observable } from 'rxjs';

@Component({
    selector: 'do-input-error',
    templateUrl: './input-error.component.html',
    styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent implements OnDestroy {

    errorsSubject: Subject<ErrorLabel[]> = new Subject();

    @Input() set errorsLabel(errors: ErrorLabel[]) {
        if (errors) {
            this.errorsSubject.next(errors);
        }
    }

    subscriptions: Subscription[] = [];

    errors: ErrorLabel[];

    constructor(private translate: TranslateService) {
        const sub = this.errorsSubject.subscribe(res => {
            this.translateErrorMessageParams(res);
        });
        this.subscriptions.push(sub);
    }

    translateErrorMessageParams(errors: ErrorLabel[]) {
        errors.forEach(error => {
            for (const key in error.messageParams) {
                if (error.messageParams[key]) {
                    error.messageParams[key] = this.translate.instant('' + error.messageParams[key]);
                }
            }
        });
        this.errors = errors;
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => {
            if (sub) {
                sub.unsubscribe();
            }
        });
    }
}
