import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home', // name of component
  templateUrl: './home.component.html', // html file
  styleUrls: ['./home.component.css'] // css file
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
  ) { }

  // 4. Create two strings for the user name and id prop.
  name: string = '';
  id: string = '';
  colour: string = '';

  ngOnInit(): void { 
    const UserDetails = this.userService.getUserDetails(); // user the .ts function to get the user details.

    // If UserDetails is not NULL, then set the name and userid prop.
    if (UserDetails) {
      this.name = UserDetails.name;
      this.id = UserDetails.userId;
      this.colour = UserDetails.favouriteColour;
    }
  }

}
