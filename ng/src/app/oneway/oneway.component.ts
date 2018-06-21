import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {
  version = "1.0";
  myMsg = "";
 Username = "Test";
   Password = "1234";
 Color = "#FF0000";
  constructor() { }

  ngOnInit() {
  }

}
