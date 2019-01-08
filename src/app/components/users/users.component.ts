import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Properties
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
              street: '50 Main St',
              city: 'Boston',
              state: 'MA'
          }
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
              street: '20 School St',
              city: 'Lynn',
              state: 'MA'
          }
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 20,
          address: {
              street: '10 briggs St',
              city: 'Havannah',
              state: 'MA'
          }
        }
      ];

      this.addUser({
        firstName: 'David',
        lastName: 'Jackson'
      });

      this.loaded = true;
    }, 2000)
    

    
  }

  addUser(user: User) {
    this.users.push(user);
  }
}