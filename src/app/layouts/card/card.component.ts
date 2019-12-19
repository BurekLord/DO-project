import { Card } from './card.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'do-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input() card: Card;
}
