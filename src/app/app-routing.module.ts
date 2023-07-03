import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BoardComponent } from './components/board/board.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DocumentComponent } from './components/document/document.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'board', component: BoardComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'document', component: DocumentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
