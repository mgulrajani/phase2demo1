import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectAllTodos } from 'app/state/todos/todo.selectors';
import { addTodo,removeTodo, loadTodos  } from 'app/state/todos/todo.actions';
import { Todo } from './todo.model';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  public allTodos$ =this.store.select(selectAllTodos);
  public todo='';
  constructor(private store:Store){}
  ngOnInit(): void {
    this.store.dispatch(loadTodos());

  }



  onSubmit(todoForm:NgForm){
   console.log(todoForm.value);
  }
}
