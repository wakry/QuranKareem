import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  isSmall = new ReplaySubject<boolean>();

  constructor(private responsive: BreakpointObserver) {

    this.responsive.observe([
      Breakpoints.Handset
    ])
      .subscribe(result => {
        this.isSmall.next(result.matches);
      });

  }
}
