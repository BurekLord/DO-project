import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'do-input-error',
    templateUrl: './input-error.component.html',
    styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent {

    @Input() errorsLabel;
    @Input() control;
}
