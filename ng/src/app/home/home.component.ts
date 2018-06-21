import { Component, OnInit,TemplateRef } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/index';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // name = "aaa"
  
  sum  = 0;
  clickMessage = '';
  values = '';
  value = '';
  value1 = '';
  
  test = [
    {'name':'nuttakon', 'nickname':'phu','age':23},
    {'name':'peerapong', 'nickname':'boss','age':22},
    {'name':'saroch', 'nickname':'aon','age':24}
    ]
    
  
  
  users: User[] = []
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService,private http: HttpClient) {
    this.users = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.users)
    
  }

  ngOnInit(){
    this.sumNumber();
    // this.userService.getUsers()
    //   .subscribe(users => {
    //     this.users = users;
    //   console.log("============="+users)
    //   })
     
     
  }
 
  // sumNumber(){
  //   var a = 0;
  //   for(var i=0;i<this.test.length;i++){
  //     a += this.test[i].age
  //   }
  //   return a;
  // }
 

  sumNumber(){
    var a = 0;
    for(var i=0;i<this.test.length;i++){
      this.sum += this.test[i].age
    }
    
  
  }
 


  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
    
  
}

