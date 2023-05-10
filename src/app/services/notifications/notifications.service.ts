import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { appError } from '../../model/appError'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private e: appError = { code: '-1', message: 'error' };

  constructor(public snackBar: MatSnackBar, private ngZone: NgZone) { }


  private notify = new BehaviorSubject<appError>(this.e);

  // Subscribe to cast in the component
  cast = this.notify.asObservable();

  // Notify
  notifyError(e: appError) {
    this.notify.next(e);
  }

  showErrorSnackBar(message: string) {
    this.ngZone.run(() => {
      this.snackBar.open(message, 'X', {
        duration: 2000,
        // Using mat-toolbar here instead of snackBar because angular material is stupid 
        panelClass: ['mat-toolbar', 'mat-warn']
      });
    });
  }

  showNotificationSnackBar(message: string) {
    this.ngZone.run(() => {
      this.snackBar.open(message, 'X', {
        duration: 2000,
        // Using mat-toolbar here instead of snackBar because angular material is stupid 
        panelClass: ['mat-toolbar', 'mat-primary']
      })
    });
  }

}
