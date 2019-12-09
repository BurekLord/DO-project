import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, PlaygroundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, SharedModule, AlertModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
