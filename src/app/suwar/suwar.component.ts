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
  suwar: Surah[]| undefined;
  error: any|undefined ='';
  show = true;
  constructor(private suwarService: SuwarService) { }

  ngOnInit(): void {
    this.showSuwar();
  }

  showSuwar() {
    //this.suwarService.getSuwar().subscribe(suwar => this.suwar = suwar, error => this.error = error);
    this.suwarService.getSuwar().subscribe(success =>{this.suwar = success },error =>{throw(error);});
  }  
  
}
