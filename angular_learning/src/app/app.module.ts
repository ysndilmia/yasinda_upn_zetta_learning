import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModullComponent } from './modull/modull.component';
import { Modul2Component } from './modul2/modul2.component';

@NgModule({
  declarations: [
    AppComponent,
    ModullComponent,
    Modul2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
