import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  clickMessage = '';
  values = '';
  value = '';
  value1 = '';
  constructor() { }

  ngOnInit() {
  }
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  onEnter(value: string) { 
    this.value = value; 
    }
    update(value1: string) { 
      this.value1 = value1; 
    }
    lists = ['FrontEnd', 'Backend', 'DBA'];
    addList(newList: string) {
      if (newList) {
        this.lists.push(newList);
      }

}
}
