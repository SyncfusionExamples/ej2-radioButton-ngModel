import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.html'
})
export class AppComponent  {
  male = 'male';
  female = 'female';
  gender = 'male';
  constructor() {
    
  }

  logForm(value: any) {
    console.log(value);
  }
}
