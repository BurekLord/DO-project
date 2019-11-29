import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseElement } from 'src/app/core/base-element';
import { getBtnTypeClass } from 'src/app/core/utils';

export enum BUTTON_TYPES {
    DANGER = 'danger',
    SUCCESS = 'success',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INFO = 'info',
    WARNING = 'warning',
    LIGHT = 'light',
    DARK = 'dark',
    LINK = 'link'
}

@Component({
    selector: 'do-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends BaseElement implements OnInit {
    @Output() onClick: EventEmitter<boolean> = new EventEmitter();

    @Input() label: string;
    @Input() type: BUTTON_TYPES;
    @Input() noFocusCss: boolean;

    btnType: string;

    ngOnInit() {
        this.setUpButtonType();
    }

    setUpButtonType() {
        if (!this.type) {
            this.btnType = getBtnTypeClass('primary');
        } else {
            this.btnType = getBtnTypeClass(this.type);
        }
    }

    buttonClicked() {
        this.onClick.emit(true);
    }

}
