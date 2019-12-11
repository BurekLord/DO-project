import { Component, OnInit } from '@angular/core';
import { EventHub } from 'src/app/shared/services/event-brodcast.servoce';
import { Router } from '@angular/router';

@Component({
    selector: 'do-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(private eventHub: EventHub, private router: Router) { }

    toggleSideBar() {
        this.eventHub.broadcast('toggleSideBar');
        // Toggle the side navigation
        //   $("#sidebarToggle").on('click', function(e) {
        //     e.preventDefault();
        //     $("body").toggleClass("sidebar-toggled");
        //     $(".sidebar").toggleClass("toggled");
        //   });
    }



}
