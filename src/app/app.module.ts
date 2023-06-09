import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common"
import * as fr from "@angular/common/locales/fr"

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    AuthModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
