import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDateLong(){
    return new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());
  }

  getDateNum(){
    return new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {day: 'numeric', month: 'numeric',year : 'numeric'}).format(Date.now());
  }

}
