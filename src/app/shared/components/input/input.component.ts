import { Component, forwardRef } from '@angular/core';
import { BaseInputComponent } from '../../core/base-input/base-input';
import { ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
    selector: 'do-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
})
export class InputComponent extends BaseInputComponent {

    constructor() {
        super();
    }

    ngOnInitForChildren() {
        // not used
    }

    writeValue(textInput: string): void {
        this.value = textInput;
        if (this.value) {
            this.input.nativeElement.value = this.value;
        } else {
            this.input.nativeElement.value = '';
        }
    }

    extractInformationFromInternalInput($event: any) {
        return $event.target.value;
    }

    validate(): ValidationErrors {
        // TODO:
        return null;
    }
}
