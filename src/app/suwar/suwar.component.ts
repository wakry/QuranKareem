import { Component, OnInit } from '@angular/core';
import {Surah,SuwarService } from '../services/suwar.service';

@Component({
  selector: 'app-suwar',
  templateUrl: './suwar.component.html',
  providers: [ SuwarService ],
  styleUrls: ['./suwar.component.css']
})
export class SuwarComponent implements OnInit {
  headers: string[] = [];
  suwar: Surah[] =[];
  constructor(private suwarService: SuwarService) { }

  ngOnInit(): void {
    this.showSuwar();
  }

  showSuwar() {
    this.suwarService.getSuwar()
      .subscribe(
        resp => {this.suwar = resp.body!}
      );
  }
}
