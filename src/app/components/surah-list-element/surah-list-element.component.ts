import { Component, Input, OnInit } from '@angular/core';
import { Surah } from '../../model/surah';

@Component({
  selector: 'app-surah-list-element',
  templateUrl: './surah-list-element.component.html',
  styleUrls: ['./surah-list-element.component.css']
})
export class SurahListElementComponent implements OnInit {

  @Input() surah: Surah | undefined;

  constructor() { }

  ngOnInit(): void {}

  doStuff() {
    console.log("HELLO!!!");
  }

}

