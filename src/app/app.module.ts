import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LicenseComponent } from './license/license.component';
import { PickerComponent } from './picker/picker.component';
import { CardComponent } from './card/card.component';
import { ArrowComponent } from './arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    LicenseComponent,
    PickerComponent,
    CardComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
