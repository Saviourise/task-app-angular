import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApplicationState {
  tasks: {
    name: string;
    index: number;
    id: string;
    description: string;
    board: string;
  }[];
}

const initialState: ApplicationState = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly store$ = new BehaviorSubject<ApplicationState>(initialState);

  readonly tasks$ = this.store$.pipe(map((state) => state.tasks));

  get tasks():
    | {
        name: string;
        index: number;
        id: string;
        description: string;
        board: string;
      }[]
    | undefined {
    return this.store$.value.tasks;
  }

  setTasks(
    tasks: {
      name: string;
      index: number;
      id: string;
      description: string;
      board: string;
    }[]
  ) {
    this.store$.next({
      ...this.store$.value,
      tasks,
    });
  }
}
