import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem {
  id: number;
  task: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,NgFor,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todolist: TodoItem[] = [];
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTasktolist: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        checked: false,
      };
      this.todolist.push(newTasktolist);
      console.log(this.todolist);
      this.newTask = '';
    }
  }

  toggleCompleted(index: number): void {
  this.todolist[index].checked = !this.todolist[index].checked;
  }
  deleteTask(id:number): void {
  this.todolist=this.todolist.filter(item=>item.id!==id);
  console.log(this.todolist);
  }

  updateTask(index: number): void {
    const newTask=prompt('Update Task', this.todolist[index].task);
    if(newTask!==null){
      this.todolist[index].task=newTask;
    }
  }
}
