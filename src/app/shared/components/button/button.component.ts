import { TooltipModel } from './../../models/tooltip.model';
import { IBaseElement } from './../../core/base-element';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseElement } from '../../core/base-element';

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
export class ButtonComponent implements IBaseElement, OnInit {
    @Input() size: string;
    @Input() subElementSize: string;
    @Input() labelSize: string;
    @Input() errorMessageSize: string;
    @Input() disabled: boolean;
    @Input() tooltip: TooltipModel;
    @Input() row: boolean;
    @Output() onClick: EventEmitter<ButtonComponent> = new EventEmitter();

    @Input()
    set label(label: string) {
        this.$label = label.trim();
    }
    get label() {
        return this.$label;
    }
    $label = 'INSERT TITLE PROPERTY';

    /**
     * if added no default css is applied
     */
    @Input() customCssClass: string;
    @Input() customCssStyle: string;

    @Input() type: BUTTON_TYPES;

    /**
     * removes focus css
     */
    @Input() noFocusCss: boolean;

    /**
     * adds class="fa fa-{{icon}}" on the left side of the label
     */
    @Input() icon: string;
    /**
     *   class="fa fa-{{iconRight}}" on the right side of the label
     */
    @Input() iconRight: string;

    btnType: string;

    baseElementImpl: BaseElement;

    ngOnInit() {
        this.baseElementImpl = new BaseElement(this.size, this.subElementSize, this.labelSize, this.errorMessageSize);
        this.setUpButtonType();
    }

    /**
     * sets BUTTON_TYPES.PRIMARY btn class if no customCss is added and no type is provided in input
     */
    setUpButtonType() {
        if (this.noCustomCss()) {
            if (!this.type) {
                this.btnType = this.getBtnTypeClass(BUTTON_TYPES.PRIMARY);
            } else {
                this.btnType = this.getBtnTypeClass(this.type);
            }
        }
    }

    noCustomCss(): boolean {
        return !this.customCssClass && !this.customCssStyle;
    }

    buttonClicked() {
        if (this.disabled) {
            return;
        }
        this.onClick.emit(this);
    }


    getBtnTypeClass(type: BUTTON_TYPES): string {
        if (type && Object.values(BUTTON_TYPES).includes(type)) {
            return `btn-${type}`;
        } else if (this.baseElementImpl.isDevMode) {
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
        } else {
            return undefined;
        }
    }
}
