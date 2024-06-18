//package com.example.springboot.web;
//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router'
// import { AppComponent } from '../app.component';

//@ComponentScan(
//        value = "com.example.springboot.web")
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

//public class SpringBootFirstWebApplication implements SomeInterface {}
export class WelcomeComponent implements OnInit {
  //String message = "Some Welcome Message";
  message = 'Some Welcome Message'
  name = ''
  //ActivatedRoute
  constructor(private route:ActivatedRoute) {}
  //void init()
  ngOnInit(): void {
    //COMPILATION ERROR this.message = 5
    console.log(this.message)
    // throw new Error('Method not implemented.');
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }
}
