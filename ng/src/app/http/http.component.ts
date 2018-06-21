import { Component, OnInit, } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Http, Response} from '@angular/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
   
  title = 'app';
  results = '';
  data: string;
  loading: boolean;
  constructor(private http: Http){
  }
  ngOnInit() {
    // console.log("------")
    // this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
    //   console.log(data);
      
    // });
    
  }
  makeRequest(): void {
    this.loading = true;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }

}