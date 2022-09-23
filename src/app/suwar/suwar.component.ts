import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Surah, SuwarService } from '../services/suwar.service';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-suwar',
  templateUrl: './suwar.component.html',
  providers: [SuwarService],
  styleUrls: ['./suwar.component.css']
})
export class SuwarComponent implements OnInit, OnDestroy {

  suwar: Surah[] | undefined;
  error: any | undefined = '';
  isLoading = true;
  isError = false;
  asyncResult: any;

  constructor(public suwarService: SuwarService) { }

  ngOnInit(): void {
    this.showSuwar();
  }

  showSuwar() {
    this.suwarService.getSuwar().pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(
      success => { this.suwar = success},
      error => { this.isError = true; throw error; });
  }

  ngOnDestroy(): void {
    console.log("SuwarComponent destroyed.");
  }

}
