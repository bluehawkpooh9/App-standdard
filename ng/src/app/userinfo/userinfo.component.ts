import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/index';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})

export class UserinfoComponent implements OnInit {
  users: User[] = []
  
  constructor(private userService: UserService) {
    this.users = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.users)
    
  }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
    console.log("============="+users)
    })
  }

}
