import { TooltipModel } from './../../models/tooltip.model';
import { ErrorLabel } from '../../models/error-label.model';
import { BaseElement, IBaseElement } from '../base-element';
import { OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { log } from 'util';

/**
 * Intended to be extended by other components like Input, checkbox, radio etc...
 */

export abstract class BaseInputComponent implements IBaseElement, ControlValueAccessor, OnInit {

    @Input() size: string;
    @Input() subElementSize: string;
    @Input() labelSize: string;
    @Input() errorMessageSize: string;
    @Input() disabled: boolean;
    @Input() row = false;

    @Input('label') set $label(value: string) {
        const mathRandom = Math.floor(Math.random() * 9999);
        if (value) {
            this.label = value.trim();
            this.id = value.replace('.', '_') + '_' + mathRandom;
        } else {
            this.id = 'elementId_' + mathRandom;
        }
    }
    @Input('placeholder') set $placeholder(value: string) {
        if (!this.disabled) {
            if (value) {
                this.placeholder = value.trim();
            }
        }
    }
    @Input() placeholderHidden = false;
    @Input() formControl = new FormControl();
    @Input() errorsLabel: Array<ErrorLabel>;
    @Input() tooltip: TooltipModel;

    label: string;
    placeholder: string;

    onChangeCallBack: any;
    onTouchCallBack: any;
    error: any;
    value: any;
    id: string;

    baseElementImpl: BaseElement;

    @ViewChild('input', { static: true })
    set input(input: ElementRef) {
        this.$input = input;
        if (!input) { return; }
        this.input.nativeElement.onblur = () => {
            if (this.onTouchCallBack) {
                this.onTouchCallBack();
            }
        };
    }
    get input() {
        return this.$input;
    }
    protected $input: ElementRef;

    ngOnInit() {
        if (!this.formControl) {
            log('Form Control is not defined!');
            return;
        }
        this.baseElementImpl = new BaseElement(this.size, this.subElementSize, this.labelSize, this.errorMessageSize);

        this.ngOnInitForChildren();
    }

    registerOnChange(fn: any): void {
        this.onChangeCallBack = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchCallBack = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public onChange = ($event: any) => {
        setTimeout(() => {
            this.value = this.extractInformationFromInternalInput($event);
            if (this.onChangeCallBack) {
                this.onChangeCallBack(this.value);
            }
        }, 100);
    }

    abstract writeValue(textInput: any): void;

    abstract ngOnInitForChildren();

    abstract extractInformationFromInternalInput($event: any): any;
}
