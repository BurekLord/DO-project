import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { PlaygroundComponent } from './playground/playground.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SideMenuComponent } from './layouts/side-menu/side-menu.component';
import { CardComponent } from './layouts/card/card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PlaygroundComponent,
        NavbarComponent,
        SideMenuComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        AlertModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
