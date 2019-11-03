import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getClassFromSize } from '../utils/utils';

@Component({
    selector: 'do-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Output() onClick: EventEmitter<boolean> = new EventEmitter();

    @Input() label: string;
    @Input() set size(value: string) {
        if (value) {
            this.sizeClass = getClassFromSize(value);
        }
    }
    @Input() style: string;

    sizeClass = getClassFromSize('12|12|12');

    buttonClicked() {
        this.onClick.emit(true);
    }
}
