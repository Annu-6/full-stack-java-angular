import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';

export class Todo {
  /* Each of this constructor argument[id,description,done,targetDate] become a member/variable of Todo class */
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor, DatePipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {
  /* todos = [
    {id: 1, description: 'Learn to Dance'},
    {id: 2, description: 'Become an Expert at Angular'},    
    {id: 3, description: 'Visit London'}
  ] */
 todos = [
  new Todo(1, 'Learn to Dance', false, new Date()),  
  new Todo(2, 'Become an Expert at Angular', false, new Date()),   
  new Todo(3, 'Visit London', false, new Date())
 ]
  /* todo = {
    id: 1,
    description: 'Learn to Dance'
  } */
  constructor() {}
  ngOnInit(): void {
  }
}
