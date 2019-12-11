import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'do-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

    @Input() tooltip;

}
