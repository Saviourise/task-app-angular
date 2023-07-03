import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  page = '/';
  constructor(private router: Router) {
    this.page = this.router.url;
  }

  toggleNav(): void {
    const nav: any = document.getElementById('nav');
    nav.classList.toggle('open');
  }
}
