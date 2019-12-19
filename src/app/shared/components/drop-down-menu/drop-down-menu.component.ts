import { DropDownItem } from './../../models/drop-down-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'do-drop-down-menu',
    templateUrl: './drop-down-menu.component.html',
    styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent {

    $show = false;

    @Input() items: DropDownItem[];
    @Input() set show(val: boolean) {
        if (val) {
            this.$show = val;
        } else {
            this.$show = false;
        }
    }
    @Output() hide: EventEmitter<boolean> = new EventEmitter();

}
