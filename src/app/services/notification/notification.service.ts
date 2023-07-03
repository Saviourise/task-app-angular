import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showAlert(message: string, status: string) {
    return status === 'success'
      ? this.toastr.success(message, 'Success!')
      : this.toastr.error(message, 'Error!');
  }
}
