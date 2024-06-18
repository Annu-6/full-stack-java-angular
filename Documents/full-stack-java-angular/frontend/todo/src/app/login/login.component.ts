import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username:string = 'annu'
  password:string = ''
  errorMessage:string = 'Invalid Credentials'
  invalidLogin:boolean = false

  //Router[is a dependency of login component]
  //older way-> Angular.giveMeRouter
  //lately-> Dependency Injection(built-in feature in angular)
  constructor(private router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService) {}

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    // if(this.username==="annu" && this.password==="dummy") {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true;
    }
    // console.log(this.username)
    // console.log(this.password)
  }

}
