import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'do-check',
    templateUrl: './check.component.html',
    styleUrls: ['./check.component.scss']
})
export class CheckComponent {

    @Input() checked = false;

    // TODO: write logic

}
