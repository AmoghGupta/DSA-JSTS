import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyAngularLibModule } from 'amoghs-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyAngularLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
