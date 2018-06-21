import {Component} from '@angular/core';
import {DatepickerOptions} from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';
 
@Component({
  selector: 'app-mydate',
  templateUrl: './mydatepicker.component.html',
  
})
export class MydatepickerComponent  {
  date: Date;
  options: DatepickerOptions = {
    locale: enLocale,
    displayFormat: 'DD/MM/YYYY',
  };
  constructor() {
    this.date = new Date();
  }

}
