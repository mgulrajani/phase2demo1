import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule } from '@angular/forms';
import { TodoPageRoutingModule } from './todo-routing.module';



@NgModule({
  declarations: [
  TodoPageComponent
  ],
  imports: [
    CommonModule ,FormsModule,TodoPageRoutingModule
  ]
})
export class TodoModule { }
