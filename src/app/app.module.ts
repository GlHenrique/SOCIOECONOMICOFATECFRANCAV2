import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SMNUIModule} from 'ng-smn-ui';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './app.router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GraficosComponent } from './home/graficos/graficos.component';
import {ChartsModule} from 'ng2-charts';
import {NgxFileDropModule} from 'ngx-file-drop';
import { DragDropDirective } from './core/drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraficosComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    SMNUIModule,
    RouterModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
