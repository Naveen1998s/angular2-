import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  values
  constructor(private user:UserServiceService) { }
  ngOnInit(): void {
    this.values=this.user.getData()
  }

}
