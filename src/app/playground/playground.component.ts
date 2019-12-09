import { ErrorLabel } from './../shared/models/error-label.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'do-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

    formControlTest = new FormControl('test', [Validators.required, Validators.maxLength(1), Validators.pattern('[a-zA-Z ]*')]);

    constructor(private router: Router) { }

    errorLabels = [
        new ErrorLabel('maxlength', 'Must be shorter then 1', true, ''),
        new ErrorLabel('pattern', 'Must a letter char', true, '')
    ];

    navigateToHome() {
        this.router.navigate(['']);
    }

}
