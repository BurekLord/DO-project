import { Component } from '@angular/core';
import { EventHub } from 'src/app/shared/services/event-broadcast.service';
import { Router } from '@angular/router';

@Component({
    selector: 'do-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    searchValue: string;

    constructor(private eventHub: EventHub, private router: Router) { }

    toggleSideBar() {
        this.eventHub.broadcast('toggleSideBar');
        // TODO: remove old code
        // Toggle the side navigation
        //   $("#sidebarToggle").on('click', function(e) {
        //     e.preventDefault();
        //     $("body").toggleClass("sidebar-toggled");
        //     $(".sidebar").toggleClass("toggled");
        //   });
    }

    search(value: string) {
        // TODO: define what we can search and how
        this.searchValue = value;
    }
}
