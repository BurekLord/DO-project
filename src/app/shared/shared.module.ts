import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { InputComponent } from './components/input/input.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { InputSearchComponent } from './components/input-search/input-search.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [ButtonComponent, InputErrorComponent, InputComponent, TooltipComponent, InputSearchComponent],
    imports: [
        CommonModule,
        PopoverModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    exports: [ButtonComponent, InputErrorComponent, InputComponent]
})
export class SharedModule { }
