import { Component, Inject } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { SidenavModule } from '../sidenav/sidenav.module';
import { NotificationService } from '../../services/notification/notification.service';
import { NgxSemanticModule } from 'ngx-semantic';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag, SidenavModule, NgxSemanticModule],
})
export class BoardComponent {
  todo: {
    name: string;
    index: number;
    id: string;
    description: string;
    board: string;
  }[] = [];

  progress: {
    name: string;
    index: number;
    id: string;
    description: string;
    board: string;
  }[] = [];

  done: {
    name: string;
    index: number;
    id: string;
    description: string;
    board: string;
  }[] = [];

  loadTasks(state: any): void {
    state.sort((a: any, b: any) =>
      a.index > b.index ? 1 : b.index > a.index ? -1 : 0
    );

    this.todo = state.filter((task: any) => task.board === 'todo');
    this.progress = state.filter((task: any) => task.board === 'inprogress');
    this.done = state.filter((task: any) => task.board === 'done');
  }

  drop(
    event: CdkDragDrop<
      {
        name: string;
        index: number;
        id: string;
        description: string;
        board: string;
      }[]
    >
  ): void {
    const board = event.container.element.nativeElement.parentElement
      ?.querySelector('h3')
      ?.innerHTML.toLowerCase()
      .replaceAll(' ', '');

    const taskId =
      event.item.element.nativeElement.querySelector('#id')?.innerHTML;

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const task = tasks.find((task: any) => task.id === taskId);
    task.board = board;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.stateService.setTasks(tasks);
    this.notification.showAlert('Task Updated Successfully!', 'success');
  }

  constructor(
    @Inject(StateService) private stateService: StateService,
    @Inject(NotificationService) private notification: NotificationService
  ) {}

  toggleNav(): void {
    const nav: any = document.getElementById('nav');
    nav.classList.toggle('open');
  }

  ngOnInit(): void {
    this.stateService.tasks && this.loadTasks(this.stateService.tasks);
  }

  ngOndestroy(): void {
    window.removeEventListener('storage', () => {
      return;
    });
  }
}
