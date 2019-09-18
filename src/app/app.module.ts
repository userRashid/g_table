import { TablePropertyPipe } from './components/g-table/pipes/table-property.pipe';
import { GtTableComponent } from './components/g-table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GtTableComponent,
    TablePropertyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
