import { EventHub } from 'src/app/shared/services/event-broadcast.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'do-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {

    $hide = true;
    showPagesDropdown = false;
    subscriptions: Subscription[] = [];

    constructor(private eventHub: EventHub) { }

    ngOnInit() {
        const sub = this.eventHub.observe('toggleSideBar', () => {
            this.$hide = !this.$hide;
        });
        this.subscriptions.push(sub);
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            if (sub) {
                sub.unsubscribe();
            }
        });
    }

}
