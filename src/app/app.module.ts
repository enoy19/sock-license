import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LicenseComponent } from './license/license.component';
import { PickerComponent } from './picker/picker.component';

@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent,
    PickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
