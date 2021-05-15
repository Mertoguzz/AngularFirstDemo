import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public todoService: TodoService) { } 
  ngOnInit() {
  }
 
 
  onSubmit() {
    let formData = this.todoService.todoForm.value; 
    let isValid = this.CheckRequiredFields(formData['summary']);
    isValid ? this.todoService.addTodo(formData): alert('Please fill in the description field');
  }
  CheckRequiredFields(data){
    if (!data){
      return false;
    }
    return true;
  }
}
