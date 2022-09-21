import { Injectable,EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  private notify = new BehaviorSubject(false);

  // Subscribe to cast in the component
  cast = this.notify.asObservable();

  // Notify
  notifyError(){
    this.notify.next(true);
  }

  constructor() { }

}
