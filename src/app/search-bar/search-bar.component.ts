import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() newSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Emit a new search event everytime the input change in the search box.
  onInputChange(value:string){
      this.newSearchEvent.emit(value);
  }

}
