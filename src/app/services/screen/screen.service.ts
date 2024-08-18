import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  isSmall = new ReplaySubject<boolean>();
  currentTheme = new BehaviorSubject<string>("dark");

  constructor(private responsive: BreakpointObserver) {

    this.responsive.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ])
      .subscribe(result => {
        this.isSmall.next(result.matches);
      });

  }

}
