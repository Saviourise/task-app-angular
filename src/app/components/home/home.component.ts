import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification/notification.service';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  ValidateWords(control: AbstractControl) {
    const words = control.value.split(' ');
    if (words.length > 15) {
      return { invalidText: true };
    }
    return null;
  }

  addTaskForm = new FormGroup({
    name: new FormControl('', [Validators.required, this.ValidateWords]),
    description: new FormControl('', [Validators.required, this.ValidateWords]),
    board: new FormControl('todo'),
    id: new FormControl(Math.random().toString(36).substr(2, 9)),
    index: new FormControl(
      JSON.parse(localStorage.getItem('tasks') || '[]').length
    ),
  });

  get name() {
    return this.addTaskForm.get('name');
  }

  get description() {
    return this.addTaskForm.get('description');
  }

  constructor(
    private router: Router,
    private notification: NotificationService,
    private stateService: StateService
  ) {}

  submitForm() {
    const tasks = localStorage.getItem('tasks');
    let tasksArray = [];

    if (tasks) {
      tasksArray = JSON.parse(tasks);
    }
    tasksArray.push(this.addTaskForm.value);
    this.stateService.setTasks(tasksArray);
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    this.notification.showAlert('Task Added Successfully!', 'success');
    return this.router.navigate(['/board']);
  }
}
