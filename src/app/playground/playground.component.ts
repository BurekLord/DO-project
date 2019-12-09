import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'do-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

    constructor(private router: Router) { }

    navigateToHome() {
        this.router.navigate(['']);
    }

}
