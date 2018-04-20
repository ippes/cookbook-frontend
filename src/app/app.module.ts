import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FacebookModule} from 'ngx-facebook';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientWrapper} from "./http-client-wrapper";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpClientWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {
}
