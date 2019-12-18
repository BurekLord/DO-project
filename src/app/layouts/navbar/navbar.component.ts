import { DropDownItem } from '../../shared/models/drop-down-item';
import { Component, OnInit } from '@angular/core';
import { EventHub } from 'src/app/shared/services/event-broadcast.service';
import { Router } from '@angular/router';

@Component({
    selector: 'do-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    searchValue: string;

    showBellDropDown: boolean;
    bellDropItems: DropDownItem[];

    envelopeDropItems: DropDownItem[];
    showEnvelopeDropDown: boolean;

    userDropItems: DropDownItem[];
    showUserDropDown: boolean;

    title: string;

    constructor(private eventHub: EventHub, private router: Router) { }

    ngOnInit() {
        this.showBellDropDown = false;
        this.showEnvelopeDropDown = false;
        this.showUserDropDown = false;

        this.title = 'Don`t think... Do!';

        // TODO: get all notifications
        // this.bellDropItems = bell notifications
        // this.envelopeDropItems = envelope notifications

        this.userDropItems = [
            new DropDownItem('Settings', 'settings'),
            new DropDownItem('Log in', 'logIn'),
            new DropDownItem('Sign in', 'signIn'),
            new DropDownItem('Log out', 'logOut'),
        ];
    }

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

    toggleDropDown(value: string) {
        if (value === 'bell' && !this.showBellDropDown) {
            this.showBellDropDown = true;
            this.showEnvelopeDropDown = false;
            this.showUserDropDown = false;
            return;
        } else {
            this.showBellDropDown = false;
        }
        if (value === 'envelope' && !this.showEnvelopeDropDown) {
            this.showBellDropDown = false;
            this.showEnvelopeDropDown = true;
            this.showUserDropDown = false;
            return;
        } else {
            this.showEnvelopeDropDown = false;
        }
        if (value === 'user' && !this.showUserDropDown) {
            this.showBellDropDown = false;
            this.showEnvelopeDropDown = false;
            this.showUserDropDown = true;
            return;
        } else {
            this.showUserDropDown = false;
        }
    }

}
