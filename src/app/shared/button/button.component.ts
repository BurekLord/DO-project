import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseElement } from '../core/base-element';

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
    @Input() customCss: string;
    @Input() type: BUTTON_TYPES;
    @Input() noFocusCss: boolean;

    btnType: string;

    ngOnInit() {
        this.setUpButtonType();
    }

    setUpButtonType() {
        if (!this.customCss) {
            if (!this.type) {
                this.btnType = this.getBtnTypeClass(BUTTON_TYPES.PRIMARY);
            } else {
                this.btnType = this.getBtnTypeClass(this.type);
            }
        }
    }

    buttonClicked() {
        this.onClick.emit(true);
    }

    getBtnTypeClass(type: BUTTON_TYPES): string {
        if (type && Object.values(BUTTON_TYPES).includes(type)) {
            return `btn-${type}`;
        } else {
            console.log(`%cInput proper btn type:` + `
    %cDANGER = 'danger',
    SUCCESS = 'success',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INFO = 'info',
    WARNING = 'warning',
    LIGHT = 'light',
    DARK = 'dark',
    LINK = 'link'`, 'color: #FF3207', 'color: #12FF07');
            return undefined;
        }
    }
}
