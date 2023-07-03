import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
})
export class DocumentComponent {
  constructor(private notification: NotificationService) {}

  saveDocument(): void {
    this.notification.showAlert('Document saved', 'success');
  }

  toggleNav(): void {
    const nav: any = document.getElementById('nav');
    nav.classList.toggle('open');
  }
}
