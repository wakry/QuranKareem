import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import {appError} from '../model/appError'

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  private e:appError = {code:'-1', message:'error'};

  constructor(public snackBar: MatSnackBar, private ngZone: NgZone) {}
  

  private notify = new BehaviorSubject<appError>(this.e);

  // Subscribe to cast in the component
  cast = this.notify.asObservable();

  // Notify
  notifyError(e : appError) {
    this.notify.next(e);
  }

  showErrorSnackBar(){
    this.ngZone.run(()=>{
      this.snackBar.open("Error!!!!", 'X',{panelClass: ['mat-snackbar', 'mat-warn']});
    });
  }

}
