import { Component, Input, OnInit } from '@angular/core';
import { Surah } from '../services/suwar.service';

@Component({
  selector: 'app-surah-list-element',
  templateUrl: './surah-list-element.component.html',
  styleUrls: ['./surah-list-element.component.css']
})
export class SurahListElementComponent implements OnInit {

  constructor() { }
  @Input() surah:Surah |undefined;
  ngOnInit(): void {
  }

}

