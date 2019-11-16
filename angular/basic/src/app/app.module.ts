import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmailEditorModule } from 'angular-email-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    EmailEditorModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
