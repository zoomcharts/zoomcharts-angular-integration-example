import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ZoomchartsComponent } from './zoomcharts/zoomcharts.component';
import { WindowRef } from './WindowRef';


@NgModule({
  declarations: [
    AppComponent,
    ZoomchartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
