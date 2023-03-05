import { NgModule } from '@angular/core';
import { SharedLibraryComponent } from './shared-library.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SharedLibraryComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedLibraryModule { }
