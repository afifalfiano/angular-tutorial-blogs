import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedLibraryModule } from 'shared-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
