import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MapComponent } from './root.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyApOaltwWHxTkNlORmNr9jcj7DOHpDUv0o'
    })
  ],
  declarations: [ MapComponent ],
  bootstrap:    [ MapComponent ]
})
export class MapModule { }
