import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserService, // 4. Gets the data from backend
    private router: Router, 
  ) { }

  ngOnInit(): void { }

  onFormSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const favouriteColour = form.value.colour; // 1. Add favourite colour to user details

    // 3. Basic Input Santization
    if (!name || !email || !favouriteColour) {
      alert('Fill in all fields');
      return;
    }

    this.userService
      .postRegister(name, email, favouriteColour) // 1. Add favourite colour to user details
      .subscribe(() => {
        // Once we've received a response, take the user to the home page
        // 4. Implement the home page
        this.router.navigateByUrl('/home');
      });
  }

}
