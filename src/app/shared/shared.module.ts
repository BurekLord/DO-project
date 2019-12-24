import { RouterModule } from '@angular/router';
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
import { DropDownMenuComponent } from './components/drop-down-menu/drop-down-menu.component';
import { CheckComponent } from './components/check/check.component';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        ButtonComponent,
        InputErrorComponent,
        InputComponent,
        TooltipComponent,
        InputSearchComponent,
        DropDownMenuComponent,
        CheckComponent,
        TableComponent,
    ],
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
        RouterModule,
        MatTableModule,
        FormsModule
    ],
    exports: [
        ButtonComponent,
        InputErrorComponent,
        InputComponent,
        InputSearchComponent,
        DropDownMenuComponent,
        CheckComponent,
        RouterModule,
        TableComponent
    ]
})
export class SharedModule { }
