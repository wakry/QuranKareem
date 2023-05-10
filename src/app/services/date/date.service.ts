import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDate(){
    return new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'numeric',weekday: 'long',year : 'numeric'}).format(Date.now());
  }

}
