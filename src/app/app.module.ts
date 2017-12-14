import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { RadioButtonModule } from '@syncfusion/ej2-ng-buttons';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RadioButtonModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
