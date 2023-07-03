import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  toggleNav(): void {
    const nav: any = document.getElementById('nav');
    nav.classList.toggle('open');
  }
}
